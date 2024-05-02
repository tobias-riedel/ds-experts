import ProjectCard from '@components/References/ReferenceCard';
import { ADD_ITEM_URL_PREFIX } from '@consts/dashboard';
import { MySwal } from '@consts/misc';
import { DASHBOARD_PROJECTS_URL } from '@consts/routes';
import { prisma } from '@db/client';
import DashboardLayout from '@layouts/DashboardLayout';
import { $Enums, Expert, ExpertsInProjects, Project } from '@prisma/client';
import { projectSchema as formSchema } from '@schema/project.schema';
import { listAllExperts } from '@server/trpc/shared/expert';
import { ctrlFieldClassName } from '@utils/form';
import { AllowedImageDirs, getImages } from '@utils/images';
import { trpc } from '@utils/trpc';
import {
  ErrorMessage,
  Field,
  FieldArray,
  FieldArrayRenderProps,
  Form,
  Formik,
  FormikValues,
  useFormikContext,
} from 'formik';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { toFormikValidationSchema } from 'zod-formik-adapter';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const showAddedItemToast = () => {
  MySwal.fire({
    position: 'top-end',
    title: 'Neuer Eintrag angelegt.',
    icon: 'success',
    timer: 1500,
    showConfirmButton: false,
  });
};
const showUpdatedItemToast = () => {
  MySwal.fire({
    position: 'top-end',
    title: 'Änderungen abgespeichert.',
    icon: 'success',
    timer: 1500,
    showConfirmButton: false,
  });
};

const showErrorToast = (msg: string) => {
  MySwal.fire({
    title: 'Fehler!',
    text: msg,
    icon: 'error',
  });
};

const expertLabel = (project: Expert): string => `${project.firstName} ${project.lastName}`;

const sortExperts = (a: Expert, b: Expert): 1 | 0 | -1 =>
  (a.orderId ?? 0) < (b.orderId ?? 0) ? -1 : (a.orderId ?? 0) > (b.orderId ?? 0) ? 1 : 0;

type FormItem = Project & { experts: ExpertsInProjects[] };

const INITIAL_STATE: FormItem = {
  id: '',
  projectName: '',
  partnerName: '',
  city: '',
  locationLat: 0,
  locationLong: 0,
  startedAt: '',
  endedAt: '',
  img: '',
  description: '',
  visibility: $Enums.Visibility.ADMIN,
  orderId: 0,
  slug: '',
  experts: [],
};

const NEW_PROJECT_ID = 'newProjectId';

const visibilities = Object.keys($Enums.Visibility);

const DASHBOARD_OVERVIEW_URL = DASHBOARD_PROJECTS_URL;

const hydrateItem = (item: string | null | undefined): FormItem | null => {
  const loadedItem:
    | (FormItem & {
        endedAt: Date | string | null;
      })
    | null = JSON.parse(item || 'null');

  if (loadedItem == null) {
    return null;
  }

  const processedItem = {
    ...loadedItem,
    endedAt: loadedItem.endedAt ?? '',
  };

  return processedItem as FormItem;
};

export const getServerSideProps: GetServerSideProps<{
  itemId: string;
  item?: string;
  images: string[];
  experts: string;
}> = async ({ params }) => {
  const itemId = params?.id as string;
  const isNew = itemId === ADD_ITEM_URL_PREFIX;

  const item = isNew
    ? null
    : await prisma.project.findUnique({
        where: { id: itemId },
        include: {
          experts: {
            include: { expert: { select: { firstName: true, lastName: true, img: true, orderId: true } } },
            where: { projectId: itemId },
          },
        },
      });
  const images = getImages(AllowedImageDirs.REFERENCES);
  const experts = await listAllExperts();

  return { props: { itemId, item: JSON.stringify(item), images, experts: JSON.stringify(experts) } };
};

export default function Page({
  itemId,
  item,
  images,
  experts,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const router = useRouter();

  const [previewItem, setPreviewItem] = useState<Project | null>();

  const fieldRef = useRef<HTMLSelectElement>(null);

  const BusinessLogic = () => {
    const { values } = useFormikContext<FormItem>();
    useEffect(() => {
      setPreviewItem(values);
    }, [values]);

    return <></>;
  };

  const isNew = itemId === ADD_ITEM_URL_PREFIX;

  const loadedItem = hydrateItem(item);
  const loadedExperts: Expert[] = JSON.parse(experts || '[]');

  const addItem = trpc.projects.create.useMutation({
    onSuccess: () => {
      showAddedItemToast();
      router.push(DASHBOARD_OVERVIEW_URL);
    },
    onError: (error) => {
      console.warn('Error adding new project:', error);
      showErrorToast('Es ist ein Fehler beim Hinzuf+gen des Eintrags aufgetreten.');
    },
  });

  const updateItem = trpc.projects.update.useMutation({
    onSuccess: () => {
      showUpdatedItemToast();
      router.push(DASHBOARD_OVERVIEW_URL);
    },
    onError: (error, data) => {
      console.warn(`Error updating project with ID ${data.id}:`, error.message);
      showErrorToast('Es ist ein Fehler beim Abspeichern der Änderungen aufgetreten.');
    },
  });

  const handleSubmit = async (payload: FormItem) => {
    // const  descriptionMd  = md.render(payload.description ?? '');

    if (isNew) {
      addItem.mutate(payload);
    } else {
      updateItem.mutate(payload);
    }
  };

  // Handle project selection per expert
  const isUsedExpert = (expert: Expert): boolean | undefined =>
    loadedItem?.experts.some((loadedItemExpert) => expert.id === loadedItemExpert.expertId);

  const [selectedExperts, setSelectedExperts] = useState<Expert[]>([]);
  const [addedExperts, setAddedExperts] = useState<Expert[]>([...loadedExperts].filter(isUsedExpert).sort(sortExperts));
  const [availableExperts, setAvailableExperts] = useState<Expert[]>(
    [...loadedExperts].filter((project) => !isUsedExpert(project)).sort(sortExperts)
  );

  const findExpertById = (expertId: string): Expert | null =>
    availableExperts.find((expert) => expert.id === expertId) || null;

  const handleSelectChange = () => {
    const newlySelectedExperts: Expert[] = [...(fieldRef.current?.options ?? [])]
      .filter((option) => option.selected)
      .map((option) => findExpertById(option.value) as Expert)
      .filter((project) => project != null);

    setSelectedExperts(newlySelectedExperts);
  };

  const handleAddClick = (arrayHelpers: FieldArrayRenderProps): void => {
    if (!selectedExperts.length) {
      return;
    }

    selectedExperts.forEach((selectedExpert) => {
      arrayHelpers.push({
        expertId: selectedExpert.id,
        projectId: loadedItem?.id ?? NEW_PROJECT_ID,
      } as ExpertsInProjects);
    });

    setAddedExperts([...addedExperts, ...selectedExperts].sort(sortExperts));
    setAvailableExperts((prevExperts) =>
      prevExperts.filter((expert) => !selectedExperts.some((selectedExpert) => expert.id === selectedExpert.id))
    );
    setSelectedExperts([]);
  };

  const handleDeleteClick = (selectedExpert: Expert, arrayHelpers: FieldArrayRenderProps, index: number) => {
    arrayHelpers.remove(index);
    setAddedExperts((prevExperts) => prevExperts.filter((expert) => expert.id !== selectedExpert.id));
    setAvailableExperts([...availableExperts, selectedExpert].sort(sortExperts));
  };

  return (
    <DashboardLayout>
      <h1 className="text-center">{isNew ? 'Neues Projekt anlegen' : 'Projekt bearbeiten'}</h1>

      <div className="contact-form">
        <Formik<FormItem>
          initialValues={{ ...INITIAL_STATE, ...loadedItem }}
          validationSchema={toFormikValidationSchema(formSchema)}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ errors, touched, isSubmitting, dirty, isValid }) => {
            const ctrlClassName = ctrlFieldClassName<FormItem>(errors, touched);

            return (
              <Form className="needs-validation">
                <BusinessLogic />

                <div className="container">
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="row">
                        <div className="form-group col-lg-6">
                          <label htmlFor="projectName">Projektname*</label>
                          <Field
                            type="text"
                            id="projectName"
                            name="projectName"
                            placeholder="Projektname*"
                            className={ctrlClassName('projectName')}
                            autoFocus={true}
                          />
                          <ErrorMessage name="projectName" component="div" className="form-feedback" />
                        </div>

                        <div className="form-group col-lg-6">
                          <label htmlFor="partnerName">Partnername*</label>
                          <Field
                            type="text"
                            id="partnerName"
                            name="partnerName"
                            className={ctrlClassName('partnerName')}
                            placeholder="Partnername*"
                          />
                          <ErrorMessage name="partnerName" component="div" className="form-feedback" />
                        </div>

                        <div className="form-group col-lg-6">
                          <label htmlFor="city">Stadt*</label>
                          <Field
                            type="text"
                            id="city"
                            name="city"
                            className={ctrlClassName('city')}
                            placeholder="Stadt*"
                          />
                          <ErrorMessage name="city" component="div" className="form-feedback" />
                        </div>
                        <div className="form-group col-lg-3 col-md-6">
                          <label htmlFor="locationLat">Breitengrad der Stadt</label>
                          <Field
                            type="number"
                            id="locationLat"
                            name="locationLat"
                            className={ctrlClassName('locationLat')}
                            placeholder="Breitengrad"
                          />
                          <ErrorMessage name="locationLat" component="div" className="form-feedback" />
                        </div>
                        <div className="form-group col-lg-3 col-md-6">
                          <label htmlFor="locationLong">Längengrad der Stadt</label>
                          <Field
                            type="number"
                            id="locationLong"
                            name="locationLong"
                            className={ctrlClassName('locationLong')}
                            placeholder="Längengrad"
                          />
                          <ErrorMessage name="locationLong" component="div" className="form-feedback" />
                        </div>

                        <div className="form-group col-md-6">
                          <label htmlFor="startedAt">Start des Projekts</label>
                          <Field
                            type="date"
                            id="startedAt"
                            name="startedAt"
                            className={ctrlClassName('startedAt')}
                            placeholder="Start"
                          />
                          <ErrorMessage name="startedAt" component="div" className="form-feedback" />
                        </div>

                        <div className="form-group col-md-6">
                          <label htmlFor="endedAt">Ende des Projekts</label>
                          <Field
                            type="date"
                            id="endedAt"
                            name="endedAt"
                            className={ctrlClassName('endedAt')}
                            placeholder="Ende"
                          />
                          <ErrorMessage name="endedAt" component="div" className="form-feedback" />
                        </div>

                        <div className="form-group col-lg-3 col-md-6">
                          <label htmlFor="visibility">Sichtbarkeit*</label>
                          <Field
                            as="select"
                            id="visibility"
                            name="visibility"
                            className={ctrlClassName('visibility')}
                            placeholder="Sichtbarkeit*"
                          >
                            {visibilities?.map((visibility, idx) => (
                              <option key={idx} value={visibility}>
                                {visibility}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage name="visibility" component="div" className="form-feedback" />
                        </div>

                        <div className="form-group col-lg-3 col-md-6">
                          <label htmlFor="orderId">Reihenfolge</label>
                          <Field
                            type="number"
                            id="orderId"
                            name="orderId"
                            className={ctrlClassName('orderId')}
                            placeholder="Reihenfolge"
                          />
                          <ErrorMessage name="orderId" component="div" className="form-feedback" />
                        </div>

                        <div className="form-group col-lg-6">
                          <label htmlFor="img">Bilderpfad</label>
                          <Field
                            as="select"
                            id="img"
                            name="img"
                            className={ctrlClassName('img')}
                            placeholder="Dateipfad zum Hintergrundbild"
                          >
                            <option value="">(Zufälliges Bild)</option>
                            {images?.map((image, idx) => (
                              <option key={idx} value={image}>
                                {image}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage name="img" component="div" className="form-feedback" />
                        </div>

                        <div className="form-group">
                          <label htmlFor="description">Projektbeschreibung</label>
                          <Field id="description" name="description" className={ctrlClassName('description')}>
                            {({ field }: { field: FormikValues }) => (
                              <ReactQuill
                                theme={'snow'}
                                value={field.value}
                                onChange={field.onChange(field.name)}
                                placeholder="Beschreibung von Tätigkeiten, verwendeten Technologien und Systemen im Projekt"
                              />
                            )}
                          </Field>
                          <ErrorMessage name="description" component="div" className="form-feedback" />
                        </div>
                      </div>

                      <FieldArray
                        name="experts"
                        render={(arrayHelpers) => (
                          <>
                            {availableExperts.length > 0 && (
                              <div className="row">
                                <div className="form-group">
                                  <label htmlFor="expertId" className="w-100">
                                    Experten
                                    <button
                                      type="button"
                                      className="btn btn-link px-2 py-0"
                                      onClick={() => handleAddClick(arrayHelpers)}
                                      disabled={!selectedExperts.length}
                                    >
                                      <i className="fas fa-add me-2" title="Hinzufügen"></i>hinzufügen
                                    </button>
                                  </label>

                                  <Field
                                    as="select"
                                    id="expertId"
                                    name="expertId"
                                    placeholder="Experte"
                                    value={selectedExperts?.map((expert) => expert.id)}
                                    onChange={handleSelectChange}
                                    multiple
                                    innerRef={fieldRef}
                                    size={6}
                                    className="w-100"
                                  >
                                    <option value="" disabled={true}>
                                      (Mehrfachauswahl: [Strg+Klick] oder [Shift+Klick])
                                    </option>
                                    {availableExperts.map((expert) => (
                                      <option key={expert.id} value={expert.id}>
                                        {expertLabel(expert)}
                                      </option>
                                    ))}
                                  </Field>
                                </div>
                              </div>
                            )}

                            {addedExperts.length > 0 && (
                              <div className="row">
                                <div>
                                  <ul style={{ listStyle: 'none' }}>
                                    {addedExperts.map((expert, index) => (
                                      <li key={index}>
                                        <button
                                          type="button"
                                          className="btn btn-link px-2 py-0"
                                          onClick={() => handleDeleteClick(expert, arrayHelpers, index)}
                                        >
                                          <i className="fas fa-trash" title="Löschen"></i>
                                        </button>
                                        {expertLabel(expert)}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      />

                      <div className="text-center pb-70">
                        <button
                          type="submit"
                          disabled={isSubmitting || !dirty || !isValid}
                          className="btn btn-primary m-2"
                        >
                          Speichern
                        </button>
                        <Link href={DASHBOARD_OVERVIEW_URL} className="btn btn-secondary m-2">
                          Abbrechen
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <h3 className="text-center">Vorschau</h3>

                      <div className="col-lg-12 offset-lg-0 col-md-6 offset-md-3 case-studies-area">
                        <div className="work-card shadow">
                          <ProjectCard data={previewItem} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </DashboardLayout>
  );
}
