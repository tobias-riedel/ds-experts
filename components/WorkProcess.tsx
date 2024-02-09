import Image from 'next/image';
import mobileImg from '../public/images/man-with-mobile.png';
import circleImg from '../public/images/circle.png';
import SectionDivider from './Common/SectionDivider';

const data = [
  {
    iconName: 'pe-7s-display1',
    title: 'Know-How',
    text: 'Kenntnisse, Erfahrungen, Wettbewerbsvorteil und umfangreiches Fachwissen',
  },
  {
    iconName: 'pe-7s-display2',
    title: 'Resilienz',
    text: 'Widerstandsfähig, Lösungsorientiert, Akzeptanz und Optimismus',
  },
  {
    iconName: 'pe-7s-study',
    title: 'Fortbildung',
    text: 'Lehrgänge, Meisterkurse und gefestigte Qualifikation',
  },
  {
    iconName: 'pe-7s-id',
    title: 'Professionalität',
    text: 'hochwertige Arbeitsleistung, gekonntes Verhalten und souveränes Handeln',
  },
  {
    iconName: 'pe-7s-diamond',
    title: 'Entschlossenheit',
    text: 'fester Wille oder Willenskraft, Antrieb, definierte Ziele und Ergebnisorientiert',
  },
  {
    iconName: 'pe-7s-gift',
    title: 'Qualität',
    text: 'unser Merkmal, Güte unserer Eigenschaft und zufriedenstellende Ausführungen',
  },
];

const WorkProcess = () => {
  return (
    <section className="pt-100">
      <div className="container work-process-area">
        <div className="section-title">
          <h2>Unser Erfolg kommt von...</h2>
        </div>

        <div className="work-process">
          <Image
            src={mobileImg}
            alt="Smartphone"
            style={{ height: 'auto' }}
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="200"
          />

          <div className="work-process-list">
            {data.map((value, idx) => (
              <div className="single-work-process" key={idx}>
                <div className="icon">
                  <i className={value.iconName}></i>
                </div>
                <h3>{value.title}</h3>
                <span>{value.text}</span>
              </div>
            ))}
          </div>

          <Image
            src={circleImg}
            alt="Rotierender Smartphone-Hintergrund"
            className="rotateme circle-image optimized-image"
            sizes="100vw"
            style={{ maxWidth: '905px', maxHeight: '908px' }}
          />
        </div>
      </div>

      <SectionDivider />
    </section>
  );
};

export default WorkProcess;
