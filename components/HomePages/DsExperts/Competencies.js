import Link from "next/link";
import { useState } from "react";
import FsLightbox from "fslightbox-react";

const Competencies = () => {
  const [toggler, setToggler] = useState(false);

  let sources = "http://localhost:3000/ds-experts/legal";

  const toggleInfo = (e, competence) => {
    e.preventDefault();

    // sources = "http://localhost:3000/ds-experts/legal#gdpr";

    setToggler(!toggler);
  };

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Unsere Kompetenzen</h2>
            {/* asd: {{ sources }} */}
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-competencies text-center">
                <i className="pe-7s-rocket bg-13c4a1"></i>
                <h3>
                  <Link href="/">
                    <a onClick={(e) => toggleInfo(e, "Anforderungen")}>
                      Anforderungen
                    </a>
                  </Link>
                </h3>
                <p>
                  Erfolgreiche Projekte unterstützen wir mit
                  Anforderungsanalysen
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-competencies bg-competencies--active text-center">
                <i className="pe-7s-display2 bg-6610f2"></i>
                <h3>
                  <Link href="/service-details">
                    <a>Projekte</a>
                  </Link>
                </h3>
                <p>Wir setzen erfolgreich agile und klassische Projekte um</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-competencies text-center">
                <i className="pe-7s-light bg-ffb700"></i>
                <h3>
                  <Link href="/service-details">
                    <a>Transitionen</a>
                  </Link>
                </h3>
                <p>Vom Projekt in den Betrieb, damit aus einmal oft wird</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-competencies text-center">
                <i className="pe-7s-phone bg-fc3549"></i>
                <h3>
                  <Link href="/service-details">
                    <a>Consulting</a>
                  </Link>
                </h3>
                <p>
                  Wir beraten unsere Kunden über zukunftssichere Technologien
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-competencies text-center">
                <i className="pe-7s-cart bg-00d280"></i>
                <h3>
                  <Link href="/service-details">
                    <a>Development</a>
                  </Link>
                </h3>
                <p>
                  Wir entwickeln zukunftsfähige Lösungen für und mit unseren
                  Kunden
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-competencies text-center">
                <i className="pe-7s-users bg-ff612f"></i>
                <h3>
                  <Link href="/service-details">
                    <a>Services</a>
                  </Link>
                </h3>
                <p>
                  Wir unterstützen unsere Kunden beim Betrieb von neuen
                  Technologien
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Competencies;
