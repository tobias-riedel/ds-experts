import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import { SCROLL_LINKS_PROPS } from '../shared/constants';

const About = () => {
  return (
    <div className="pt-100">
      <div className="about-area ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <h2>Was ist ds-experts?</h2>
                </div>

                <div className="about-text" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                  <p>
                    Die ds-experts IT-Consulting GmbH unterstützt seit 2015 große und sehr große Unternehmen auf dem
                    deutschen Markt bei der erfolgreichen Umsetzung von IT-Projekten in Form von Projekt- oder
                    Beratungsleistungen.
                  </p>

                  <h3>Was ist unser Rohstoff?</h3>
                  <p>Unsere Experten haben den besten Rohstoff, den man sich vorstellen kann:</p>

                  <p className="resource" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                    Know-How
                  </p>

                  <p>
                    Unser Know-How bringen wir erfolgreich bei unseren Kunden ein, damit Projekte erfolgreich umgesetzt
                    werden können. Unsere sehr hohe Weiterbildungsquote sorgt dafür, dass dieses Wissen nie versiegt.
                  </p>

                  <h3>Struktur</h3>
                  <p>Die ds-experts IT-Consulting GmbH zeichnet eine schlanke Struktur aus.</p>

                  <p>Schlank bedeutet für uns…</p>

                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      …, dass Entscheidungsprozesse und ihre Umsetzung abhängig von der Komplexität zeitnah,
                      idealerweise innerhalb von Stunden, durchgeführt werden.
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
                    Erfahre mehr über unsere Leitlinien
                  </ScrollLink>
                </div>
              </div>
            </div>

            <div className="col-lg-5 ds-hidden-md">
              <div className="about-image">
                <Image
                  src="/images/about-img5.jpg"
                  alt="image"
                  className="rounded-10 shadow optimized-image"
                  width={500}
                  height={650}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
