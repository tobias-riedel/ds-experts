import Link from 'next/link';
import SectionDivider from './Common/SectionDivider';

interface Competence {
  name: string;
  description: string;
  icon: string;
  link: string;
  className?: string;
}

const competencies: Competence[] = [
  {
    name: 'Anforderungen',
    description: 'Erfolgreiche Projekte unterstützen wir mit Anforderungsanalysen',
    icon: 'pe-7s-note2 bg-13c4a1',
    link: '/',
  },
  {
    name: 'Projekte',
    description: 'Wir setzen erfolgreich agile und klassische Projekte um',
    icon: 'pe-7s-display2 bg-6610f2',
    link: '/',
    className: 'bg-competencies--active',
  },
  {
    name: 'Transitionen',
    description: 'Vom Projekt in den Betrieb, damit aus einmal oft wird',
    icon: 'pe-7s-graph2 bg-ffb700',
    link: '/',
  },
  {
    name: 'Consulting',
    description: 'Wir beraten unsere Kunden über zukunftssichere Technologien',
    icon: 'pe-7s-network bg-fc3549',
    link: '/',
  },
  {
    name: 'Development',
    description: 'Wir entwickeln zukunftsfähige Lösungen für und mit unseren Kunden',
    icon: 'pe-7s-science bg-00d280',
    link: '/',
  },
  {
    name: 'Services',
    description: 'Wir unterstützen unsere Kunden beim Betrieb von neuen Technologien',
    icon: 'pe-7s-users bg-ff612f',
    link: '/',
  },
];

const Competencies = () => {
  return (
    <>
      <section id="competencies" className="pt-100">
        <div className="container">
          <div className="section-title">
            <h2>Unsere Kompetenzen</h2>
          </div>

          <div className="d-flex justify-content-center">
            <div className="row competencies">
              {competencies.map((competence, idx) => (
                <div key={idx} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                  <div className={`service-card-one bg-competencies text-center shadow ${competence.className}`}>
                    <i className={competence.icon}></i>
                    <h3>
                      <Link href={competence.link}>{competence.name}</Link>
                    </h3>
                    <p>{competence.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SectionDivider />
      </section>
    </>
  );
};

export default Competencies;
