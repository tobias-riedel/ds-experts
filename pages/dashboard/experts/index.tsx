import { ADD_ITEM_URL_PREFIX } from '@consts/dashboard';
import DasboardLayout from '@layouts/DashboardLayout';
import { Expert } from '@prisma/client';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

type Item = Expert;

const API_URL = '/api/admin/experts';
const fetchItems = () => axios<Item[]>(API_URL);

export const getServerSideProps: GetServerSideProps<{
  items: Item[];
}> = async () => {
  try {
    const { data: items } = await fetchItems();
    return { props: { items } };
  } catch (error) {
    console.log('Error::', error);

    return { props: { items: [] } };
  }
};

export default function Page({ items }: { items: Item[] }) {
  const router = useRouter();

  const [entries, setEntries] = useState(items as Item[]);

  const updateOverview = async () => {
    const { data: updatedItems } = await fetchItems();
    setEntries(updatedItems);
  };

  const editItem = (itemId: string) => {
    router.push(`${router.pathname}/${itemId}`);
  };

  const deleteItem = async (itemId: string) => {
    try {
      await axios.delete(API_URL, { data: { id: itemId } });
    } catch (error) {
      console.log('Error::', error);
    }

    await updateOverview();
  };

  const confirmDeleteItem = async (itemId: string, itemName: string) => {
    const result = await MySwal.fire({
      title: 'Eintrag löschen?',
      text: `Soll die Person "${itemName}" wirklich gelöscht werden?`,
      icon: 'warning',
      confirmButtonColor: 'red',
      showCancelButton: true,
      showCloseButton: true,
      focusCancel: true,
    });

    if (result.isDismissed) {
      return;
    }

    await deleteItem(itemId);
  };

  return (
    <DasboardLayout>
      <section>
        <h1 className="text-center">Experten-Übersicht</h1>

        {entries?.length > 0 ? (
          <div className="item-list m-2">
            <table>
              <thead>
                <tr>
                  <th> Name</th>
                  <th className="ds-hidden-sm"> Rolle</th>
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
                {entries?.map((item) => {
                  const fullName = `${item.firstName} ${item.lastName}`;
                  return (
                    <tr key={item.id}>
                      <td>{fullName}</td>
                      <td className="ds-hidden-sm">{item.jobTitle}</td>
                      <td className="text-center">{item.startedAt}</td>
                      <td className="text-center ds-hidden-md ds-hidden-sm">{item.endedAt ?? 'n/a'}</td>
                      <td className="text-center ds-hidden-md ds-hidden-sm">
                        <i
                          className={`fas ${item.isPublic ? 'fa-check' : 'fa-close'}`}
                          style={{ color: item.isPublic ? 'green' : 'red' }}
                        ></i>
                      </td>
                      <td className="text-right ds-hidden-md ds-hidden-sm">{item.orderId || 0}</td>
                      <td className="text-center actions">
                        <button onClick={() => editItem(item.id)} className="btn btn-link">
                          <i className="fas fa-edit" title="Bearbeiten"></i>
                        </button>
                        <button onClick={() => confirmDeleteItem(item.id, fullName)} className="btn btn-link">
                          <i className="fas fa-trash" title="Löschen"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <h2 className="text-center pb-100">Keine Einträge vorhanden!</h2>
        )}
        <Link href={`${router.pathname}/${ADD_ITEM_URL_PREFIX}`} className="btn btn-primary add-item">
          <i className="fas fa-add" title="Eintrag hinzufügen"></i>
        </Link>
      </section>
    </DasboardLayout>
  );
}
