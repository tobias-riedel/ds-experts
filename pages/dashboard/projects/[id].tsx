import { ADD_ITEM_URL_PREFIX } from '@consts/dashboard';
import { DASHBOARD_PROJECTS_URL } from '@consts/routes';
import DasboardLayout from '@layouts/DashboardLayout';
import { Project as FormItem } from '@prisma/client';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

const MySwal = withReactContent(Swal);
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

const formSchema = z.object({
  partnerName: z.string({ required_error: 'Pflichtfeld' }),
  projectName: z.string({ required_error: 'Pflichtfeld' }),
  city: z.string({ required_error: 'Pflichtfeld' }),
});

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

type FormItemKeys = keyof FormItem;

const DASHBOARD_OVERVIEW_URL = DASHBOARD_PROJECTS_URL;

const API_URL = '/api/admin/projects';
const fetchItem = (id: string) => axios<FormItem>(`${API_URL}/${id}`);
const fetchImages = () => axios<string[]>(`/api/admin/images/references`);

export const getServerSideProps: GetServerSideProps<{
  item: FormItem | null;
  images: string[];
  isNew: boolean;
}> = async ({ params }) => {
  let images: string[] = [];
  try {
    images = (await fetchImages()).data;
  } catch (error) {
    console.log('Error loading project background images::', error);
  }

  if (params?.id === ADD_ITEM_URL_PREFIX) {
    return { props: { item: null, images, isNew: true } };
  }

  try {
    const { data: item } = await fetchItem(params?.id as string);
    return { props: { item, images, isNew: false } };
  } catch {
    return { props: { item: null, images, isNew: false } };
  }
};

export default function Page({
  item,
  images,
  isNew,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const router = useRouter();

  const handleSubmit = async (payload: FormItem) => {
    if (isNew) {
      await addItem();
    } else {
      await updateItem();
    }

    async function addItem() {
      try {
        const response = await axios.post(API_URL, payload);
        console.log(response);
        showAddedItemToast();

        router.push(DASHBOARD_OVERVIEW_URL);
      } catch (error) {
        console.log('Error adding new project:', error);
        showErrorToast('Es ist ein Fehler beim Hinzuf+gen des Eintrags aufgetreten.');
      }
    }

    async function updateItem() {
      try {
        const response = await axios.put(`${API_URL}/${item?.id}`, payload);
        console.log(response);
        showUpdatedItemToast();

        router.push(DASHBOARD_OVERVIEW_URL);
      } catch (error) {
        console.log(`Error updating project with ID ${item?.id}:`, error);
        showErrorToast('Es ist ein Fehler beim Abspeichern der Änderungen aufgetreten.');
      }
    }
  };

  return (
    <DasboardLayout>
      <h1 className="text-center">{isNew ? 'Neues Projekt anlegen' : 'Projekt bearbeiten'}</h1>
      <div className="contact-form">
        <Formik<FormItem>
          initialValues={{ ...INITIAL_STATE, ...item }}
          validationSchema={toFormikValidationSchema(formSchema)}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ errors, touched, isSubmitting, dirty, isValid }) => {
            const ctrlClassName = (fieldName: FormItemKeys): string =>
              `form-control ${errors?.[fieldName] ? 'is-invalid' : touched?.[fieldName] ? 'is-valid' : ''}`;

            return (
              <Form className="needs-validation">
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
                      <Field type="text" id="city" name="city" className={ctrlClassName('city')} placeholder="Stadt*" />
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
                        {images.map((image, idx) => (
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

                <div className="text-center">
                  <button type="submit" disabled={isSubmitting || !dirty || !isValid} className="btn btn-primary m-2">
                    Speichern
                  </button>{' '}
                  <Link href={DASHBOARD_OVERVIEW_URL} className="btn btn-secondary m-2">
                    Abbrechen
                  </Link>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </DasboardLayout>
  );
}
