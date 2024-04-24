import { MySwal } from '@consts/misc';
import { env } from '@env/client.mjs';
import { joinUsSchema as formSchema } from '@schema/joinUs.schema';
import { ctrlFieldClassName } from '@utils/form';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import { ProgressBar, Spinner } from 'react-bootstrap';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

const alertContent = () => {
  MySwal.fire({
    title: 'Glückwunsch!',
    html: 'Deine Nachricht wurde erfolgreicht versandt.<br />Wir melden uns bald bei Dir.',
    icon: 'success',
    timer: 4000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const alertError = () => {
  MySwal.fire({
    title: 'Fehler!',
    icon: 'error',
    html:
      'Leider is ein Fehler aufgetreten und Deine Nachricht wurde nicht versandt.<br /><br />' +
      'Sollte der Fehler erneut auftreten, sende Deine E- Mail bitte an ' +
      '<a href="mailto:bewerbung@ds-experts.de?subject=Bewerbung">bewerbung@ds-experts.de</a>.',
  });
};

type FormItem = z.infer<typeof formSchema>;

const INITIAL_STATE: FormItem = {
  firstName: '',
  name: '',
  email: '',
  firstName6g234: '',
  name90ad0f: '',
  emailfd80e: '',
  subject: '',
  text: '',
};

const JoinUsForm = () => {
  const [agreedToGdpr, setAgreedToGdpr] = useState(false);
  const [fileMeta, setFileMeta] = useState('');
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
      return;
    }

    setFileMeta(event.currentTarget.value);

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
    const url = '/api/join-us';
    try {
      await axios.post(url, payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (data) => setProgress(Math.round((100 * data.loaded) / (data.total ?? 1))),
      });
      alertContent();
    } catch (error) {
      console.log(error);

      alertError();
    }
  };

  return (
    <>
      <div className="contact-form">
        <Formik<FormItem>
          initialValues={{ ...INITIAL_STATE }}
          validationSchema={toFormikValidationSchema(formSchema)}
          onSubmit={async (values, { setSubmitting, resetForm, setFieldValue }) => {
            await handleSubmit(values);
            setSubmitting(false);

            resetForm();
            setAgreedToGdpr(false);
            setFieldValue('file', null);
            setFileMeta('');
          }}
        >
          {({ errors, touched, isSubmitting, dirty, isValid, setFieldValue }) => {
            const ctrlClassName = ctrlFieldClassName<FormItem>(errors, touched);

            const isSubmitBtnDisabled = isSubmitting || !dirty || !isValid || !agreedToGdpr || !!fileSizeError;

            return (
              <Form className="needs-validation">
                <div className="container">
                  <div className="row honey">
                    <div className="form-group">
                      <Field type="text" name="firstName" placeholder="Vorname*" className="form-control" />
                    </div>

                    <div className="form-group">
                      <Field type="text" name="name" placeholder="Nachname*" className="form-control" />
                    </div>

                    <div className="form-group">
                      <Field type="text" name="email" placeholder="E-Mail*" className="form-control" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <Field
                          type="text"
                          name="firstName6g234"
                          className={ctrlClassName('firstName6g234')}
                          placeholder="Vorname*"
                        />
                        <ErrorMessage name="firstName6g234" component="div" className="form-feedback" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <Field
                          type="text"
                          name="name90ad0f"
                          className={ctrlClassName('name90ad0f')}
                          placeholder="Nachname*"
                        />
                        <ErrorMessage name="name90ad0f" component="div" className="form-feedback" />
                      </div>
                    </div>
                    <div className="form-group">
                      <Field
                        type="email"
                        name="emailfd80e"
                        className={ctrlClassName('emailfd80e')}
                        placeholder="E-Mail*"
                      />
                      <ErrorMessage name="emailfd80e" component="div" className="form-feedback" />
                    </div>

                    <div className="form-group">
                      <Field type="text" name="subject" placeholder="Betreff*" className={ctrlClassName('subject')} />
                      <ErrorMessage name="subject" component="div" className="form-feedback" />
                    </div>

                    <div className="form-group">
                      <Field
                        as="textarea"
                        name="text"
                        cols={30}
                        rows={6}
                        placeholder="Schreib Deine Anfrage...*"
                        className={ctrlClassName('text')}
                      />
                      <ErrorMessage name="text" component="div" className="form-feedback" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label htmlFor="file">
                        Bewerbungsunterlagen hochladen{' '}
                        <small>(Optional) | PDF | max. {env.NEXT_PUBLIC_JOIN_US_MAX_FILE_SIZE} MB</small>
                      </label>
                      <input
                        type="file"
                        id="file"
                        name="file"
                        accept="application/pdf"
                        value={fileMeta as unknown as string}
                        className={`form-control ${fileCtrlClassName}`}
                        onChange={(evt) => handleFileChange(evt, setFieldValue, env.NEXT_PUBLIC_JOIN_US_MAX_FILE_SIZE)}
                      />
                      {fileSizeError && <div className="form-feedback">{fileSizeError}</div>}
                    </div>
                  </div>
                  <div>
                    <div className="form-check text-start">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="joinUsAgreement"
                        checked={agreedToGdpr}
                        onChange={() => setAgreedToGdpr(!agreedToGdpr)}
                      />
                      <label htmlFor="joinUsAgreement">
                        Ich habe die{' '}
                        <Link href="/legal#gdpr" target="_blank" rel="noopener" className="link--underlined">
                          Datenschutzerklärung
                        </Link>{' '}
                        gelesen und akzeptiere diese hiermit.
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className={`text-center ${isSubmitting ? 'col-6' : 'col-12'}`}>
                    <button type="submit" disabled={isSubmitBtnDisabled} className="btn btn-primary ">
                      Senden{' '}
                      {isSubmitting && (
                        <Spinner
                          as="span"
                          size="sm"
                          role="status"
                          animation="border"
                          variant="light"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </div>
                  {isSubmitting && (
                    <div className="col-6">
                      <ProgressBar striped animated variant="success" now={100} label="Formular wird verarbeitet..." />

                      {0 < progress && <ProgressBar now={progress} animated label={`Datei-Upload: ${progress}%`} />}
                      {progress === 100 && (
                        <ProgressBar striped animated variant="success" now={100} label="Upload wird verifiziert..." />
                      )}
                    </div>
                  )}
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default JoinUsForm;
