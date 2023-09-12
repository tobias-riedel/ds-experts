import SectionDivider from '../components/Common/SectionDivider';

import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import dynamic from 'next/dynamic';
import Layout from '../components/Layouts/Layout';
import { Reference } from '../components/References';
import { ExpertFormItem } from '@models/forms.model';

const section = 'Lade Abschnitt...';

export const getServerSideProps: GetServerSideProps<{
  references: Reference[];
  experts: ExpertFormItem[];
}> = async () => {
  try {
    const [{ data: references }, { data: experts }] = await Promise.all([
      axios<Reference[]>('/api/admin/projects'),
      axios<ExpertFormItem[]>('/api/admin/experts'),
    ]);

    // TODO: Use redux instead
    return { props: { references, experts } };
  } catch (error) {
    console.log('Error::', error);

    return { props: { references: [], experts: [] } };
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
      <References references={references} />
      <Contact />
    </Layout>
  );
};

export default MainPage;
