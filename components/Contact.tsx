import Link from "next/link";
import { useEffect, useState } from "react";
import { COMPANY_ADDRESS } from "../shared/constants";
import styles from "./Contact.module.css";
import ContactForm from "./Contact/ContactForm";
import CompanyMap from "./Map/CompanyMap";

const Contact = () => {
  const [showContacts, setShowContacts] = useState(false);
  const [showContactForm, setShowContactForm] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowContacts(true);
    }, 1000);
  }, []);

  return (
    <section id="contact" className="pt-100">
      <div className="service-style-two">
        <div className="container">
          <div className="section-title">
            <h2>Kontakt</h2>
          </div>

          <div className="row">
            <div className={showContactForm ? "col-lg-6" : ""}>
              <h3 className="text-center">Hier kannst Du uns finden</h3>
              <div className="service-left-img">
                <ul className="list-unstyled links--underlined">
                  <li>
                    <i className={"fas fa-map-marker-alt " + styles.icon}></i>
                    &nbsp;
                    {showContacts ? (
                      <>
                        <span>Adresse: </span>
                        <Link
                          href="https://www.google.com/maps/place/Rudolf-Breitscheid-Stra%C3%9Fe+68,+16559+Liebenwalde/@52.874105,13.3796239,16.25z/data=!4m5!3m4!1s0x47a9a72267ac7ba9:0x5e61f97b718143bb!8m2!3d52.8735095!4d13.383309"
                          target="_blank"
                          rel="noopener"
                        >
                          {COMPANY_ADDRESS.street} {COMPANY_ADDRESS.streetNo},{" "}
                          {COMPANY_ADDRESS.zipCode} {COMPANY_ADDRESS.city}
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
                          +49 33 054904 404
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
                          info@ds-experts.de
                        </Link>
                      </>
                    ) : (
                      "Lade eMail-Adresse..."
                    )}
                  </li>
                </ul>

                <CompanyMap height={320} />

                {!showContactForm && (
                  <div
                    className="text-center pt-100"
                    onClick={() => setShowContactForm(true)}
                  >
                    <button className="btn btn-primary">
                      Kontaktformular anzeigen
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className={showContactForm ? "col-lg-6" : ""}>
              {showContactForm && (
                <div
                  data-aos="fade"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  <h3 className="text-center">Kontaktiere uns!</h3>
                  <ContactForm />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
