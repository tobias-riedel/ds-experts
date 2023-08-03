import PageBanner from '../components/Common/PageBanner';
import ErrorContent from '../components/Error/ErrorContent';
import Layout from '../components/Layouts/Layout';

const Error = () => {
  return (
    <Layout>
      <PageBanner pageTitle="404 Error" BGImage="/images/page-banner3.jpg" />

      <ErrorContent />
    </Layout>
  );
};

export default Error;
