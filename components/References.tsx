import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionDivider from './Common/SectionDivider';

const DEFAULT_REFERENCE_IMG = '/images/references/ref1.jpg';

export interface Reference {
  id: string;
  img?: string;
  projectName: string;
  partnerName?: string;
  city: string;
  description?: string;
  tasks?: string[];
  orderId?: number;
  startedAt?: string;
  endedAt?: string;
  isPublic?: boolean;
}

const referencesStatic: Reference[] = [
  {
    id: '0',
    img: '/images/references/ref1.jpg',
    projectName: 'Panalpina AG',
    city: 'Basel',
    tasks: ['Erstellung Softwarelösung in Exchange'],
  },
  {
    id: '1',
    img: '/images/references/ref5.jpg',
    projectName: 'Diehl AirCabin GmbH',
    city: 'Laupheim',
    tasks: [
      'Projektleitung IT-Rollout',
      'Projektleitung Erstellung Engineering Cloud',
      'Aufbau Gültigkeitsmanagement in Teamcenter',
    ],
  },
  {
    id: '2',
    img: '/images/references/ref3.jpg',
    projectName: 'Diehl Aerospace',
    city: 'Frankfurt Main',
    tasks: ['Update SAP Change Management'],
  },
  {
    id: '3',
    img: '/images/references/ref15.jpg',
    projectName: 'Union Investment',
    city: 'Frankfurt Main',
    tasks: ['Strategische Beratung IT-Update'],
  },
  {
    id: '4',
    img: '/images/references/ref2.jpg',
    projectName: 'QSCA AG',
    city: 'Hamburg',
    tasks: ['Transition Management für namhafte Kunden (Spiegel, Otto-Gruppe, ...)'],
  },
  {
    id: '5',
    img: '/images/references/ref6.jpg',
    projectName: 'WEH Verbindungstechnik GmbH',
    city: 'Illertissen',
    tasks: ['Projektleitung Outsourcing', 'Projektleitung Industrie 4.0 Bereich Digitalisierung'],
  },
  {
    id: '6',
    img: '/images/references/ref7.jpg',
    projectName: 'Toyota Kreditbank',
    city: 'Köln',
    tasks: ['Softwareentwicklung Bugfixing'],
  },
  {
    id: '7',
    img: '/images/references/ref8.jpg',
    projectName: '1&1 Internet AG',
    city: 'Flensburg',
    tasks: ['Softwareentwicklung e-Commerce Plattform'],
  },
  {
    id: '8',
    img: '/images/references/ref10.jpg',
    projectName: 'DNVGL SE',
    city: 'Hamburg',
    tasks: ['Softwareentwicklung Modulprogrammierung', 'Kalkulationsplattform'],
  },
  {
    id: '9',
    img: '/images/references/ref11.jpg',
    projectName: 'Ingenico',
    city: 'Hamburg',
    tasks: ['Softwareentwicklung Widgets zur Zahlungsabwicklung'],
  },
  {
    id: '10',
    img: '/images/references/ref4.jpg',
    projectName: 'Healex GmbH',
    city: 'Berlin',
    tasks: ['Softwareentwicklung Corona Tracking App'],
  },
  {
    id: '11',
    img: '/images/references/ref13.jpg',
    projectName: 'Hannover RE',
    city: 'Hannover',
    tasks: ['Softwareentwicklung Migration Tools'],
  },
  {
    id: '12',
    img: '/images/references/ref14.jpg',
    projectName: 'Siemens Energy AG ',
    city: 'Berlin',
    tasks: ['Projektleitung IT-Rollout ', 'Projektleitung Softwareentwicklung'],
  },
];

const Projects = ({ references }: { references: Reference[] }) => {
  return (
    <section id="references" className="case-studies-area pt-100">
      <div className="container-fluid">
        <div className="section-title">
          <h2>Referenzen</h2>
        </div>

        {references?.length === 0 && <h3 className="text-center">Keine Projekte gefunden!</h3>}

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
          {references?.map((ref, idx) => {
            const refProps =
              idx % 2
                ? {
                    'data-aos': 'fade-up',
                    'data-aos-duration': 1200,
                    'data-aos-delay': 100,
                  }
                : {};
            return (
              <SwiperSlide key={ref.id}>
                <div className="work-card shadow" {...refProps}>
                  <Image
                    src={ref.img ?? DEFAULT_REFERENCE_IMG}
                    alt={`Referenzbild zu ${ref.projectName}`}
                    width={510}
                    height={700}
                    sizes="(max-width: 576px) 95vw, (max-width: 768px) 45vw, (max-width: 992px) 30vw, (max-width: 1200px) 24vw, 20vw"
                    className="optimized-image"
                  />

                  <div className="content text-center">
                    <span>
                      <div>
                        <Link href="/">{ref.projectName}</Link>
                      </div>
                      <div>
                        <Link href="/" className="ref-location">
                          ({ref.city})
                        </Link>
                      </div>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <SectionDivider />
    </section>
  );
};

export default Projects;
