import Link from "next/link";
import { useEffect, useState } from "react";

const Imprint = () => {
  const [showContacts, setShowContacts] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContacts(true);
    }, 1000);
  }, []);

  return (
    <>
      <div className="faq-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="faq-img">
                <img src="/images/faq-img.jpg" alt="Image" />
              </div>
            </div>

            <div className="col-lg-7">
              <h5>ds-experts IT-Consulting GmbH</h5>

              {showContacts ? (
                <>
                  <div>Rudolf-Breitscheid-Straße 68</div>
                  <div>16559 Liebenwalde</div>
                  <span>Telefon: </span>
                  <Link href="tel: +49 33 054904 404">
                    <a>+49 33 054904 404</a>
                  </Link>
                </>
              ) : (
                <>
                  <div>Lade Straße...</div>
                  <div>Lade Ort...</div>
                  <div>Lade Telefonnummer...</div>
                </>
              )}

              <div>vertreten durch Geschäftsführer Lutz Schenk</div>
              <div>Registergericht Amtsgericht Neuruppin</div>
              <div>Registernummer der GmbH: HRB 11069</div>
              <div>USt.IDNr.: DE299584474</div>
              <div>Steuernummer: 053/107/05189</div>
              <div>Verantwortlich für die Webseite: Daniel Schenk</div>

              {showContacts ? (
                <>
                  <span>eMail: </span>
                  <Link href="mailto:info@ds-experts.de">
                    <a>info@ds-experts.de</a>
                  </Link>
                </>
              ) : (
                <div>Lade eMail-Adresse...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imprint;