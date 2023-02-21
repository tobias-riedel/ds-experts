import Image from "next/image";
import SectionDivider from "./Common/SectionDivider";

const About = () => {
  return (
    <section id="philosophy" className="pt-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 ds-hidden-md ds-pr-20">
            <div className="about-image">
              <Image
                src="/images/about-img6.jpg"
                alt="Philosophie"
                className="rounded-10 shadow optimized-image"
                width={500}
                height={650}
              />
            </div>
          </div>

          <div
            className="col-lg-7"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="section-title">
              <h2>Unternehmensphilosophie</h2>
            </div>

            <div className="about-text">
              <p>
                Wir haben uns als Ziel gesetzt, jeden Mitarbeiter nur
                entsprechend seiner Qualifikation einzusetzen. Wir qualifizieren
                unser Mitarbeiter regelmäßig weiter. Dies bedeutet, dass im
                Rahmen der jährlich stattfindenden Ziel-; Gehalts- und
                Mitarbeitergespräche Weiterbildungsmaßnahmen für das Folgejahr
                definiert werden.
              </p>

              <p>
                Die der ds-experts IT-Consulting GmbH wird Führung nicht als
                Top-Down-Ansatz gelebt, sondern ist durch ein starkes
                Miteinander geprägt. Eine Führungskraft ist in erster Linie
                Diener der Angestellten und nicht umgekehrt.
              </p>

              <p>Denn ein Leitsatz von ds-experts lautet:</p>

              <blockquote
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                Geht es den Angestellten gut, geht es dem Unternehmen gut.
              </blockquote>

              <p>
                Durch den Einsatz geschulter und qualifizierter Mitarbeiter sind
                wir in der Lage, Projekte zur höchsten Zufriedenheit der Kunden
                umzusetzen. Dies zeichnet sich dadurch aus, dass wir mehrfach
                von Kunden wieder reaktiviert wurden und neue Projekte für diese
                umsetzen durften. Unser Ziel ist es, eine 100 % Zufriedenheit
                bei den Kunden zu erreichen.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SectionDivider />
    </section>
  );
};

export default About;
