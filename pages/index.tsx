import SectionDivider from '@components/Common/SectionDivider';
import Layout from '@layouts/Layout';
import { Expert, PrismaPromise } from '@prisma/client';
import { listExperts } from '@server/trpc/shared/expert';
import { ProjectWithExperts, listProjectsWithExperts } from '@server/trpc/shared/project';
import { AllowedImageDirs, getImages } from '@utils/images';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';

const availableProjectImgs = getImages(AllowedImageDirs.REFERENCES);

const getRandomProjectImage = (projects: ProjectWithExperts[], idx: number, lookAround = 2): string | null => {
  const start = Math.max(lookAround - idx, 0);
  const end = Math.min(lookAround + idx, projects.length);

  const neighborImgs: string[] = [];
  for (let i = start; i < end; i++) {
    const neighborImg = projects[i].img;

    if (neighborImg != null) {
      neighborImgs.push(neighborImg);
    }
  }

  const availableRandomProjectImgs = availableProjectImgs.filter((img) => !neighborImgs.includes(img));
  const randomImg = availableRandomProjectImgs[Math.floor(Math.random() * availableRandomProjectImgs.length)];

  return randomImg;
};

const processProjects = (projects: ProjectWithExperts[]): ProjectWithExperts[] => {
  return projects.map((project, idx) => ({
    ...project,
    img: project.img != '' ? project.img : getRandomProjectImage(projects, idx),
  }));
};

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

export const getStaticProps: GetStaticProps<{ experts: Expert[]; projects: ProjectWithExperts[] }> = async () => {
  const expertsQuery: PrismaPromise<Expert[]> = listExperts();
  const projectsQuery: PrismaPromise<ProjectWithExperts[]> = listProjectsWithExperts();

  const [rawExperts, rawProjects]: [Expert[], ProjectWithExperts[]] = await Promise.all([expertsQuery, projectsQuery]);
  const experts = rawExperts.map((expert) => ({
    ...expert,
    createdAt: null,
    updatedAt: null,
  }));

  const projects = processProjects(rawProjects);

  return {
    props: { experts, projects },
    revalidate: 60,
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
