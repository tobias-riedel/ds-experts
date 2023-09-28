import { Project } from '@prisma/client';
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionDivider from '../Common/SectionDivider';
import ProjectCard from './ReferenceCard';

// TODO: Remove
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const referencesStatic: Partial<Project>[] = [
  {
    id: '0',
    img: '/images/references/ref1.jpg',
    projectName: 'Panalpina AG',
    city: 'Basel',
    description: ['Erstellung Softwarelösung in Exchange'].join('- '),
  },
  {
    id: '1',
    img: '/images/references/ref5.jpg',
    projectName: 'Diehl AirCabin GmbH',
    city: 'Laupheim',
    description: [
      'Projektleitung IT-Rollout',
      'Projektleitung Erstellung Engineering Cloud',
      'Aufbau Gültigkeitsmanagement in Teamcenter',
    ].join('- '),
  },
  {
    id: '2',
    img: '/images/references/ref3.jpg',
    projectName: 'Diehl Aerospace',
    city: 'Frankfurt Main',
    description: ['Update SAP Change Management'].join('- '),
  },
  {
    id: '3',
    img: '/images/references/ref15.jpg',
    projectName: 'Union Investment',
    city: 'Frankfurt Main',
    description: ['Strategische Beratung IT-Update'].join('- '),
  },
  {
    id: '4',
    img: '/images/references/ref2.jpg',
    projectName: 'QSCA AG',
    city: 'Hamburg',
    description: ['Transition Management für namhafte Kunden (Spiegel, Otto-Gruppe, ...)'].join('- '),
  },
  {
    id: '5',
    img: '/images/references/ref6.jpg',
    projectName: 'WEH Verbindungstechnik GmbH',
    city: 'Illertissen',
    description: ['Projektleitung Outsourcing', 'Projektleitung Industrie 4.0 Bereich Digitalisierung'].join('- '),
  },
  {
    id: '6',
    img: '/images/references/ref7.jpg',
    projectName: 'Toyota Kreditbank',
    city: 'Köln',
    description: ['Softwareentwicklung Bugfixing'].join('- '),
  },
  {
    id: '7',
    img: '/images/references/ref8.jpg',
    projectName: '1&1 Internet AG',
    city: 'Flensburg',
    description: ['Softwareentwicklung e-Commerce Plattform'].join('- '),
  },
  {
    id: '8',
    img: '/images/references/ref10.jpg',
    projectName: 'DNVGL SE',
    city: 'Hamburg',
    description: ['Softwareentwicklung Modulprogrammierung', 'Kalkulationsplattform'].join('- '),
  },
  {
    id: '9',
    img: '/images/references/ref11.jpg',
    projectName: 'Ingenico',
    city: 'Hamburg',
    description: ['Softwareentwicklung Widgets zur Zahlungsabwicklung'].join('- '),
  },
  {
    id: '10',
    img: '/images/references/ref4.jpg',
    projectName: 'Healex GmbH',
    city: 'Berlin',
    description: ['Softwareentwicklung Corona Tracking App'].join('- '),
  },
  {
    id: '11',
    img: '/images/references/ref13.jpg',
    projectName: 'Hannover RE',
    city: 'Hannover',
    description: ['Softwareentwicklung Migration Tools'].join('- '),
  },
  {
    id: '12',
    img: '/images/references/ref14.jpg',
    projectName: 'Siemens Energy AG ',
    city: 'Berlin',
    description: ['Projektleitung IT-Rollout ', 'Projektleitung Softwareentwicklung'].join('- '),
  },
];

const Projects = ({ data: projects }: { data: Project[] }): JSX.Element => {
  return (
    <section id="references" className="case-studies-area pt-100">
      <div className="container-fluid">
        <div className="section-title">
          <h2>Referenzen</h2>
        </div>

        {projects?.length === 0 ? (
          <h3 className="text-center">Keine Experten eingetragen!</h3>
        ) : (
          <Swiper
            cssMode={true}
            spaceBetween={20}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
              1800: {
                slidesPerView: 5,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className="work-slides"
          >
            {projects?.map((project, idx) => {
              const refProps =
                idx % 2
                  ? {
                      'data-aos': 'fade-up',
                      'data-aos-duration': 1200,
                      'data-aos-delay': 100,
                    }
                  : {};
              return (
                <SwiperSlide key={project.id}>
                  <div className="work-card shadow" {...refProps}>
                    <ProjectCard data={project} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>

      <SectionDivider />
    </section>
  );
};

export default Projects;
