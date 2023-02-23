import Image from "next/image";
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
    <section id="imprint" className="ptb-100">
      <div className="section-title"></div>
      <div className="faq-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="faq-img">
                <Image
                  src="/images/faq-img.jpg"
                  alt="Impressum"
                  className="optimized-image"
                  width={400}
                  height={267}
                  priority
                />
              </div>
            </div>

            <div className="col-lg-7">
              <h2>ds-experts IT-Consulting GmbH</h2>

              {showContacts ? (
                <>
                  <div>Rudolf-Breitscheid-Straße 68</div>
                  <div>16559 Liebenwalde</div>
                  <span>Telefon: </span>
                  <Link href="tel: +49 33 054904 404">+49 33 054904 404</Link>
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
                    info@ds-experts.de
                  </Link>
                </>
              ) : (
                <div>Lade eMail-Adresse...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Imprint;
