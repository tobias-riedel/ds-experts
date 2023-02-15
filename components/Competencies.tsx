import Link from "next/link";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
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

      <section id="competencies" className="pt-100 pb-30">
        <div className="container">
          <div className="section-title">
            <h2>Unsere Kompetenzen</h2>
          </div>

          <div className="row justify-content-center competencies">
            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-competencies text-center shadow">
                <i className="pe-7s-rocket bg-13c4a1"></i>
                <h3>
                  <Link href="/">
                    <a onClick={(e) => toggleInfo(e, "")}>Anforderungen</a>
                  </Link>
                </h3>
                <p>
                  Erfolgreiche Projekte unterstützen wir mit
                  Anforderungsanalysen
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-competencies bg-competencies--active text-center shadow">
                <i className="pe-7s-display2 bg-6610f2"></i>
                <h3>
                  <Link href="/service-details">
                    <a onClick={(e) => toggleInfo(e, "")}>Projekte</a>
                  </Link>
                </h3>
                <p>Wir setzen erfolgreich agile und klassische Projekte um</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-competencies text-center shadow">
                <i className="pe-7s-light bg-ffb700"></i>
                <h3>
                  <Link href="/service-details">
                    <a onClick={(e) => toggleInfo(e, "")}>Transitionen</a>
                  </Link>
                </h3>
                <p>Vom Projekt in den Betrieb, damit aus einmal oft wird</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-competencies text-center shadow">
                <i className="pe-7s-phone bg-fc3549"></i>
                <h3>
                  <Link href="/service-details">
                    <a onClick={(e) => toggleInfo(e, "")}>Consulting</a>
                  </Link>
                </h3>
                <p>
                  Wir beraten unsere Kunden über zukunftssichere Technologien
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-competencies text-center shadow">
                <i className="pe-7s-cart bg-00d280"></i>
                <h3>
                  <Link href="/service-details">
                    <a onClick={(e) => toggleInfo(e, "")}>Development</a>
                  </Link>
                </h3>
                <p>
                  Wir entwickeln zukunftsfähige Lösungen für und mit unseren
                  Kunden
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-competencies text-center shadow">
                <i className="pe-7s-users bg-ff612f"></i>
                <h3>
                  <Link href="/service-details">
                    <a onClick={(e) => toggleInfo(e, "")}>Services</a>
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
      </section>
    </>
  );
};

export default Competencies;
