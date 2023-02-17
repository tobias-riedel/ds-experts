import axios from "axios";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const alertContent = () => {
  MySwal.fire({
    title: "Glückwunsch!",
    text: "Deine Nachricht wurde erfolgreicht versandt. Wir melden uns bald bei Dir.",
    icon: "success",
    timer: 4000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
interface FormItem {
  firstname: string;
  name: string;
  email: string;
  firstname6g234: string;
  name90ad0f: string;
  emailfd80e: string;
  subject: string;
  text: string;
}

const INITIAL_STATE: FormItem = {
  firstname: "",
  name: "",
  email: "",
  firstname6g234: "",
  name90ad0f: "",
  emailfd80e: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [agreedToGdpr, setAgreedToGdpr] = useState(false);
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (payload: FormItem) => {
    const url = "/api/contact";
    try {
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact-form">
        <Formik
          initialValues={{ ...INITIAL_STATE }}
          validate={(values: FormItem): Partial<FormItem> => {
            const errors: Partial<FormItem> = {};
            if (!values.firstname6g234.trim()) {
              errors.firstname6g234 = "Pflichtfeld";
            }
            if (!values.name90ad0f.trim()) {
              errors.name90ad0f = "Pflichtfeld";
            }
            if (!values.emailfd80e.trim()) {
              errors.emailfd80e = "Pflichtfeld";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                values.emailfd80e
              )
            ) {
              errors.emailfd80e = "Ungültige E-Mail-Adresse";
            }
            if (!values.subject.trim()) {
              errors.subject = "Pflichtfeld";
            }
            if (!values.text.trim()) {
              errors.text = "Pflichtfeld";
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
          {({ errors, touched, isSubmitting, dirty, isValid }) => (
            <Form className="needs-validation">
              <div className="container">
                <div className="row honey">
                  <div className="form-group">
                    <Field
                      type="text"
                      name="firstname"
                      placeholder="Vorname*"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Nachname*"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="text"
                      name="email"
                      placeholder="E-Mail*"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <Field
                        type="text"
                        name="firstname6g234"
                        className={`form-control ${
                          errors.firstname6g234
                            ? "is-invalid"
                            : touched.firstname6g234
                            ? "is-valid"
                            : ""
                        }`}
                        placeholder="Vorname*"
                      />
                      {errors.firstname6g234 && (
                        <div className="form-feedback">
                          {errors.firstname6g234}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <Field
                        type="text"
                        name="name90ad0f"
                        className={`form-control ${
                          errors.name90ad0f
                            ? "is-invalid"
                            : touched.name90ad0f
                            ? "is-valid"
                            : ""
                        }`}
                        placeholder="Nachname*"
                      />
                      {errors.name90ad0f && (
                        <div className="form-feedback">{errors.name90ad0f}</div>
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <Field
                      type="email"
                      name="emailfd80e"
                      className={`form-control ${
                        errors.emailfd80e
                          ? "is-invalid"
                          : touched.emailfd80e
                          ? "is-valid"
                          : ""
                      }`}
                      placeholder="E-Mail*"
                    />
                    {errors.emailfd80e && (
                      <div className="form-feedback">{errors.emailfd80e}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <Field
                      type="text"
                      name="subject"
                      placeholder="Betreff*"
                      className={`form-control ${
                        errors.subject
                          ? "is-invalid"
                          : touched.subject
                          ? "is-valid"
                          : ""
                      }`}
                      required
                    />
                    {errors.subject && (
                      <div className="form-feedback">{errors.subject}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <Field
                      as="textarea"
                      name="text"
                      cols={30}
                      rows={6}
                      placeholder="Schreib Deine Anfrage...*"
                      className={`form-control ${
                        errors.text
                          ? "is-invalid"
                          : touched.text
                          ? "is-valid"
                          : ""
                      }`}
                      required
                    />
                    {errors.text && (
                      <div className="form-feedback">{errors.text}</div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="form-check text-start">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="contactAgreement"
                      onClick={() => setAgreedToGdpr(!agreedToGdpr)}
                    />
                    <label htmlFor="contactAgreement">
                      Ich habe die{" "}
                      <Link href="/legal#gdpr" target="_blank" rel="noopener">
                        Datenschutzerklärung
                      </Link>{" "}
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
                  Absenden
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ContactForm;
