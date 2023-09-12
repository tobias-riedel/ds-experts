import { Reference } from '@components/References';
import { ADD_ITEM_URL_PREFIX } from '@consts/dashboard';
import DasboardLayout from '@layouts/DashboardLayout';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

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

  const editItem = (projectId: string) => {
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
                <th className="ds-hidden-sm"> Partnername</th>
                <th className="ds-hidden-sm"> Stadt </th>
                <th> Start </th>
                <th className="ds-hidden-md ds-hidden-sm"> Ende </th>
                <th className="ds-hidden-md ds-hidden-sm"> Öffentlich </th>
                <th className="ds-hidden-md ds-hidden-sm"> Reihenfolge </th>
                <th>
                  <i className="fas fa-edit"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {projectList?.map((project) => (
                <tr key={project.id}>
                  <td>{project.projectName}</td>
                  <td className="ds-hidden-sm">{project.partnerName}</td>
                  <td className="ds-hidden-sm">{project.city}</td>
                  <td className="text-center">{project.startedAt ?? 'n/a'}</td>
                  <td className="text-center ds-hidden-md ds-hidden-sm">{project.endedAt ?? 'n/a'}</td>
                  <td className="text-center ds-hidden-md ds-hidden-sm">
                    <i
                      className={`fas ${project.isPublic ? 'fa-check' : 'fa-close'}`}
                      style={{ color: project.isPublic ? 'green' : 'red' }}
                    ></i>
                  </td>
                  <td className="text-right ds-hidden-md ds-hidden-sm">{project.orderId || 0}</td>
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
      <Link href={`${router.pathname}/${ADD_ITEM_URL_PREFIX}`} className="btn btn-primary add-item">
        <i className="fas fa-add" title="Eintrag hinzufügen"></i>
      </Link>
    </DasboardLayout>
  );
}
