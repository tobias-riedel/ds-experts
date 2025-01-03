import { SCROLL_LINKS_PROPS } from '@consts/misc';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

const About = () => {
  return (
    <div className="pt-100">
      <div className="container">
        <div className="text-with-img-grid text-with-img-grid--right">
          <div className="text-with-img__img">
            <div>
              <Image
                src="/images/about-img5.jpg"
                alt="Über uns"
                className="rounded-10 shadow optimized-image"
                width={500}
                height={650}
                sizes="(max-width: 380px) 1vw, (max-width: 576px) 80vw, (max-width: 768px) 60vw, (max-width: 992px) 65vw, 90vw"
              />
            </div>
          </div>

          <div className="text-with-img__text" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
            <div className="about-content about-content-two">
              <div className="section-title">
                <h2>Was ist ds-experts?</h2>
              </div>

              <div className="about-text">
                <p>
                  Die <b>ds-experts IT-Consulting GmbH</b> unterstützt seit 2015 große und sehr große Unternehmen auf
                  dem deutschen Markt bei der erfolgreichen Umsetzung von IT-Projekten in Form von Projekt- oder
                  Beratungsleistungen.
                </p>

                <h3>Was ist unser Rohstoff?</h3>
                <p>Unsere Experten haben den besten Rohstoff, den man sich vorstellen kann:</p>

                <p className="resource" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                  Know-How
                </p>

                <p>
                  Unser Know-How bringen wir erfolgreich bei unseren Kunden ein, damit Projekte erfolgreich umgesetzt
                  werden können. Unsere sehr hohe Fortbildungsquote sorgt dafür, dass dieses Wissen nie versiegt.
                </p>

                <h3>Struktur</h3>
                <p>Die ds-experts IT-Consulting GmbH zeichnet eine schlanke Struktur aus.</p>

                <p>Schlank bedeutet für uns…</p>

                <ul>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    …, dass Entscheidungsprozesse und ihre Umsetzung abhängig von der Komplexität zeitnah, idealerweise
                    innerhalb von Stunden, durchgeführt werden.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    …, dass Hierarchien auf das nötigste reduziert wurden.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    …, dass ein kollegialer Umgang niemanden allein lässt. Wir helfen uns gegenseitig!
                  </li>
                </ul>
              </div>

              <div>
                <ScrollLink to="philosophy" href="/#philosophy" className="btn btn-primary" {...SCROLL_LINKS_PROPS}>
                  Erfahre mehr über unsere Leitlinien <i className="fas fa-chevron-right"></i>
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
