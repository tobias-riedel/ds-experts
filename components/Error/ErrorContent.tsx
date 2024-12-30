import Image from 'next/image';
import Link from 'next/link';
import errorImg from '../../public/images/404.png';

const ErrorContent = () => {
  return (
    <section>
      <div className="error-area pt-100">
        <div className="container">
          <div className="error-content">
            <Image src={errorImg} alt="Fehler-Titel" sizes="100vw" style={{ height: 'auto' }} priority />
            <h3>Error 404: Seite nicht gefunden</h3>
            <p>Diese Seite existiert nicht oder ist vorübergehend nicht verfügbar.</p>

            <div className="back-btn">
              <Link href="/" className="btn btn-primary">
                Zurück zur Hauptseite
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorContent;
