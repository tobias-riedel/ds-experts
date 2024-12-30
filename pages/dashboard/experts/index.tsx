import Loading from '@components/Common/Loading';
import AdminSearch from '@components/Search/AdminSearch';
import { ADD_ITEM_URL_PREFIX } from '@consts/dashboard';
import { MySwal } from '@consts/misc';
import DashboardLayout from '@layouts/DashboardLayout';
import { Expert } from '@prisma/client';
import { trpc } from '@utils/trpc';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const SEARCH_FIELDS: Array<keyof Expert> = ['firstName', 'lastName', 'role', 'startedAt', 'endedAt', 'visibility'];
const SEARCH_FIELD_PLACEHOLDER = ['Vorname', 'Nachname', 'Rolle', 'Start', 'Ende', 'Sichtbarkeit'].join(', ');

export default function Page() {
  const router = useRouter();

  const itemRoute = trpc.useContext().experts;

  const getItems = trpc.experts.listDashboard.useQuery();

  const [experts, setExperts] = useState<Expert[]>(getItems.data ?? []);

  const deleteItem = trpc.experts.delete.useMutation({
    onSuccess: () => {
      itemRoute.invalidate();

      MySwal.fire({
        position: 'top-end',
        title: 'Eintrag gelöscht.',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      });
    },
    onError: (error) => {
      console.warn('Error deleting item:', error);

      MySwal.fire({
        position: 'top-end',
        title: 'Fehler!',
        text: 'Es ist ein Fehler beim Löschen vom Eintrag aufgetreten.',
        icon: 'error',
        timer: 1500,
        showConfirmButton: false,
      });
    },
  });

  const editItem = (itemId: string) => {
    router.push(`${router.pathname}/${itemId}`);
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

    deleteItem.mutate({ id: itemId });
  };

  const searchTermChanged = (filteredItems: Record<string, unknown>[]): void => {
    setExperts(filteredItems as Expert[]);
  };

  return (
    <DashboardLayout>
      <section className="pb-100">
        <h1 className="text-center">Experten-Übersicht</h1>

        <AdminSearch
          items={getItems.data}
          searchFields={SEARCH_FIELDS}
          placeholder={SEARCH_FIELD_PLACEHOLDER}
          onSearchTermChanged={searchTermChanged}
        />

        <Loading isLoading={getItems.isLoading}>
          {experts.length > 0 ? (
            <div className="item-list m-2">
              <table>
                <thead>
                  <tr>
                    <th> Name</th>
                    <th className="ds-hidden-sm"> Rolle</th>
                    <th> Start </th>
                    <th className="ds-hidden-md ds-hidden-sm"> Ende </th>
                    <th className="ds-hidden-md ds-hidden-sm"> Sichtbarkeit </th>
                    <th className="ds-hidden-md ds-hidden-sm"> Reihenfolge </th>
                    <th>
                      <i className="fas fa-edit"></i>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {experts.map((item) => {
                    const fullName = `${item.firstName} ${item.lastName}`;
                    return (
                      <tr key={item.id}>
                        <td>{fullName}</td>
                        <td className="ds-hidden-sm">{item.role}</td>
                        <td className="text-center">{item.startedAt}</td>
                        <td className="text-center ds-hidden-md ds-hidden-sm">{item.endedAt ?? 'n/a'}</td>
                        <td className="text-center ds-hidden-md ds-hidden-sm">{item.visibility}</td>
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
        </Loading>

        <Link href={`${router.pathname}/${ADD_ITEM_URL_PREFIX}`} className="btn btn-primary add-item">
          <i className="fas fa-add" title="Eintrag hinzufügen"></i>
        </Link>
      </section>
    </DashboardLayout>
  );
}
