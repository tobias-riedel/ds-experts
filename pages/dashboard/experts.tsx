import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { signIn, signOut, useSession } from 'next-auth/react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import DasboardLayout from '../../components/Layouts/DashboardLayout';

const MySwal = withReactContent(Swal);
const alertContent = () => {
  MySwal.fire({
    position: 'top-end',
    title: 'Neuer Eintrag angelegt.',
    icon: 'success',
    timer: 1500,
    showConfirmButton: false,
  });
};

// Form initial state
interface FormItem {
  projectName: string;
  partnerName: string;
  city: string;
  img: string;
  orderId?: string;
  description: string;
}

const INITIAL_STATE: FormItem = {
  projectName: '',
  partnerName: '',
  city: '',
  img: '',
  orderId: '',
  description: '',
};

export default function Page() {
  const { data: session, status } = useSession();

  const handleSubmit = async (payload: FormItem) => {
    const url = '/api/admin/projects';
    try {
      const response = await axios.post(url, payload);
      console.log(response);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DasboardLayout>
      <h1 className="text-center">Neuen Experten anlegen</h1>

      <div className="contact-form">
        <Formik
          initialValues={{ ...INITIAL_STATE }}
          validate={(values: FormItem): Partial<FormItem> => {
            const errors: Partial<FormItem> = {};
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
            const ctrlClassName = (fieldName: keyof FormItem): string =>
              `form-control ${errors?.[fieldName] ? 'is-invalid' : touched?.[fieldName] ? 'is-valid' : ''}`;

            return (
              <Form className="needs-validation">
                <div className="container">
                  <div className="row">
                    <div className="form-group col-lg-6">
                      <Field
                        type="text"
                        name="projectName"
                        placeholder="Projektname*"
                        className={ctrlClassName('projectName')}
                        required
                      />
                      {errors.projectName && <div className="form-feedback">{errors.projectName}</div>}
                    </div>

                    <div className="form-group col-lg-6">
                      <Field
                        type="text"
                        name="partnerName"
                        className={ctrlClassName('partnerName')}
                        placeholder="Partnername*"
                      />
                      {errors.partnerName && <div className="form-feedback">{errors.partnerName}</div>}
                    </div>

                    <div className="form-group">
                      <Field type="text" name="city" className={ctrlClassName('city')} placeholder="Stadtname*" />
                      {errors.city && <div className="form-feedback">{errors.city}</div>}
                    </div>

                    <div className="form-group col-lg-3">
                      <Field
                        type="number"
                        name="orderId"
                        className={ctrlClassName('orderId')}
                        placeholder="Ordnungsnummer"
                      />
                      {errors.img && <div className="form-feedback">{errors.orderId}</div>}
                    </div>

                    <div className="form-group col-lg-9">
                      <Field type="text" name="img" className={ctrlClassName('img')} placeholder="Bilderpfad*" />
                      {errors.img && <div className="form-feedback">{errors.img}</div>}
                    </div>

                    <div className="form-group">
                      <Field
                        as="textarea"
                        name="description"
                        cols={30}
                        rows={6}
                        placeholder="Projektbeschreibung*"
                        className={ctrlClassName('description')}
                        required
                      />
                      {errors.description && <div className="form-feedback">{errors.description}</div>}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" disabled={isSubmitting || !dirty || !isValid} className="btn btn-primary ">
                    Senden
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </DasboardLayout>
  );
}