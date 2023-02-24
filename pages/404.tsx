import PageBanner from '../components/Common/PageBanner';
import ErrorContent from '../components/Error/ErrorContent';

const Error = () => {
  return (
    <>
      <PageBanner pageTitle="404 Error" BGImage="/images/page-banner3.jpg" />

      <ErrorContent />
    </>
  );
};

export default Error;
