import Image from 'next/image';
import mobileImg from '../public/images/man-with-mobile.png';
import circleImg from '../public/images/circle.png';
import SectionDivider from './Common/SectionDivider';

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
            <div className="single-work-process">
              <div className="icon">
                <i className="pe-7s-display1"></i>
              </div>
              <h3>Know-How</h3>
            </div>

            <div className="single-work-process">
              <div className="icon">
                <i className="pe-7s-display2"></i>
              </div>
              <h3>Resilienz</h3>
            </div>

            <div className="single-work-process">
              <div className="icon">
                <i className="pe-7s-study"></i>
              </div>
              <h3>Ausbildung</h3>
            </div>

            <div className="single-work-process">
              <div className="icon">
                <i className="pe-7s-id"></i>
              </div>
              <h3>Professionalität</h3>
            </div>

            <div className="single-work-process">
              <div className="icon">
                <i className="pe-7s-diamond"></i>
              </div>
              <h3>Entschlossenheit</h3>
            </div>

            <div className="single-work-process">
              <div className="icon">
                <i className="pe-7s-gift"></i>
              </div>
              <h3>Qualität</h3>
            </div>
          </div>

          <Image
            src={circleImg}
            alt="Rotierender Smartphone-Hintergrund"
            className="rotateme circle-image optimized-image"
            sizes="100vw"
          />
        </div>
      </div>

      <SectionDivider />
    </section>
  );
};

export default WorkProcess;
