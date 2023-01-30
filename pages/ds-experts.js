import React from "react";
import Feedback from "../components/Common/Feedback";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import LatestNewsSliderTwo from "../components/Common/LatestNewsSliderTwo";
import Newsletter from "../components/Common/Newsletter";
import Partner from "../components/Common/Partner";
import Team from "../components/HomePages/DsExperts/Team";
import JoinUs from "../components/HomePages/DsExperts/JoinUs/JoinUs";
import TeamStyleTwo from "../components/HomePages/DsExperts/TeamStyleTwo";
import WorkProcess from "../components/HomePages/DsExperts/WorkProcess";
import OurWorks from "../components/HomePages/DsExperts/OurWorks";
import Contact from "../components/HomePages/DsExperts/Contact";
import MainBanner from "../components/HomePages/DsExperts/MainBanner";
import Competencies from "../components/HomePages/DsExperts/Competencies";
import ServiceStyleTwo from "../components/HomePages/ItAgencyTwo/ServiceStyleTwo";
import About from "../components/HomePages/DsExperts/About";
import Footer from "../components/Layouts/DsFooter";
import Navbar from "../components/Layouts/NavbarDsExperts";
import PricingStyleThree from "../components/Pricing/PricingStyleThree";

const DsExperts = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <About />
      <Competencies />
      <OurWorks />
      {/* <ServiceStyleTwo /> */}
      <Team />
      <JoinUs />
      {/* WorkProcess for v2.0 */}
      <WorkProcess />
      <Contact />
      {/* <FunFactsTwo /> */}
      {/* <Partner /> */}
      {/* <Feedback /> */}
      {/* <TeamStyleTwo /> */}
      {/* <PricingStyleThree /> */}
      {/* <LatestNewsSliderTwo /> */}
      {/* <div className="pb-100">
        <Newsletter />
      </div> */}
      <Footer />
    </>
  );
};

export default DsExperts;
