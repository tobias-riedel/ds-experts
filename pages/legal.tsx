import PageBanner from '../components/Common/PageBanner';
import Gdpr from '../components/Gdpr';
import Imprint from '../components/Imprint';
import Layout from '../components/Layouts/Layout';

const Legal = () => {
  return (
    <Layout>
      <PageBanner pageTitle="Impressum" BGImage="/images/page-banner1.webp" />

      <div className="links--underlined">
        <Imprint />

        <Gdpr />
      </div>
    </Layout>
  );
};

export default Legal;
