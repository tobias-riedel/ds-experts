import SectionDivider from '../components/Common/SectionDivider';

import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import dynamic from 'next/dynamic';
import Layout from '../components/Layouts/Layout';
import { References } from '../components/References';

const section = 'Lade Abschnitt...';

export const getServerSideProps: GetServerSideProps<{
  references: References[];
}> = async () => {
  try {
    const { data: references } = await axios<References[]>('/api/admin/projects');

    // TODO: Use redux instead
    return { props: { references } };
  } catch (error) {
    console.log('Error::', error);

    return { props: { references: [] } };
  }
};

const Team = dynamic(import('../components/Team'), {
  loading: () => <>{section}</>,
});
const Philosophy = dynamic(import('../components/Philosophy'), { loading: () => <>{section}</> });
const References = dynamic(import('../components/References'), { loading: () => <>{section}</> });
const MainBanner = dynamic(import('../components/MainBanner'), { loading: () => <>{section}</> });
const About = dynamic(import('../components/About'), { loading: () => <>{section}</> });
const Competencies = dynamic(import('../components/Competencies'), { loading: () => <>{section}</> });
const JoinUs = dynamic(import('../components/JoinUs/JoinUs'), { loading: () => <>{section}</> });
const Contact = dynamic(import('../components/Contact'), { loading: () => <>{section}</> });
const WorkProcess = dynamic(import('../components/WorkProcess'), { loading: () => <>{section}</> });

export const MainPage = ({ references }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
      <section id="home">
        <MainBanner />
        <About />
        <SectionDivider />
      </section>

      <Team />
      <Philosophy />
      <WorkProcess />
      <JoinUs />
      <Competencies />
      <References references={references} />
      <Contact />
    </Layout>
  );
};

export default MainPage;
