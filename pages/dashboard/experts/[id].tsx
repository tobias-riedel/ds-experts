import ExpertCard from '@components/Team/ExpertCard';
import { ADD_ITEM_URL_PREFIX } from '@consts/dashboard';
import { MySwal } from '@consts/misc';
import { DASHBOARD_EXPERTS_URL } from '@consts/routes';
import { prisma } from '@db/client';
import DashboardLayout from '@layouts/DashboardLayout';
import { $Enums, Expert, ExpertsInProjects, Project } from '@prisma/client';
import { expertSchema as formSchema } from '@schema/expert.schema';
import { listAllProjects } from '@server/trpc/shared/project';
import { ctrlFieldClassName } from '@utils/form';
import { AllowedImageDirs, getImages } from '@utils/images';
import { trpc } from '@utils/trpc';
import { ErrorMessage, Field, FieldArray, FieldArrayRenderProps, Form, Formik, useFormikContext } from 'formik';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toFormikValidationSchema } from 'zod-formik-adapter';

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

const projectLabel = (project: Project): string =>
  `${project.projectName} ${project.startedAt || project.endedAt ? `(${project.startedAt} - ${project.endedAt})` : ''}`;

const sortProjects = (a: Project, b: Project): 1 | 0 | -1 =>
  (a.startedAt ?? 0) < (b.startedAt ?? 0)
    ? -1
    : (a.startedAt ?? 0) > (b.startedAt ?? 0)
    ? 1
    : (a.endedAt ?? 0) < (b.endedAt ?? 0)
    ? -1
    : (a.endedAt ?? 0) > (b.endedAt ?? 0)
    ? 1
    : 0;

type FormItem = Expert & { projects: ExpertsInProjects[] };

const INITIAL_STATE: FormItem & { projects: string[] } = {
  id: '',
  firstName: '',
  lastName: '',
  role: '',
  img: '',
  startedAt: '',
  endedAt: '',
  visibility: $Enums.Visibility.ADMIN,
  orderId: 0,
  slug: '',
  createdAt: new Date(),
  updatedAt: new Date(),
  projects: [],
};

const NEW_EXPERT_ID = 'newExpertId';

const visibilities = Object.keys($Enums.Visibility);

const DASHBOARD_OVERVIEW_URL = DASHBOARD_EXPERTS_URL;

const hydrateItem = (item: string | null | undefined): FormItem | null => {
  const loadedItem:
    | (FormItem & {
        createdAt: Date | string | null;
        updatedAt: Date | string | null;
        endedAt: Date | string | null;
      })
    | null = JSON.parse(item || 'null');

  if (loadedItem == null) {
    return null;
  }

  const processedItem = {
    ...loadedItem,
    createdAt: new Date(loadedItem.createdAt as string),
    updatedAt: new Date(loadedItem.updatedAt as string),
    endedAt: loadedItem.endedAt ?? '',
  };

  return processedItem as FormItem;
};

export const getServerSideProps: GetServerSideProps<{
  itemId: string;
  item?: string;
  images: string[];
  projects: string;
}> = async ({ params }) => {
  const itemId = params?.id as string;
  const isNew = itemId === ADD_ITEM_URL_PREFIX;

  const item = isNew
    ? null
    : await prisma.expert.findUnique({ where: { id: itemId }, include: { projects: { where: { expertId: itemId } } } });
  const images = getImages(AllowedImageDirs.TEAM);
  const projects = await listAllProjects();

  return { props: { itemId, item: JSON.stringify(item), images, projects: JSON.stringify(projects) } };
};

export default function Page({
  itemId,
  item,
  images,
  projects,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const router = useRouter();

  const [previewItem, setPreviewItem] = useState<FormItem | null>();

  const BusinessLogic = () => {
    const { values } = useFormikContext<FormItem>();

    useEffect(() => {
      setPreviewItem(values);
    }, [values]);

    return <></>;
  };

  const isNew = itemId === ADD_ITEM_URL_PREFIX;

  const loadedItem = hydrateItem(item);
  const loadedProjects: Project[] = JSON.parse(projects || '[]');

  const addItem = trpc.experts.create.useMutation({
    onSuccess: () => {
      showAddedItemToast();
      router.push(DASHBOARD_OVERVIEW_URL);
    },
    onError: (error) => {
      console.warn('Error adding new expert:', error);
      showErrorToast('Es ist ein Fehler beim Hinzuf+gen des Eintrags aufgetreten.');
    },
  });

  const updateItem = trpc.experts.update.useMutation({
    onSuccess: () => {
      showUpdatedItemToast();
      router.push(DASHBOARD_OVERVIEW_URL);
    },
    onError: (error, data) => {
      console.warn(`Error updating expert with ID ${data.id}:`, error.message);
      showErrorToast('Es ist ein Fehler beim Abspeichern der Änderungen aufgetreten.');
    },
  });

  const handleSubmit = async (payload: FormItem) => {
    if (isNew) {
      addItem.mutate(payload);
    } else {
      updateItem.mutate(payload);
    }
  };

  // Handle project selection per expert
  const isUsedProject = (project: Project): boolean | undefined =>
    loadedItem?.projects.some((loadedItemProject) => project.id === loadedItemProject.projectId);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [addedProjects, setAddedProjects] = useState<Project[]>(
    [...loadedProjects].filter(isUsedProject).sort(sortProjects)
  );
  const [availableProjects, setAvailableProjects] = useState<Project[]>(
    [...loadedProjects].filter((project) => !isUsedProject(project)).sort(sortProjects)
  );

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const projectId = e.target.value;
    const selectedProject = availableProjects.find((project) => project.id === projectId) || null;
    setSelectedProject(selectedProject);
  };

  const handleAddClick = (arrayHelpers: FieldArrayRenderProps): void => {
    if (!selectedProject) {
      return;
    }

    arrayHelpers.push({
      expertId: loadedItem?.id ?? NEW_EXPERT_ID,
      projectId: selectedProject.id,
    } as ExpertsInProjects);
    setAddedProjects([...addedProjects, selectedProject].sort(sortProjects));
    setAvailableProjects((prevProjects) => prevProjects.filter((project) => project.id !== selectedProject.id));
    setSelectedProject(null);
  };

  const handleDeleteClick = (selectedProject: Project, arrayHelpers: FieldArrayRenderProps, index: number) => {
    arrayHelpers.remove(index);
    setAddedProjects((prevProjects) => prevProjects.filter((project) => project.id !== selectedProject.id));
    setAvailableProjects([...availableProjects, selectedProject].sort(sortProjects));
  };

  return (
    <DashboardLayout>
      <h1 className="text-center">{isNew ? 'Neuen Experten anlegen' : 'Experten bearbeiten'}</h1>

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
                          <label htmlFor="firstName">Vorname*</label>
                          <Field
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Vorname*"
                            className={ctrlClassName('firstName')}
                            autoFocus={true}
                          />
                          <ErrorMessage component="div" className="form-feedback" name="firstName" />
                        </div>

                        <div className="form-group col-lg-6">
                          <label htmlFor="lastName">Nachname*</label>
                          <Field
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Nachname*"
                            className={ctrlClassName('lastName')}
                          />
                          <ErrorMessage name="lastName" component="div" className="form-feedback" />
                        </div>

                        <div className="form-group col-lg-6">
                          <label htmlFor="role">Rolle*</label>
                          <Field
                            type="text"
                            id="role"
                            name="role"
                            className={ctrlClassName('role')}
                            placeholder="Rolle*"
                          />
                          <ErrorMessage name="role" component="div" className="form-feedback" />
                        </div>

                        <div className="form-group col-lg-6">
                          <label htmlFor="img">Bilderpfad</label>
                          <Field
                            as="select"
                            id="img"
                            name="img"
                            className={ctrlClassName('img')}
                            placeholder="Dateipfad zum Porträt"
                          >
                            <option value="">(Keines)</option>
                            {images?.map((image, idx) => (
                              <option key={idx} value={image}>
                                {image}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage name="img" component="div" className="form-feedback" />
                        </div>

                        <div className="form-group col-lg-3 col-md-6">
                          <label htmlFor="startedAt">Firmenbeitritt*</label>
                          <Field
                            type="date"
                            id="startedAt"
                            name="startedAt"
                            className={ctrlClassName('startedAt')}
                            placeholder="Firmenbeitritt*"
                          />
                          <ErrorMessage name="startedAt" component="div" className="form-feedback" />
                        </div>

                        <div className="form-group col-lg-3 col-md-6">
                          <label htmlFor="endedAt">Firmenaustritt</label>
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
                      </div>

                      <FieldArray
                        name="projects"
                        render={(arrayHelpers) => (
                          <>
                            {availableProjects.length > 0 && (
                              <div className="row">
                                <div className="form-group">
                                  <label htmlFor="projectId" className="w-100">
                                    Projekte
                                  </label>

                                  <Field
                                    as="select"
                                    id="projectId"
                                    name="projectId"
                                    placeholder="Projekt"
                                    value={selectedProject?.id ?? ''}
                                    onChange={handleSelectChange}
                                  >
                                    <option value="" disabled={true}>
                                      (Projekt wählen...)
                                    </option>
                                    {availableProjects.map((project) => (
                                      <option key={project.id} value={project.id}>
                                        {projectLabel(project)}
                                      </option>
                                    ))}
                                  </Field>

                                  <button
                                    type="button"
                                    className="btn btn-link px-2 py-0"
                                    onClick={() => handleAddClick(arrayHelpers)}
                                    disabled={selectedProject == null}
                                  >
                                    <i className="fas fa-add" title="Hinzufügen"></i>
                                  </button>
                                </div>
                              </div>
                            )}

                            {addedProjects.length > 0 && (
                              <div className="row">
                                <div>
                                  <ul style={{ listStyle: 'none' }}>
                                    {addedProjects.map((project, index) => (
                                      <li key={index}>
                                        <button
                                          type="button"
                                          className="btn btn-link px-2 py-0"
                                          onClick={() => handleDeleteClick(project, arrayHelpers, index)}
                                        >
                                          <i className="fas fa-trash" title="Löschen"></i>
                                        </button>
                                        {projectLabel(project)}
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

                      <div className="col-lg-12 offset-lg-0 col-md-6 offset-md-3">
                        <ExpertCard data={previewItem} />
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
