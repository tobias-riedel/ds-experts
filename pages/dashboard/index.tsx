import DashboardLayout from '@components/Layouts/DashboardLayout';
import { DASHBOARD_URLS } from '@consts/dashboard';
import { $Enums } from '@prisma/client';
import { trpc } from '@utils/trpc';
import Link from 'next/link';

export default function Page() {
  const getExpertsCountAdmin = trpc.experts.count.useQuery({ visibility: $Enums.Visibility.ADMIN });
  const getExpertsCountCv = trpc.experts.count.useQuery({ visibility: $Enums.Visibility.CV });
  const getExpertsCountPublic = trpc.experts.count.useQuery({ visibility: $Enums.Visibility.PUBLIC });

  const getProjectsCountAdmin = trpc.projects.count.useQuery({ visibility: $Enums.Visibility.ADMIN });
  const getProjectsCountCv = trpc.projects.count.useQuery({ visibility: $Enums.Visibility.CV });
  const getProjectsCountPublic = trpc.projects.count.useQuery({ visibility: $Enums.Visibility.PUBLIC });

  return (
    <DashboardLayout>
      <h1 className="text-center">Dashboard</h1>

      <Link href={DASHBOARD_URLS.projects.to}>
        <h2>Projekte</h2>
        <ul>
          <li>{getProjectsCountPublic.data} Public</li>
          <li>{getProjectsCountCv.data} CV</li>
          <li>{getProjectsCountAdmin.data} Admin</li>
        </ul>
      </Link>
      <br />
      <br />

      <Link href={DASHBOARD_URLS.experts.to}>
        <h2>Experten</h2>
        <ul>
          <li>{getExpertsCountPublic.data} Public</li>
          <li>{getExpertsCountCv.data} CV</li>
          <li>{getExpertsCountAdmin.data} Admin</li>
        </ul>
      </Link>
    </DashboardLayout>
  );
}
