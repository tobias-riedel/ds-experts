import Loading from '@components/Common/Loading';
import { ADD_ITEM_URL_PREFIX } from '@consts/dashboard';
import { DASHBOARD_EXPERTS_URL } from '@consts/routes';
import DasboardLayout from '@layouts/DashboardLayout';
import { Expert as FormItem } from '@prisma/client';
import { ctrlFieldClassName } from '@utils/forms';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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

// TODO: implement zod-prisma-generator: https://github.com/CarterGrimmeisen/zod-prisma or
// https://www.npmjs.com/package/prisma-zod-generator
const formSchema = z.object({
  firstName: z.string({ required_error: 'Pflichtfeld' }),
  lastName: z.string({ required_error: 'Pflichtfeld' }),
  role: z.string({ required_error: 'Pflichtfeld' }),
  startedAt: z.string({ required_error: 'Pflichtfeld' }),
});

const INITIAL_STATE: FormItem = {
  id: '',
  firstName: '',
  lastName: '',
  role: '',
  img: '',
  startedAt: '',
  endedAt: '',
  isPublic: false,
  orderId: 0,
  slug: '',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const DASHBOARD_OVERVIEW_URL = DASHBOARD_EXPERTS_URL;

const API_URL = '/api/admin/experts';
const fetchItem = (id: string) => axios<FormItem>(`${API_URL}/${id}`);
const fetchImages = () => axios<string[]>(`/api/admin/images/teams`);

export const getServerSideProps: GetServerSideProps<{ itemId: string }> = async ({ params }) => {
  return { props: { itemId: params?.id as string } };
};

export default function Page({ itemId }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const router = useRouter();

  const [images, setImages] = useState<string[]>([]);
  const [item, setItem] = useState<FormItem | null>();
  const [isLoading, setLoading] = useState(true);

  const isNew = itemId === ADD_ITEM_URL_PREFIX;

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
        console.warn('Error adding new expert:', error);
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
        console.warn(`Error updating expert with ID ${item?.id}:`, error);
        showErrorToast('Es ist ein Fehler beim Abspeichern der Änderungen aufgetreten.');
      }
    }
  };

  useEffect(() => {
    setLoading(true);

    Promise.all([
      fetchImages()
        .then(({ data }) => setImages(data))
        .catch(error => console.warn('Error loading project background images:', error)),

      !isNew &&
        itemId &&
        fetchItem(itemId)
          .then(({ data }) => setItem(data))
          .catch(error => console.warn('Error loading item:', error)),
    ]).finally(() => setLoading(false));
  }, [isNew, itemId]);

  return (
    <DasboardLayout>
      <h1 className="text-center">{isNew ? 'Neuen Experten anlegen' : 'Experten bearbeiten'}</h1>

      <Loading isLoading={isLoading}>
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
              const ctrlClassName = ctrlFieldClassName<FormItem>(errors, touched);

              return (
                <Form className="needs-validation">
                  <div className="container">
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
                        {/* TODO: Allow external urls */}
                        {/* <Field
                          type="text"
                          id="img"
                          name="img"
                          className={ctrlClassName('img')}
                          placeholder="Dateipfad zum Porträt"
                        /> */}
                        <Field
                          as="select"
                          id="img"
                          name="img"
                          className={ctrlClassName('img')}
                          placeholder="Dateipfad zum Porträt"
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
      </Loading>
    </DasboardLayout>
  );
}
