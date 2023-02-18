import FsLightbox from "fslightbox-react";
import Link from "next/link";
import { useState } from "react";
import SectionDivider from "./Common/SectionDivider";
import JoinUsBackEndDeveloper from "./JoinUs/JoinUsBackEndDeveloper";

const Competencies = () => {
  const [toggler, setToggler] = useState(false);

  let sources = "http://localhost:3000/ds-experts/legal";

  const toggleInfo = (e, competence) => {
    e.preventDefault();

    // TODO: Re-enable after content for lightbox is there.
    // setToggler(!toggler);
  };

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          <div
            style={{
              width: "640px",
              height: "80%",
              maxHeight: "60vh",
              maxWidth: "44vh",
              padding: "0.5rem",
              color: "#000",
              backgroundColor: "#fff",
              borderRadius: "10px",
              border: "2px solid black",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                padding: "0",
                overflowY: "auto",
              }}
            >
              {/* TODO: Add correct components */}
              <JoinUsBackEndDeveloper />
            </div>
          </div>,
        ]}
      />

      <section id="competencies" className="pt-100">
        <div className="container">
          <div className="section-title">
            <h2>Unsere Kompetenzen</h2>
          </div>

          <div className="d-flex justify-content-center">
            <div className="row competencies">
              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="service-card-one bg-competencies text-center shadow">
                  <i className="pe-7s-note2 bg-13c4a1"></i>
                  <h3>
                    <Link href="/" onClick={(e) => toggleInfo(e, "")}>
                      Anforderungen
                    </Link>
                  </h3>
                  <p>
                    Erfolgreiche Projekte unterstützen wir mit
                    Anforderungsanalysen
                  </p>
                </div>
              </div>

              <div>
                <div className="service-card-one bg-competencies bg-competencies--active text-center shadow">
                  <i className="pe-7s-display2 bg-6610f2"></i>
                  <h3>
                    <Link
                      href="/service-details"
                      onClick={(e) => toggleInfo(e, "")}
                    >
                      Projekte
                    </Link>
                  </h3>
                  <p>Wir setzen erfolgreich agile und klassische Projekte um</p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="service-card-one bg-competencies text-center shadow">
                  <i className="pe-7s-graph2 bg-ffb700"></i>
                  <h3>
                    <Link
                      href="/service-details"
                      onClick={(e) => toggleInfo(e, "")}
                    >
                      Transitionen
                    </Link>
                  </h3>
                  <p>Vom Projekt in den Betrieb, damit aus einmal oft wird</p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="service-card-one bg-competencies text-center shadow">
                  <i className="pe-7s-network bg-fc3549"></i>
                  <h3>
                    <Link
                      href="/service-details"
                      onClick={(e) => toggleInfo(e, "")}
                    >
                      Consulting
                    </Link>
                  </h3>
                  <p>
                    Wir beraten unsere Kunden über zukunftssichere Technologien
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="service-card-one bg-competencies text-center shadow">
                  <i className="pe-7s-science bg-00d280"></i>
                  <h3>
                    <Link
                      href="/service-details"
                      onClick={(e) => toggleInfo(e, "")}
                    >
                      Development
                    </Link>
                  </h3>
                  <p>
                    Wir entwickeln zukunftsfähige Lösungen für und mit unseren
                    Kunden
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="service-card-one bg-competencies text-center shadow">
                  <i className="pe-7s-users bg-ff612f"></i>
                  <h3>
                    <Link
                      href="/service-details"
                      onClick={(e) => toggleInfo(e, "")}
                    >
                      Services
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

        <SectionDivider />
      </section>
    </>
  );
};

export default Competencies;
