import { ADD_ITEM_URL_PREFIX } from '@consts/dashboard';
import { DASHBOARD_EXPERTS_URL } from '@consts/routes';
import DasboardLayout from '@layouts/DashboardLayout';
import { Expert as FormItem } from '@prisma/client';
import axios from 'axios';
import { Field, Form, Formik, FormikErrors, FormikTouched } from 'formik';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

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

const INITIAL_STATE: Partial<FormItem> = {
  firstName: '',
  lastName: '',
  role: '',
  img: '',
  startedAt: '',
  endedAt: '',
  isPublic: false,
  orderId: 0,
  slug: '',
};

type FormItemKeys = keyof FormItem;

const DASHBOARD_OVERVIEW_URL = DASHBOARD_EXPERTS_URL;

const API_URL = '/api/admin/experts';
const fetchItem = (id: string) => axios<FormItem>(`${API_URL}/${id}`);
const fetchImages = () => axios<string[]>(`/api/admin/images/teams`);

export const getServerSideProps: GetServerSideProps<{ item?: FormItem; images: string[]; isNew: boolean }> = async ({
  params: { id },
}) => {
  let images: string[] = [];
  try {
    images = (await fetchImages()).data;
  } catch (error) {
    console.log('Error loading project background images::', error);
  }

  if (id === ADD_ITEM_URL_PREFIX) {
    return { props: { item: null, images, isNew: true } };
  }

  try {
    const { data: item } = await fetchItem(id as string);
    return { props: { item, images, isNew: false } };
  } catch {
    return { props: { item: null, images, isNew: false } };
  }
};

function FormFieldError({
  field,
  errors,
  touched,
}: {
  field: FormItemKeys;
  errors: FormikErrors<FormItem>;
  touched: FormikTouched<FormItem>;
}): JSX.Element {
  if (typeof field === 'string') {
    return <>{errors[field] && touched[field] && <div className="form-feedback">{errors[field] as string}</div>}</>;
  }

  return <></>;
}

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
        console.log('Error adding new expert:', error);
        showErrorToast('Es ist ein Fehler beim Hinzuf+gen des Eintrags aufgetreten.');
      }
    }

    async function updateItem() {
      try {
        const response = await axios.put(`${API_URL}/${item.id}`, payload);
        console.log(response);
        showUpdatedItemToast();

        router.push(DASHBOARD_OVERVIEW_URL);
      } catch (error) {
        console.log(`Error updating expert with ID ${item?.id}:`, error);
        showErrorToast('Es ist ein Fehler beim Abspeichern der Änderungen aufgetreten.');
      }
    }
  };

  return (
    <DasboardLayout>
      <h1 className="text-center">{isNew ? 'Neuen Experten anlegen' : 'Experten bearbeiten'}</h1>

      <div className="contact-form">
        <Formik
          initialValues={{ ...INITIAL_STATE, ...item }}
          validate={(values: FormItem): FormikErrors<FormItem> => {
            const errors: FormikErrors<FormItem> = {};
            if (!values.firstName.trim()) {
              errors.firstName = 'Pflichtfeld';
            }
            if (!values.lastName.trim()) {
              errors.lastName = 'Pflichtfeld';
            }
            if (!values.role.trim()) {
              errors.role = 'Pflichtfeld';
            }
            if (!values.startedAt.trim()) {
              errors.startedAt = 'Pflichtfeld';
            }

            return errors;
          }}
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
                      <label htmlFor="firstName">Vorname*</label>
                      <Field
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Vorname*"
                        className={ctrlClassName('firstName')}
                        autoFocus={true}
                      />
                      <FormFieldError field="firstName" errors={errors} touched={touched} />
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
                      <FormFieldError field="lastName" errors={errors} touched={touched} />
                    </div>

                    <div className="form-group col-lg-6">
                      <label htmlFor="role">Rolle*</label>
                      <Field type="text" id="role" name="role" className={ctrlClassName('role')} placeholder="Rolle*" />
                      <FormFieldError field="role" errors={errors} touched={touched} />
                    </div>

                    <div className="form-group col-lg-6">
                      <label htmlFor="img">Bilderpfad</label>
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
                      <FormFieldError field="img" errors={errors} touched={touched} />
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
                      <FormFieldError field="startedAt" errors={errors} touched={touched} />
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
                      <FormFieldError field="endedAt" errors={errors} touched={touched} />
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
                      <FormFieldError field="orderId" errors={errors} touched={touched} />
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
