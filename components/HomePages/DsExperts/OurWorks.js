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
      // "AufbauGültigkeitsmanagement in Teamcenter",
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
    <>
      <section className="case-studies-area ptb-100">
        <div className="container-fluid">
          <div className="section-title">
            <h2>Referenzen</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
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
            {/* <SwiperSlide>
              <div className="work-card">
                <img src="/images/works/work1.jpg" alt="image" />

                <div className="content text-center">
                  <span>
                    <Link href="/portfolio">
                      <a>Panalpina AG (Basel)</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>Erstellung Softwarelösung in Exchange</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide> */}
            {references.map((ref, idx) => (
              <SwiperSlide key={idx}>
                <div className="work-card">
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

            {/* <SwiperSlide>
              <div className="work-card">
                <img src="/images/works/work1.jpg" alt="image" />

                <div className="content text-center">
                  <span>
                    <Link href="/portfolio">
                      <a>Panalpina AG (Basel)</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>Erstellung Softwarelösung in Exchange</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="work-card">
                <img src="/images/works/work2.jpg" alt="image" />
                <div className="content text-center">
                  <span>
                    <Link href="/portfolio">
                      <a>Web Design</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>Building design process within teams</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="work-card">
                <img src="/images/works/work3.jpg" alt="image" />

                <div className="content text-center">
                  <span>
                    <Link href="/portfolio">
                      <a>eCommerce</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>How intercom brings play eCommerce</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="work-card">
                <img src="/images/works/work4.jpg" alt="image" />

                <div className="content text-center">
                  <span>
                    <Link href="/portfolio">
                      <a>Reactjs</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>How to start a project with Reactjs</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="work-card">
                <img src="/images/works/work5.jpg" alt="image" />

                <div className="content text-center">
                  <span>
                    <Link href="/portfolio">
                      <a>Angular js</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>Examples of different types of sprints</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="work-card">
                <img src="/images/works/work6.jpg" alt="image" />

                <div className="content text-center">
                  <span>
                    <Link href="/portfolio">
                      <a>UI/UX Design</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>Redesigning the New York times app</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="work-card">
                <img src="/images/works/work7.jpg" alt="image" />

                <div className="content text-center">
                  <span>
                    <Link href="/portfolio">
                      <a>Graphic Design</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>Design the Web, Mobile, and eCommerce</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="work-card">
                <img src="/images/works/work8.jpg" alt="image" />

                <div className="content text-center">
                  <span>
                    <Link href="/portfolio">
                      <a>Bootstrap</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>Redesigning the New York times app</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default OurWorks;
