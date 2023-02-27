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

const Team = dynamic(
  import('../components/Team').then((cmp) => cmp.default),
  {
    loading: () => <>{section}</>,
  }
);
const Philosophy = dynamic(
  import('../components/Philosophy').then((cmp) => cmp.default),
  { loading: () => <>{section}</> }
);
const References = dynamic(
  import('../components/References').then((cmp) => cmp.default),
  { loading: () => <>{section}</> }
);
const MainBanner = dynamic(
  import('../components/MainBanner').then((cmp) => cmp.default),
  { loading: () => <>{section}</> }
);
const About = dynamic(
  import('../components/About').then((cmp) => cmp.default),
  { loading: () => <>{section}</> }
);
const Competencies = dynamic(
  import('../components/Competencies').then((cmp) => cmp.default),
  { loading: () => <>{section}</> }
);
const JoinUs = dynamic(
  import('../components/JoinUs/JoinUs').then((cmp) => cmp.default),
  { loading: () => <>{section}</> }
);
const Contact = dynamic(
  import('../components/Contact').then((cmp) => cmp.default),
  { loading: () => <>{section}</> }
);
const WorkProcess = dynamic(
  import('../components/WorkProcess').then((cmp) => cmp.default),
  { loading: () => <>{section}</> }
);

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
