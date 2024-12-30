import { COMPANY_ADDRESS, COMPANY_COORDINATES } from '@consts/company';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Contact.module.css';
import ContactForm from './Contact/ContactForm';
import CompanyMap from './Map/CompanyMap';

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
            <div className={showContactForm ? 'col-lg-6' : ''}>
              <h3>Hier kannst Du uns finden</h3>
              <div className="mb-4">
                <ul className="list-unstyled links--underlined">
                  <li>
                    <i className={'fas fa-map-marker-alt ' + styles.icon}></i>
                    &nbsp;
                    {showContacts ? (
                      <>
                        <Link href={COMPANY_ADDRESS.googleMapsUrl} target="_blank" rel="noopener">
                          {COMPANY_ADDRESS.street} {COMPANY_ADDRESS.streetNo}, {COMPANY_ADDRESS.zipCode}{' '}
                          {COMPANY_ADDRESS.city}
                        </Link>
                      </>
                    ) : (
                      'Lade Adresse...'
                    )}
                  </li>
                  <li>
                    <i className={'fas fa-phone-square-alt ' + styles.icon}></i>
                    &nbsp;
                    {showContacts ? (
                      <Link href={`tel: ${COMPANY_ADDRESS.telephone}`}>{COMPANY_ADDRESS.telephone}</Link>
                    ) : (
                      'Lade Telefonnummer...'
                    )}
                  </li>
                  <li>
                    <i className={'fas fa-envelope-square ' + styles.icon}></i>
                    &nbsp;
                    {showContacts ? (
                      <Link href={`mailto:${COMPANY_ADDRESS.email}`}>{COMPANY_ADDRESS.email}</Link>
                    ) : (
                      'Lade eMail-Adresse...'
                    )}
                  </li>
                </ul>

                <CompanyMap
                  height={320}
                  lattitude={COMPANY_COORDINATES[0]}
                  longitude={COMPANY_COORDINATES[1]}
                  offsetX={138}
                  offsetY={128}
                  tooltipText={`${COMPANY_ADDRESS.street} ${COMPANY_ADDRESS.streetNo},`}
                  tooltipSubtext={`${COMPANY_ADDRESS.zipCode} ${COMPANY_ADDRESS.city}`}
                />

                {!showContactForm && (
                  <div className="text-center pt-100" onClick={() => setShowContactForm(true)}>
                    <button className="btn btn-primary">Kontaktformular anzeigen</button>
                  </div>
                )}
              </div>
            </div>

            <div className={showContactForm ? 'col-lg-6' : ''}>
              {showContactForm && (
                <div data-aos="fade" data-aos-duration="1200" data-aos-once="true">
                  <h3>Kontaktiere uns!</h3>
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
