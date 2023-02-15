import About from "../components/About";
import Competencies from "../components/Competencies";
import Contact from "../components/Contact";
import JoinUs from "../components/JoinUs/JoinUs";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/MainBanner";
import OurWorks from "../components/OurWorks";
import Philosophy from "../components/Philosophy";
import Team from "../components/Team";
import WorkProcess from "../components/WorkProcess";

export default () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <About />
      <Competencies />
      <OurWorks />
      <Team />
      <Philosophy />
      <JoinUs />
      <WorkProcess />
      <Contact />
      <Footer />
    </>
  );
};
