import Link from "next/link";
import { useEffect, useState } from "react";
import ContactForm from "../../Contact/DsContactForm";
import CompanyMap from "../../Map/CompanyMap";
import styles from "./Contact.module.css";

const Contact = () => {
  const [showContacts, setShowContacts] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContacts(true);
    }, 1000);
  }, []);

  return (
    <>
      <div className="service-style-two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="service-left-img">
                <ul className="list-unstyled">
                  <li>
                    <i className={"fas fa-map-marker-alt " + styles.icon}></i>
                    &nbsp;
                    {showContacts ? (
                      <>
                        <span>Adresse: </span>
                        <Link
                          href="https://www.google.com/maps/place/Rudolf-Breitscheid-Stra%C3%9Fe+68,+16559+Liebenwalde/@52.874105,13.3796239,16.25z/data=!4m5!3m4!1s0x47a9a72267ac7ba9:0x5e61f97b718143bb!8m2!3d52.8735095!4d13.383309"
                          target="_blank"
                        >
                          <a>Rudolf-Breitscheid-Straße 68, 16559 Liebenwalde</a>
                        </Link>
                      </>
                    ) : (
                      "Lade Adresse..."
                    )}
                  </li>
                  <li>
                    <i className={"fas fa-phone-square-alt " + styles.icon}></i>
                    &nbsp;
                    {showContacts ? (
                      <>
                        <span>Telefon: </span>
                        <Link href="tel: +49 33 054904 404">
                          <a>+49 33 054904 404</a>
                        </Link>
                      </>
                    ) : (
                      "Lade Telefonnummer..."
                    )}
                  </li>
                  <li>
                    <i className={"fas fa-envelope-square " + styles.icon}></i>
                    &nbsp;
                    {showContacts ? (
                      <>
                        <span>eMail: </span>
                        <Link href="mailto:info@ds-experts.de">
                          <a>info@ds-experts.de</a>
                        </Link>
                      </>
                    ) : (
                      "Lade eMail-Adresse..."
                    )}
                  </li>
                </ul>

                <CompanyMap />
              </div>
            </div>

            <div className="col-lg-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
