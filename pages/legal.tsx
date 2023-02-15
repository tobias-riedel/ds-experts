import PageBanner from "../components/Common/PageBanner";
import CookiesPolicy from "../components/CookiesPolicy";
import Gdpr from "../components/Gdpr";
import Imprint from "../components/Imprint";

const Legal = () => {
  return (
    <>
      <PageBanner pageTitle="Impressum" BGImage="/images/page-banner1.jpg" />

      <Imprint />

      <CookiesPolicy />

      <Gdpr />
    </>
  );
};

export default Legal;
