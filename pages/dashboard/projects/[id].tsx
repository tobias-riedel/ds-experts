import { Reference } from '@components/References';
import { ADD_ITEM_URL_PREFIX } from '@consts/dashboard';
import { DASHBOARD_PROJECTS_URL } from '@consts/routes';
import DasboardLayout from '@layouts/DashboardLayout';
import { Project as FormItem } from '@prisma/client';
import axios from 'axios';
import { Field, Form, Formik, FormikErrors, FormikTouched } from 'formik';
import { GetServerSideProps } from 'next';
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
  projectName: '',
  partnerName: '',
  city: '',
  img: '',
  orderId: 0,
  description: '',
  isPublic: false,
  startedAt: '',
  endedAt: '',
  locationLat: 0,
  locationLong: 0,
  slug: '',
};

type FormItemKeys = keyof FormItem;

const DASHBOARD_OVERVIEW_URL = DASHBOARD_PROJECTS_URL;

const API_URL = '/api/admin/projects';
const fetchItem = (id: string) => axios<FormItem>(`${API_URL}/${id}`);

type ServerSideProps = { item?: FormItem; isNew: boolean };

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async ({
  params: { id },
}): Promise<{ props: ServerSideProps }> => {
  const emptyProps = { props: { item: null, isNew: true } };

  if (id === ADD_ITEM_URL_PREFIX) {
    return emptyProps;
  }

  try {
    const { data: item } = await fetchItem(id as string);
    return { props: { item, isNew: false } };
  } catch (error) {
    console.log('Error::', error);

    return { props: { item: null, isNew: false } };
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
  return <>{errors[field] && touched[field] && <div className="form-feedback">{errors[field]}</div>}</>;
}

export default function Page({ item, isNew }: ServerSideProps): JSX.Element {
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
        const response = await axios.put(`${API_URL}/${item.id}`, payload);
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
        <Formik
          initialValues={{ ...INITIAL_STATE, ...item }}
          validate={(values: FormItem): FormikErrors<FormItem> => {
            const errors: FormikErrors<FormItem> = {};
            if (!values.partnerName.trim()) {
              errors.partnerName = 'Pflichtfeld';
            }
            if (!values.city.trim()) {
              errors.city = 'Pflichtfeld';
            }
            if (!values.img.trim()) {
              errors.img = 'Pflichtfeld';
            }
            if (!values.projectName.trim()) {
              errors.projectName = 'Pflichtfeld';
            }
            if (!values.description.trim()) {
              errors.description = 'Pflichtfeld';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              handleSubmit(values);
              setSubmitting(false);

              resetForm();
            }, 400);
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
                      <FormFieldError field="projectName" errors={errors} touched={touched} />
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
                      <FormFieldError field="partnerName" errors={errors} touched={touched} />
                    </div>

                    <div className="form-group col-lg-6">
                      <label htmlFor="city">Stadt*</label>
                      <Field type="text" id="city" name="city" className={ctrlClassName('city')} placeholder="Stadt*" />
                      <FormFieldError field="city" errors={errors} touched={touched} />
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
                      <FormFieldError field="locationLat" errors={errors} touched={touched} />
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
                      <FormFieldError field="locationLong" errors={errors} touched={touched} />
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
                      <FormFieldError field="startedAt" errors={errors} touched={touched} />
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

                    <div className="form-group col-lg-6">
                      <label htmlFor="img">Bilderpfad*</label>
                      <Field
                        type="text"
                        id="img"
                        name="img"
                        className={ctrlClassName('img')}
                        placeholder="Pfad zum Hintergrundbild in der Übersichtsanzeige*"
                      />
                      <FormFieldError field="img" errors={errors} touched={touched} />
                    </div>

                    <div className="form-group">
                      <label htmlFor="description">Projektbeschreibung*</label>
                      <Field
                        as="textarea"
                        id="description"
                        name="description"
                        cols={30}
                        rows={6}
                        placeholder="Beschreibung von Tätigkeiten, verwendeten Technologien und Systemen im Projekt*"
                        className={ctrlClassName('description')}
                      />
                      <FormFieldError field="description" errors={errors} touched={touched} />
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
