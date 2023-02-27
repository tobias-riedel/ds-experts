// import About from '../components/About';
import SectionDivider from '../components/Common/SectionDivider';
// import Competencies from '../components/Competencies';
// import Contact from '../components/Contact';
// import JoinUs from '../components/JoinUs/JoinUs';
// import MainBanner from '../components/MainBanner';
// import Philosophy from '../components/Philosophy';
// import References from '../components/References';
// import Team from '../components/Team';
// import WorkProcess from '../components/WorkProcess';
import dynamic from 'next/dynamic';

const section = 'Lade Abschnitt...';

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

export const MainPage = () => {
  return (
    <>
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
      <References />
      <Contact />
    </>
  );
};

export default MainPage;
