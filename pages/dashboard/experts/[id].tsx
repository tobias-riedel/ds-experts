import ExpertCard from '@components/Team/ExpertCard';
import { ADD_ITEM_URL_PREFIX } from '@consts/dashboard';
import { MySwal } from '@consts/misc';
import { DASHBOARD_EXPERTS_URL } from '@consts/routes';
import { prisma } from '@db/client';
import DashboardLayout from '@layouts/DashboardLayout';
import { $Enums, Expert as FormItem } from '@prisma/client';
import { expertSchema as formSchema } from '@schema/expert.schema';
import { ctrlFieldClassName } from '@utils/form';
import { AllowedImageDirs, getImages } from '@utils/images';
import { trpc } from '@utils/trpc';
import { ErrorMessage, Field, Form, Formik, useFormikContext } from 'formik';
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

const INITIAL_STATE: FormItem = {
  id: '',
  firstName: '',
  lastName: '',
  role: '',
  img: '',
  startedAt: '',
  endedAt: '',
  isPublic: false,
  visibility: $Enums.Visibility.ADMIN,
  orderId: 0,
  slug: '',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const DASHBOARD_OVERVIEW_URL = DASHBOARD_EXPERTS_URL;

const hydrateItem = (item: string | null | undefined): FormItem | null => {
  const loadedItem: (FormItem & { createdAt: Date | string | null; updatedAt: Date | string | null }) | null =
    JSON.parse(item || 'null');

  if (loadedItem != null) {
    loadedItem.createdAt = new Date(loadedItem.createdAt as string);
    loadedItem.updatedAt = new Date(loadedItem.updatedAt as string);
  }

  return loadedItem as FormItem | null;
};

export const getServerSideProps: GetServerSideProps<{
  itemId: string;
  item?: string;
  images: string[];
}> = async ({ params }) => {
  const itemId = params?.id as string;
  const isNew = itemId === ADD_ITEM_URL_PREFIX;

  const item = isNew ? null : await prisma.expert.findUnique({ where: { id: itemId } });
  const images = getImages(AllowedImageDirs.TEAM);

  return { props: { itemId, item: JSON.stringify(item), images } };
};

export default function Page({
  itemId,
  item,
  images,
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
