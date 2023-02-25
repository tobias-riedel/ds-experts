import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import { ProgressBar, Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
const alertContent = () => {
  MySwal.fire({
    title: 'Glückwunsch!',
    text: 'Deine Nachricht wurde erfolgreicht versandt. Wir melden uns bald bei Dir.',
    icon: 'success',
    timer: 4000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

interface FormItem {
  firstName: string;
  name: string;
  email: string;
  firstName6g234: string;
  name90ad0f: string;
  emailfd80e: string;
  subject: string;
  text: string;
}

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
    maxFileSizeInMb = '8'
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
    setFieldValue('file', event.currentTarget.files[0]);
  };

  const handleSubmit = async (payload: FormItem) => {
    const url = '/api/join-us';
    try {
      await axios.post(url, payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (data) => setProgress(Math.round((100 * data.loaded) / data.total)),
      });
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="join-us-form">
        <Formik
          initialValues={{ ...INITIAL_STATE }}
          validate={(values: FormItem): Partial<FormItem> => {
            // TODO: Replace validation with YUP schema
            const errors: Partial<FormItem> = {};
            if (!values.firstName6g234.trim()) {
              errors.firstName6g234 = 'Pflichtfeld';
            }
            if (!values.name90ad0f.trim()) {
              errors.name90ad0f = 'Pflichtfeld';
            }
            if (!values.emailfd80e.trim()) {
              errors.emailfd80e = 'Pflichtfeld';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailfd80e)) {
              errors.emailfd80e = 'Ungültige E-Mail-Adresse';
            }
            if (!values.subject.trim()) {
              errors.subject = 'Pflichtfeld';
            }
            if (!values.text.trim()) {
              errors.text = 'Pflichtfeld';
            }
            return errors;
          }}
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
            const ctrlClassName = (fieldName: keyof FormItem): string =>
              `form-control ${errors?.[fieldName] ? 'is-invalid' : touched?.[fieldName] ? 'is-valid' : ''}`;

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
                        {errors.firstName6g234 && <div className="form-feedback">{errors.firstName6g234}</div>}
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
                        {errors.name90ad0f && <div className="form-feedback">{errors.name90ad0f}</div>}
                      </div>
                    </div>
                    <div className="form-group">
                      <Field
                        type="email"
                        name="emailfd80e"
                        className={ctrlClassName('emailfd80e')}
                        placeholder="E-Mail*"
                      />
                      {errors.emailfd80e && <div className="form-feedback">{errors.emailfd80e}</div>}
                    </div>

                    <div className="form-group">
                      <Field
                        type="text"
                        name="subject"
                        placeholder="Betreff*"
                        className={ctrlClassName('subject')}
                        required
                      />
                      {errors.subject && <div className="form-feedback">{errors.subject}</div>}
                    </div>

                    <div className="form-group">
                      <Field
                        as="textarea"
                        name="text"
                        cols={30}
                        rows={6}
                        placeholder="Schreib Deine Anfrage...*"
                        className={ctrlClassName('text')}
                        required
                      />
                      {errors.text && <div className="form-feedback">{errors.text}</div>}
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label htmlFor="file">
                        Bewerbungsunterlagen hochladen{' '}
                        <small>(Optional) | PDF | max. {process.env.NEXT_PUBLIC_JOIN_US_MAX_FILE_SIZE} MB</small>
                      </label>
                      <input
                        type="file"
                        id="file"
                        name="file"
                        accept="application/pdf"
                        value={fileMeta as unknown as string}
                        className={`form-control ${fileCtrlClassName}`}
                        onChange={(evt) =>
                          handleFileChange(evt, setFieldValue, process.env.NEXT_PUBLIC_JOIN_US_MAX_FILE_SIZE)
                        }
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
