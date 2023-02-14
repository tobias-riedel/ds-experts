import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const references = [
  {
    img: "/images/works/work1.jpg",
    name: "Panalpina AG (Basel)",
    tasks: ["Erstellung Softwarelösung in Exchange"],
  },
  {
    img: "/images/works/work2.jpg",
    name: "Diehl AirCabin GmbH (Laupheim)",
    tasks: [
      "Projektleitung IT-Rollout",
      "Projektleitung Erstellung Engineering Cloud",
      // "Aufbau Gültigkeitsmanagement in Teamcenter",
    ],
  },
  {
    img: "/images/works/work3.jpg",
    name: "Diehl Aerospace (Frankfurt Main)",
    tasks: ["Update SAP Changemanagement"],
  },
  {
    img: "/images/works/work4.jpg",
    name: "Union Investment (Frankfurt Main)",
    tasks: ["Strategische Beratung IT-Update"],
  },
  {
    img: "/images/works/work5.jpg",
    name: "QSCA AG (Hamburg)",
    tasks: [
      "Transition Management für namhafte Kunden (Spiegel, Otto-Gruppe, ...)",
    ],
  },
  {
    img: "/images/works/work6.jpg",
    name: "QSCA AG (Hamburg)",
    tasks: [
      "Transition Management für namhafte Kunden (Spiegel, Otto-Gruppe, ...)",
    ],
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
          {references.map((ref, idx) => (
            <SwiperSlide key={idx}>
              <div className="work-card shadow">
                <img src={ref.img} alt="image" />

                <div className="content text-center">
                  <span>
                    <Link href="/portfolio">
                      <a>{ref.name}</a>
                    </Link>
                  </span>

                  <ul>
                    {ref.tasks.map((task, taskIdx) => (
                      <li key={taskIdx}>
                        <Link href="/portfolio-details">
                          <a>{task}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurWorks;
