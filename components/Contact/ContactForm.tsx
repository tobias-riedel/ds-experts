import { MySwal } from '@consts/misc';
import { contactSchema as formSchema } from '@schema/contact.schema';
import { ctrlFieldClassName } from '@utils/form';
import { trpc } from '@utils/trpc';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useState } from 'react';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

const showSuccessToast = () => {
  MySwal.fire({
    title: 'Glückwunsch!',
    html: 'Deine Nachricht wurde erfolgreicht versandt.<br />Wir melden uns bald bei Dir.',
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
  firstName: '',
  name: '',
  email: '',
  firstName6g234: '',
  name90ad0f: '',
  emailfd80e: '',
  subject: '',
  text: '',
};

const ContactForm = () => {
  const [agreedToGdpr, setAgreedToGdpr] = useState(false);

  const sendMail = trpc.contact.sendMail.useMutation({
    onSuccess: () => {
      console.log('Contact eMail sent usccessfully.');
      showSuccessToast();
    },
    onError: (error) => {
      console.error('Error sending mail:', error);
      showErrorToast('Beim Versenden der E-Mail ist ein Fehler aufgetreten.');
    },
  });

  const handleSubmit = async (payload: FormItem) => {
    sendMail.mutate(payload);
  };

  return (
    <>
      <div className="contact-form">
        <Formik<FormItem>
          initialValues={{ ...INITIAL_STATE }}
          validationSchema={toFormikValidationSchema(formSchema)}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleSubmit(values);
            setSubmitting(false);

            resetForm();
            setAgreedToGdpr(false);
          }}
        >
          {({ errors, touched, isSubmitting, dirty, isValid }) => {
            const ctrlClassName = ctrlFieldClassName<FormItem>(errors, touched);

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
                  <div>
                    <div className="form-check text-start">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="contactAgreement"
                        checked={agreedToGdpr}
                        onChange={() => setAgreedToGdpr(!agreedToGdpr)}
                      />
                      <label htmlFor="contactAgreement">
                        Ich habe die{' '}
                        <Link href="/legal#gdpr" target="_blank" rel="noopener" className="link--underlined">
                          Datenschutzerklärung
                        </Link>{' '}
                        gelesen und akzeptiere diese hiermit.
                      </label>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting || !dirty || !isValid || !agreedToGdpr}
                    className="btn btn-primary "
                  >
                    Senden
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default ContactForm;
