import Image from 'next/image';
import mobileImg from '../public/images/man-with-mobile.png';
import circleImg from '../public/images/circle.png';
import SectionDivider from './Common/SectionDivider';

const data = [
  {
    iconName: 'pe-7s-display1',
    title: 'Know-How',
    text: 'Kenntnis, Erfahrung & Fachwissen',
  },
  {
    iconName: 'pe-7s-display2',
    title: 'Resilienz',
    text: 'Widerstandsfähigkeit, Lösungsorientierung & Optimismus',
  },
  {
    iconName: 'pe-7s-study',
    title: 'Fortbildung',
    text: 'Lehrgänge, Meisterkurse & Qualifikation',
  },
  {
    iconName: 'pe-7s-id',
    title: 'Professionalität',
    text: 'Arbeitsleistung, Integrität & Souveränität',
  },
  {
    iconName: 'pe-7s-diamond',
    title: 'Entschlossenheit',
    text: 'Willenskraft, Antrieb & Ergebnisorientierung',
  },
  {
    iconName: 'pe-7s-gift',
    title: 'Qualität',
    text: 'Kapazität, Variaton & Exzellenz',
  },
];

const WorkProcess = () => {
  return (
    <section className="pt-100">
      <div className="container work-process-area">
        <div className="section-title">
          <h2>Unser Erfolg kommt durch ...</h2>
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
