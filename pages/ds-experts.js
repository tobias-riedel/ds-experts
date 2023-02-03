import About from "../components/HomePages/DsExperts/About";
import Competencies from "../components/HomePages/DsExperts/Competencies";
import Contact from "../components/HomePages/DsExperts/Contact";
import JoinUs from "../components/HomePages/DsExperts/JoinUs/JoinUs";
import MainBanner from "../components/HomePages/DsExperts/MainBanner";
import OurWorks from "../components/HomePages/DsExperts/OurWorks";
import Team from "../components/HomePages/DsExperts/Team";
import WorkProcess from "../components/HomePages/DsExperts/WorkProcess";
import Footer from "../components/Layouts/DsFooter";
import Navbar from "../components/Layouts/NavbarDsExperts";

export default () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <About />
      <Competencies />
      <OurWorks />
      <Team />
      <JoinUs />
      <WorkProcess />
      <Contact />
      <Footer />
    </>
  );
};
