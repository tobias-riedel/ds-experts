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
import { useEffect, useRef, useState } from 'react';
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

const INITIAL_STATE: FormItem = {
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

  const assignProjectsFieldRef = useRef<HTMLSelectElement>(null);
  const unassignProjectsFieldRef = useRef<HTMLSelectElement>(null);

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
      showErrorToast('Es ist ein Fehler beim Hinzufügen des Eintrags aufgetreten.');
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

  const isUsedProject = (project: Project): boolean | undefined =>
    loadedItem?.projects.some((loadedItemProject) => project.id === loadedItemProject.projectId);

  const [selectedProjects, setSelectedProjects] = useState<Project[]>([]);
  const [deselectedProjects, setDeselectedProjects] = useState<Project[]>([]);
  const [addedProjects, setAddedProjects] = useState<Project[]>(
    [...loadedProjects].filter(isUsedProject).sort(sortProjects)
  );
  const [availableProjects, setAvailableProjects] = useState<Project[]>(
    [...loadedProjects].filter((project) => !isUsedProject(project)).sort(sortProjects)
  );

  const findProjectById = (projectId: string, useAvailableProjects: boolean): Project | null => {
    const projects = useAvailableProjects ? availableProjects : addedProjects;
    return projects.find((project) => project.id === projectId) || null;
  };

  const handleSelectChange = () => {
    const newlySelectedProjects: Project[] = [...(assignProjectsFieldRef.current?.options ?? [])]
      .filter((option) => option.selected)
      .map((option) => findProjectById(option.value, true) as Project)
      .filter((project) => project != null);

    setSelectedProjects(newlySelectedProjects.sort(sortProjects));
  };

  const handleUnselectChange = () => {
    const newlyDeselectedProjects: Project[] = [...(unassignProjectsFieldRef.current?.options ?? [])]
      .filter((option) => option.selected)
      .map((option) => findProjectById(option.value, false) as Project)
      .filter((project) => project != null);

    setDeselectedProjects(newlyDeselectedProjects.sort(sortProjects));
  };

  const handleAddClick = (arrayHelpers: FieldArrayRenderProps): void => {
    if (!selectedProjects.length) {
      return;
    }

    selectedProjects.forEach((selectedProject) => {
      arrayHelpers.push({
        expertId: loadedItem?.id ?? NEW_EXPERT_ID,
        projectId: selectedProject.id,
      } as ExpertsInProjects);
    });

    setAddedProjects([...addedProjects, ...selectedProjects].sort(sortProjects));
    setAvailableProjects((prevProjects) =>
      prevProjects.filter((project) => !selectedProjects.some((selectedProject) => selectedProject.id === project.id))
    );
    setSelectedProjects([]);
  };

  const handleDeleteClick = (arrayHelpers: FieldArrayRenderProps) => {
    deselectedProjects.forEach(() => arrayHelpers.pop());

    setAddedProjects((prevProjects) =>
      prevProjects.filter(
        (project) => !deselectedProjects.some((unselectedProject) => unselectedProject.id === project.id)
      )
    );
    setAvailableProjects([...availableProjects, ...deselectedProjects].sort(sortProjects));

    setDeselectedProjects([]);
  };

  return (
    <DashboardLayout>
      <h1 className="text-center">{isNew ? 'Neuen Experten anlegen' : 'Experten bearbeiten'}</h1>

      <div className="contact-form">
        <Formik<FormItem>
          initialValues={{ ...INITIAL_STATE, ...loadedItem }}
          validationSchema={toFormikValidationSchema(formSchema)}
          onSubmit={(values, { setSubmitting, setFieldValue }) => {
            // assign the proper values to the expertsToProjects relationship
            const newProjects = addedProjects.map(
              (project) => ({ projectId: project.id, expertId: itemId }) as ExpertsInProjects
            );

            setFieldValue('projects', newProjects);
            const newValues: FormItem = { ...values, projects: newProjects };

            handleSubmit(newValues);
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
                          <div className="row">
                            <div className="form-group col-lg-6">
                              <label htmlFor="projectId">
                                Verfügbare Projekte ({availableProjects.length})
                                <button
                                  type="button"
                                  className="btn btn-link px-2 py-0"
                                  onClick={() => handleAddClick(arrayHelpers)}
                                  disabled={!selectedProjects.length}
                                >
                                  <i className="fas fa-add me-2" title="Zuweisen"></i>zuweisen
                                </button>
                              </label>

                              {availableProjects.length > 0 ? (
                                <Field
                                  as="select"
                                  id="projectId"
                                  name="projectId"
                                  value={selectedProjects?.map((project) => project.id)}
                                  onChange={handleSelectChange}
                                  multiple
                                  innerRef={assignProjectsFieldRef}
                                  size={10}
                                  className="w-100"
                                >
                                  <option value="" disabled={true}>
                                    (Mehrfachauswahl: [Strg+Klick] oder [Shift+Klick])
                                  </option>
                                  {availableProjects.map((project) => (
                                    <option key={project.id} value={project.id}>
                                      {projectLabel(project)}
                                    </option>
                                  ))}
                                </Field>
                              ) : (
                                <div>Keine verfügbaren Projekte vorhanden.</div>
                              )}
                            </div>

                            <div className="formgroup col-lg-6">
                              <label>
                                Beteiligte Projekte ({addedProjects.length})
                                <button
                                  type="button"
                                  className="btn btn-link px-2 py-0"
                                  onClick={() => handleDeleteClick(arrayHelpers)}
                                  disabled={!deselectedProjects.length}
                                >
                                  <i className="fas fa-trash me-2" title="entfernen"></i>entfernen
                                </button>
                              </label>

                              {addedProjects.length > 0 ? (
                                <Field
                                  as="select"
                                  id="unselectProjects"
                                  name="unselectProjects"
                                  value={deselectedProjects?.map((project) => project.id)}
                                  onChange={handleUnselectChange}
                                  multiple
                                  innerRef={unassignProjectsFieldRef}
                                  size={10}
                                  className="w-100"
                                >
                                  <option value="" disabled={true}>
                                    (Mehrfachauswahl: [Strg+Klick] oder [Shift+Klick])
                                  </option>
                                  {addedProjects.map((project) => (
                                    <option key={project.id} value={project.id}>
                                      {projectLabel(project)}
                                    </option>
                                  ))}
                                </Field>
                              ) : (
                                <div>Keine beteiligten Projekte vorhanden.</div>
                              )}
                            </div>
                          </div>
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
