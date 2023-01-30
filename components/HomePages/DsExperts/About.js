import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <h2>Was ist ds-experts?</h2>
                  <p>
                    Die ds-experts IT-Consulting GmbH unterstützt seit 2015
                    große und sehr große Unternehmen auf dem deutschen Markt bei
                    der erfolgreichen Umsetzung von IT-Projekten in Form von
                    Projekt- oder Beratungsleistungen.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Was ist unser Rohstoff?</h4>
                  <p>
                    Unsere Experten haben den besten Rohstoff, den man sich
                    vorstellen kann:
                  </p>

                  <p className="resource">Know-How</p>

                  <p>
                    Unser Know-How bringen wir erfolgreich bei unseren Kunden
                    ein, damit Projekte erfolgreich umgesetzt werden können.
                    Unsere sehr hohe Weiterbildungsquote sorgt dafür, dass
                    dieses Wissen nie versiegt.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Struktur</h4>
                  <p>
                    Die ds-experts IT-Consulting GmbH zeichnet eine schlanke
                    Struktur aus.
                  </p>

                  <p>Schlank bedeutet für uns… </p>

                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      …, dass Entscheidungsprozesse und ihre Umsetzung abhängig
                      von der Komplexität zeitnah, idealerweise innerhalb von
                      Stunden, durchgeführt werden.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      …, dass Hierarchien auf das nötigste reduziert wurden.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      …, dass ein kollegialer Umgang niemanden allein lässt. Wir
                      helfen uns gegenseitig!
                    </li>
                  </ul>
                </div>

                {/* <div className="pb-100"> */}
                <div className="">
                  {/* TODO: Adjust link to  */}
                  <Link href="/guidelines">
                    <a className="btn btn-primary">
                      Erfahre mehr über unsere Leitlinien
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5 ds-hidden-md">
              <div className="about-image">
                <img
                  src="/images/about-img5.jpg"
                  alt="image"
                  className="rounded-10"
                />
                {/* <img
                  src="/images/services/it-service1.png"
                  alt="image"
                  className="rounded-10"
                /> */}
                {/* <img
                  src="/images/services/it-service3.png"
                  alt="image"
                  className="rounded-10"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
