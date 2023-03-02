import PageBanner from '../components/Common/PageBanner';
import Gdpr from '../components/Gdpr';
import Imprint from '../components/Imprint';

const Legal = () => {
  return (
    <>
      <PageBanner pageTitle="Impressum" BGImage="/images/page-banner1.webp" />

      <div className="links--underlined">
        <Imprint />

        <Gdpr />
      </div>
    </>
  );
};

export default Legal;
