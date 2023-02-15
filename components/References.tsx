import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

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
    img: "/images/references/ref16.jpg",
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
    img: "/images/references/ref9.jpg",
    name: "Toyota Kreditbank",
    location: "Köln",
    tasks: ["Softwareentwicklung BugFixing"],
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
    <section id="references" className="case-studies-area ptb-100">
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
                  <img src={ref.img} alt="image" />

                  <div className="content text-center">
                    <span>
                      <Link href="/">
                        <a>{ref.name}</a>
                      </Link>
                      <br />
                      <Link href="/">
                        <a>({ref.location})</a>
                      </Link>
                    </span>

                    <ul>
                      {ref.tasks.map((task, taskIdx) => (
                        <li key={taskIdx}>
                          <Link href="/">
                            <a>{task}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default OurWorks;
