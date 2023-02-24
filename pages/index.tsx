import About from '../components/About';
import Competencies from '../components/Competencies';
import Contact from '../components/Contact';
import JoinUs from '../components/JoinUs/JoinUs';
import MainBanner from '../components/MainBanner';
import Philosophy from '../components/Philosophy';
import References from '../components/References';
import Team from '../components/Team';
import WorkProcess from '../components/WorkProcess';

export default () => {
  return (
    <>
      <section id="home">
        <MainBanner />
        <About />
        <div className="divider div-transparent div-arrow-down"></div>
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
