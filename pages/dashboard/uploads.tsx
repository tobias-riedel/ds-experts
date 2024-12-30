import { MySwal } from '@consts/misc';
import { env } from '@env/client.mjs';
import DashboardLayout from '@layouts/DashboardLayout';
import { Flex, Progress, Spinner } from '@radix-ui/themes';
import { imgUploadSchema as formSchema } from '@schema/imgUpload.schema';
import { ctrlFieldClassName } from '@utils/form';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

const showSuccessToast = () => {
  MySwal.fire({
    title: 'Erfolg!',
    text: 'Der Upload war erfolgreich.',
    icon: 'success',
    timer: 4000,
    timerProgressBar: true,
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

type FormItem = z.infer<typeof formSchema>;

const INITIAL_STATE: FormItem = {
  fileName: '',
  destination: 'teams',
};

const Uploads = () => {
  const [fileMeta, setFileMeta] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>(null);

  const [fileCtrlClassName, setFileCtrlClassName] = useState('');
  const [fileSizeError, setFileSizeError] = useState('');
  const [progress, setProgress] = useState(0);

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: unknown, shouldValidate?: boolean) => void,
    maxFileSizeInMb = 8
  ) => {
    const file = event.currentTarget?.files?.[0];
    if (!file) {
      setFileCtrlClassName('');
      setFileSizeError('');
      setFileMeta('');
      setPreviewUrl(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);

    const filePath = event.currentTarget.value;
    setFileMeta(filePath);

    const fileName = file.name.substring(0, file.name.lastIndexOf('.'));
    setFieldValue('fileName', fileName);

    const maxFileSizeInBytes = +maxFileSizeInMb * 1024 * 1024;
    if (file.size > maxFileSizeInBytes) {
      setFileCtrlClassName('is-invalid');
      setFileSizeError(`Ausgewählte Datei ist zu groß (max. ${maxFileSizeInMb} MB)`);
      return;
    }

    setFileCtrlClassName('is-valid');
    setFileSizeError('');
    setFieldValue('file', event.currentTarget.files?.[0]);
  };

  const handleSubmit = async (payload: FormItem) => {
    const url = '/api/upload';
    try {
      await axios.post(url, payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (data) => setProgress(Math.round((100 * data.loaded) / (data.total ?? 1))),
      });
      showSuccessToast();

      return true;
    } catch (error) {
      console.log(error);
      showErrorToast('Fehler beim Hochladen der Datei.');

      return false;
    }
  };

  return (
    <>
      <DashboardLayout>
        <h1 className="text-center">Datei-Upload</h1>

        <div className="contact-form">
          <Formik<FormItem>
            initialValues={{ ...INITIAL_STATE }}
            validationSchema={toFormikValidationSchema(formSchema)}
            onSubmit={async (values, { setSubmitting, resetForm, setFieldValue }) => {
              const isSubmitted = await handleSubmit(values);
              setSubmitting(false);

              if (!isSubmitted) {
                return;
              }
              resetForm();
              setFieldValue('file', null);
              setFileMeta('');
              setPreviewUrl(null);
            }}
          >
            {({ errors, touched, isSubmitting, dirty, isValid, setFieldValue }) => {
              const ctrlClassName = ctrlFieldClassName<FormItem>(errors, touched);

              const isSubmitBtnDisabled = isSubmitting || !dirty || !isValid || !!fileSizeError;

              return (
                <Form className="needs-validation">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-9">
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="file">
                                Datei hochladen{' '}
                                <small>| PNG, JPG, WebP | max. {env.NEXT_PUBLIC_JOIN_US_MAX_FILE_SIZE} MB</small>
                              </label>
                              <input
                                type="file"
                                id="file"
                                name="file"
                                accept="image/*"
                                value={fileMeta as unknown as string}
                                className={`form-control ${fileCtrlClassName}`}
                                onChange={(evt) =>
                                  handleFileChange(evt, setFieldValue, env.NEXT_PUBLIC_JOIN_US_MAX_FILE_SIZE)
                                }
                              />
                              {fileSizeError && <div className="form-feedback">{fileSizeError}</div>}
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label htmlFor="fileName">Neuer Dateiname*</label>
                              <Field
                                type="text"
                                id="fileName"
                                name="fileName"
                                className={ctrlClassName('fileName')}
                                placeholder="Neuer Dateiname*"
                              />
                              <ErrorMessage name="fileName" component="div" className="form-feedback" />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="form-group">
                              <label htmlFor="destination">Art der Datei*</label>
                              <Field
                                as="select"
                                name="destination"
                                className={ctrlClassName('destination')}
                                placeholder="Art der Datei*"
                              >
                                <option value="teams">Mitarbeiterporträt</option>
                                <option value="references">Projekthintergrundbild</option>
                              </Field>
                              <ErrorMessage name="destination" component="div" className="form-feedback" />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className={`text-center ${isSubmitting ? 'col-6' : 'col-12'}`}>
                            <button type="submit" disabled={isSubmitBtnDisabled} className="btn btn-primary ">
                              <Flex align="center" gap="2">
                                <div>Senden</div>{' '}
                                {isSubmitting && <Spinner size="3" role="status" aria-hidden="true" />}
                              </Flex>
                            </button>
                          </div>
                          {isSubmitting && (
                            <div className="col-6">
                              <Progress size="3" radius="none" color="green" value={100} />
                              <small>Formular wird verarbeitet...</small>
                              {0 < progress && (
                                <>
                                  <Progress size="3" radius="none" color="blue" value={progress} />
                                  <small>Datei-Upload: {progress}%</small>
                                </>
                              )}
                              {progress === 100 && (
                                <>
                                  <Progress size="3" radius="none" color="sky" value={100} />
                                  <small>Upload wird verifiziert...</small>
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-3">
                        <h3 className="text-center">Vorschau</h3>

                        <div className="col-lg-12 offset-lg-0 col-md-6 offset-md-3">
                          {!previewUrl ? (
                            <>
                              <h4 className="text-center">Kein Bild ausgewählt.</h4>
                            </>
                          ) : (
                            <Image
                              src={previewUrl as string}
                              alt={fileMeta || 'Bild'}
                              title={fileMeta || 'Bild'}
                              className="optimized-image"
                              width={263}
                              height={261}
                            />
                          )}
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
    </>
  );
};

export default Uploads;
