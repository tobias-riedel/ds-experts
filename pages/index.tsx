import SectionDivider from '@components/Common/SectionDivider';
import { prisma } from '@db/client';
import Layout from '@layouts/Layout';
import { $Enums, Expert, PrismaPromise, Project } from '@prisma/client';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';

const SECTION = 'Lade Abschnitt...';

const Team = dynamic(import('@components/Team/Team'), {
  loading: () => <>{SECTION}</>,
});
const Philosophy = dynamic(import('@components/Philosophy'), { loading: () => <>{SECTION}</> });
const References = dynamic(import('@components/References/References'), { loading: () => <>{SECTION}</> });
const MainBanner = dynamic(import('@components/MainBanner'), { loading: () => <>{SECTION}</> });
const About = dynamic(import('@components/About'), { loading: () => <>{SECTION}</> });
const Competencies = dynamic(import('@components/Competencies'), { loading: () => <>{SECTION}</> });
const JoinUs = dynamic(import('@components/JoinUs/JoinUs'), { loading: () => <>{SECTION}</> });
const Contact = dynamic(import('@components/Contact'), { loading: () => <>{SECTION}</> });
const WorkProcess = dynamic(import('@components/WorkProcess'), { loading: () => <>{SECTION}</> });

export const getStaticProps: GetStaticProps<{ experts: Expert[]; projects: Project[] }> = async () => {
  const expertsQuery: PrismaPromise<Expert[]> = prisma.expert.findMany({
    where: { visibility: $Enums.Visibility.PUBLIC },
    orderBy: { orderId: 'asc' },
  });

  const projectsQuery: PrismaPromise<Project[]> = prisma.project.findMany({
    where: { visibility: $Enums.Visibility.PUBLIC },
    orderBy: { orderId: 'asc' },
  });

  const [rawExperts, projects]: [Expert[], Project[]] = await Promise.all([expertsQuery, projectsQuery]);
  const experts = rawExperts.map((expert) => ({
    ...expert,
    createdAt: null,
    updatedAt: null,
  }));

  return {
    props: { experts, projects },
    revalidate: 300,
  };
};

export const MainPage = ({ experts, projects }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <Layout>
      <section id="home">
        <MainBanner />
        <About />
        <SectionDivider />
      </section>

      <Team data={experts} />
      <Philosophy />
      <WorkProcess />
      <JoinUs />
      <Competencies />
      <References data={projects} />
      <Contact />
    </Layout>
  );
};

export default MainPage;
