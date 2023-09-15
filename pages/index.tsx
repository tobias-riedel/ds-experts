import SectionDivider from '@components/Common/SectionDivider';
import Layout from '@layouts/Layout';
import { Expert, Project } from '@prisma/client';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import dynamic from 'next/dynamic';

const SECTION = 'Lade Abschnitt...';

export const getServerSideProps: GetServerSideProps<{
  references: Project[];
  experts: Expert[];
}> = async () => {
  try {
    const [{ data: references }, { data: experts }] = await Promise.all([
      axios<Project[]>('/api/projects'),
      axios<Expert[]>('/api/experts'),
    ]);

    // TODO: Use redux instead
    return { props: { references, experts } };
  } catch (error) {
    console.log('Error loading projects/experts:', error);

    return { props: { references: [], experts: [] } };
  }
};

const Team = dynamic(import('@components/Team'), {
  loading: () => <>{SECTION}</>,
});
const Philosophy = dynamic(import('@components/Philosophy'), { loading: () => <>{SECTION}</> });
const References = dynamic(import('@components/References'), { loading: () => <>{SECTION}</> });
const MainBanner = dynamic(import('@components/MainBanner'), { loading: () => <>{SECTION}</> });
const About = dynamic(import('@components/About'), { loading: () => <>{SECTION}</> });
const Competencies = dynamic(import('@components/Competencies'), { loading: () => <>{SECTION}</> });
const JoinUs = dynamic(import('@components/JoinUs/JoinUs'), { loading: () => <>{SECTION}</> });
const Contact = dynamic(import('@components/Contact'), { loading: () => <>{SECTION}</> });
const WorkProcess = dynamic(import('@components/WorkProcess'), { loading: () => <>{SECTION}</> });

export const MainPage = ({ references, experts }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
      <section id="home">
        <MainBanner />
        <About />
        <SectionDivider />
      </section>

      <Team experts={experts} />
      <Philosophy />
      <WorkProcess />
      <JoinUs />
      <Competencies />
      <References projects={references} />
      <Contact />
    </Layout>
  );
};

export default MainPage;
