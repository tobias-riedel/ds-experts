import Loading from '@components/Common/Loading';
import ProjectCard from '@components/References/ReferenceCard';
import { ADD_ITEM_URL_PREFIX } from '@consts/dashboard';
import { TRPC_FORMIK_CACHE_OPTS } from '@consts/db';
import { MySwal } from '@consts/misc';
import { DASHBOARD_PROJECTS_URL } from '@consts/routes';
import DasboardLayout from '@layouts/DashboardLayout';
import { Project as FormItem } from '@prisma/client';
import { ctrlFieldClassName } from '@utils/form';
import { trpc } from '@utils/trpc';
import { ErrorMessage, Field, Form, Formik, useFormikContext } from 'formik';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { projectSchema as formSchema } from '@schema/project.schema';

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
  isPublic: false,
  orderId: 0,
  slug: '',
};

const DASHBOARD_OVERVIEW_URL = DASHBOARD_PROJECTS_URL;

export const getServerSideProps: GetServerSideProps<{ itemId: string }> = async ({ params }) => {
  return { props: { itemId: params?.id as string } };
};

export default function Page({ itemId }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
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

  const images = trpc.images.listReferences.useQuery(undefined, TRPC_FORMIK_CACHE_OPTS);

  const item = isNew
    ? { data: {}, isSuccess: true, isLoading: false }
    : trpc.projects.byIdDashboard.useQuery({ id: itemId }, TRPC_FORMIK_CACHE_OPTS);

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
    if (isNew) {
      addItem.mutate(payload);
    } else {
      updateItem.mutate(payload);
    }
  };

  return (
    <DasboardLayout>
      <h1 className="text-center">{isNew ? 'Neues Projekt anlegen' : 'Projekt bearbeiten'}</h1>

      <Loading isLoading={images.isLoading || item.isLoading}>
        <div className="contact-form">
          <Formik<FormItem>
            initialValues={{ ...INITIAL_STATE, ...item?.data }}
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
                        <div>
                          <label>Sichtbarkeit</label>
                        </div>
                        <label>
                          <Field type="checkbox" name="isPublic" /> Öffentlich
                        </label>
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
                          <option value="">(Keines)</option>
                          {images.data?.map((image, idx) => (
                            <option key={idx} value={image}>
                              {image}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage name="img" component="div" className="form-feedback" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="description">Projektbeschreibung</label>
                        <Field
                          type="text"
                          as="textarea"
                          id="description"
                          name="description"
                          cols={30}
                          rows={6}
                          placeholder="Beschreibung von Tätigkeiten, verwendeten Technologien und Systemen im Projekt"
                          className={ctrlClassName('description')}
                        />
                        <ErrorMessage name="description" component="div" className="form-feedback" />
                      </div>
                    </div>
                  </div>

                  <div className="text-center pb-70">
                    <button type="submit" disabled={isSubmitting || !dirty || !isValid} className="btn btn-primary m-2">
                      Speichern
                    </button>
                    <Link href={DASHBOARD_OVERVIEW_URL} className="btn btn-secondary m-2">
                      Abbrechen
                    </Link>
                  </div>

                  <div className="container">
                    <h2 className="text-center">Vorschau</h2>

                    <div className="col-md-4 offset-md-4 col-6 offset-3">
                      <div className="work-card shadow">
                        <ProjectCard data={previewItem} />
                      </div>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Loading>
    </DasboardLayout>
  );
}
