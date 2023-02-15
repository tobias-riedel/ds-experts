import About from "../components/About";
import CookieAccept from "../components/Common/CookieAccept";
import Competencies from "../components/Competencies";
import Contact from "../components/Contact";
import JoinUs from "../components/JoinUs/JoinUs";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/MainBanner";
import Philosophy from "../components/Philosophy";
import References from "../components/References";
import Team from "../components/Team";
import WorkProcess from "../components/WorkProcess";

export default () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <About />
      <Competencies />
      <References />
      <Team />
      <Philosophy />
      <JoinUs />
      <WorkProcess />
      <Contact />
      <Footer />
      <CookieAccept />
    </>
  );
};
