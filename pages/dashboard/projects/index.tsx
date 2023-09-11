import { Reference } from '@components/References';
import DasboardLayout from '@layouts/DashboardLayout';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

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

interface FormItem {
  projectName: string;
  partnerName: string;
  city: string;
  img: string;
  orderId?: string;
  description: string;
  isPublic?: boolean;
  startedAt?: string;
  endedAt?: string;
  locationLat?: number | string;
  locationLong?: number | string;
  slug?: string;
}

const INITIAL_STATE: FormItem = {
  projectName: '',
  partnerName: '',
  city: '',
  img: '',
  orderId: '',
  description: '',
  isPublic: false,
  startedAt: '',
  endedAt: '',
  locationLat: '',
  locationLong: '',
  slug: '',
};

const fetchProjects = () => axios<Reference[]>('/api/admin/projects');

export const getServerSideProps: GetServerSideProps<{
  projects: Reference[];
}> = async () => {
  try {
    const { data: projects } = await fetchProjects();
    return { props: { projects } };
  } catch (error) {
    console.log('Error::', error);

    return { props: { projects: [] } };
  }
};

export default function Page({ projects }: { projects: Reference[] }) {
  const router = useRouter();

  const [projectList, setProjectList] = useState(projects as Reference[]);

  const updateProjects = async () => {
    const { data: updatedProjects } = await fetchProjects();
    setProjectList(updatedProjects);
  };

  const handleSubmit = async (payload: FormItem) => {
    const url = '/api/admin/projects';
    try {
      const response = await axios.post(url, payload);
      console.log(response);
      alertContent();
    } catch (error) {
      console.log(error);
    }

    await updateProjects();
  };

  const editItem = (projectId: string) => {
    console.log('edit:', projectId);
    router.push(`${router.pathname}/${projectId}`);
  };

  const deleteItem = async (projectId: string) => {
    try {
      await axios.delete('/api/admin/projects', { data: { id: projectId } });
    } catch (error) {
      console.log('Error::', error);
    }

    await updateProjects();
  };

  const confirmDeleteItem = async (projectId: string, projectName: string) => {
    const result = await MySwal.fire({
      title: 'Eintrag löschen?',
      text: `Soll das Project "${projectName}" wirklich gelöscht werden?`,
      icon: 'warning',
      confirmButtonColor: 'red',
      showCancelButton: true,
      showCloseButton: true,
      focusCancel: true,
    });

    if (result.isDismissed) {
      return;
    }

    await deleteItem(projectId);
  };

  return (
    <DasboardLayout>
      <h1 className="text-center">Projekt-Übersicht</h1>

      {projectList?.length ? (
        <div className="projects-list m-4">
          <table>
            <thead>
              <tr>
                <th> Projektname</th>
                <th> Partnername</th>
                <th> Stadt </th>
                <th> Start </th>
                <th> Ende </th>
                <th> Öffentlich </th>
                <th> Reihenfolge </th>
                <th>
                  <i className="fas fa-edit"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {projectList?.map((project) => (
                <tr key={project.id}>
                  <td>{project.projectName}</td>
                  <td>{project.partnerName}</td>
                  <td>{project.city}</td>
                  <td className="text-center">{project.startedAt ?? 'n/a'}</td>
                  <td className="text-center">{project.endedAt ?? 'n/a'}</td>
                  <td className="text-center">
                    <i
                      className={`fas ${project.isPublic ? 'fa-check' : 'fa-close'}`}
                      style={{ color: project.isPublic ? 'green' : 'red' }}
                    ></i>
                  </td>
                  <td className="text-right">{project.orderId || 0}</td>
                  <td className="text-center actions">
                    <button onClick={() => editItem(project.id)} className="btn btn-link">
                      <i className="fas fa-edit" title="Bearbeiten"></i>
                    </button>
                    <button onClick={() => confirmDeleteItem(project.id, project.projectName)} className="btn btn-link">
                      <i className="fas fa-trash" title="Löschen"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-center pb-100">Keine Einträge vorhanden!</h2>
      )}

      <h1 className="text-center">Neues Projekt anlegen</h1>
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

                    <div className="form-group col-lg-6">
                      <Field type="text" name="city" className={ctrlClassName('city')} placeholder="Stadtname*" />
                      {errors.city && <div className="form-feedback">{errors.city}</div>}
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                      <Field
                        type="number"
                        name="locationLat"
                        className={ctrlClassName('locationLat')}
                        placeholder="Breitengrad"
                      />
                      {errors.locationLat && <div className="form-feedback">{errors.locationLat}</div>}
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                      <Field
                        type="number"
                        name="locationLong"
                        className={ctrlClassName('locationLong')}
                        placeholder="Längengrad"
                      />
                      {errors.locationLong && <div className="form-feedback">{errors.locationLong}</div>}
                    </div>

                    <div className="form-group col-md-6">
                      <Field type="date" name="startedAt" className={ctrlClassName('startedAt')} placeholder="Start" />
                      {errors.startedAt && <div className="form-feedback">{errors.startedAt}</div>}
                    </div>

                    <div className="form-group col-md-6">
                      <Field type="date" name="endedAt" className={ctrlClassName('endedAt')} placeholder="Ende" />
                      {errors.endedAt && <div className="form-feedback">{errors.endedAt}</div>}
                    </div>

                    <div className="form-group col-lg-3 col-md-6">
                      <label>
                        <Field type="checkbox" name="isPublic" /> Öffentlich
                      </label>
                    </div>

                    <div className="form-group col-lg-3 col-md-6">
                      <Field
                        type="number"
                        name="orderId"
                        className={ctrlClassName('orderId')}
                        placeholder="Reihenfolge"
                      />
                    </div>

                    <div className="form-group col-lg-6">
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
