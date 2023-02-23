import Image from "next/image";
import Link from "next/link";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionDivider from "./Common/SectionDivider";

interface References {
  img: string;
  name: string;
  location: string;
  tasks: string[];
}

const references: References[] = [
  {
    img: "/images/references/ref1.jpg",
    name: "Panalpina AG",
    location: "Basel",
    tasks: ["Erstellung Softwarelösung in Exchange"],
  },
  {
    img: "/images/references/ref5.jpg",
    name: "Diehl AirCabin GmbH",
    location: "Laupheim",
    tasks: [
      "Projektleitung IT-Rollout",
      "Projektleitung Erstellung Engineering Cloud",
      "Aufbau Gültigkeitsmanagement in Teamcenter",
    ],
  },
  {
    img: "/images/references/ref3.jpg",
    name: "Diehl Aerospace",
    location: "Frankfurt Main",
    tasks: ["Update SAP Changemanagement"],
  },
  {
    img: "/images/references/ref15.jpg",
    name: "Union Investment",
    location: "Frankfurt Main",
    tasks: ["Strategische Beratung IT-Update"],
  },
  {
    img: "/images/references/ref2.jpg",
    name: "QSCA AG",
    location: "Hamburg",
    tasks: [
      "Transition Management für namhafte Kunden (Spiegel, Otto-Gruppe, ...)",
    ],
  },
  {
    img: "/images/references/ref6.jpg",
    name: "WEH Verbindungstechnik GmbH",
    location: "Illertissen",
    tasks: [
      "Projektleitung Outsourcing",
      "Projektleitung Industrie 4.0 Bereich Digitalisierung",
    ],
  },
  {
    img: "/images/references/ref7.jpg",
    name: "Toyota Kreditbank",
    location: "Köln",
    tasks: ["Softwareentwicklung Bugfixing"],
  },
  {
    img: "/images/references/ref8.jpg",
    name: "1&1 Internet AG",
    location: "Flensburg",
    tasks: ["Softwareentwicklung e-Commerce Plattform"],
  },
  {
    img: "/images/references/ref10.jpg",
    name: "DNVGL SE",
    location: "Hamburg",
    tasks: ["Softwareentwicklung Modulprogrammierung", "Kalkulationsplattform"],
  },
  {
    img: "/images/references/ref11.jpg",
    name: "Ingenico",
    location: "Hamburg",
    tasks: ["Softwareentwicklung Widgets zur Zahlungsabwicklung"],
  },
  {
    img: "/images/references/ref4.jpg",
    name: "Healex GmbH",
    location: "Berlin",
    tasks: ["Softwareentwicklung Corona Tracking App"],
  },
  {
    img: "/images/references/ref13.jpg",
    name: "Hannover RE",
    location: "Hannover",
    tasks: ["Softwareentwicklung Migration Tools"],
  },
  {
    img: "/images/references/ref14.jpg",
    name: "Siemens Energy AG ",
    location: "Berlin",
    tasks: ["Projektleitung IT-Rollout ", "Projektleitung Softwareentwicklung"],
  },
];

const OurWorks = () => {
  return (
    <section id="references" className="case-studies-area pt-100">
      <div className="container-fluid">
        <div className="section-title">
          <h2>Referenzen</h2>
        </div>

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
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="work-slides"
        >
          {references.map((ref, idx) => {
            const refProps =
              idx % 2
                ? {
                    "data-aos": "fade-up",
                    "data-aos-duration": 1200,
                    "data-aos-delay": 100,
                  }
                : {};
            return (
              <SwiperSlide key={idx}>
                <div className="work-card shadow" {...refProps}>
                  <Image
                    src={ref.img}
                    alt={`Referenzbild zu ${ref.name}`}
                    width={510}
                    height={700}
                    sizes="(max-width: 1199px) 24vw, (max-width: 991px) 30vw, (max-width: 767px) 45vw, (max-width: 575px) 95vw, 20vw"
                    className="optimized-image"
                  />

                  <div className="content text-center">
                    <span>
                      <div>
                        <Link href="/">{ref.name}</Link>
                      </div>
                      <div>
                        <Link href="/">
                          <small>({ref.location})</small>
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

export default OurWorks;
