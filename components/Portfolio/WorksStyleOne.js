import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const WorksStyleOne = () => {
  return (
    <>
      <div className="case-studies-area ptb-100">
        <div className="container-fluid">
          <div className="section-title">
            <h2>Our Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
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
            <SwiperSlide>
              <div className="work-card">
                <img src="/images/works/work1.jpg" alt="image" />

                <div className="content text-center">
                  <span>
                    <Link href="/portfolio">
                      <a>Development</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>Designing a better cinema experience</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="custom-btn">Read More</a>
                  </Link>
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

                  <Link href="/portfolio-details">
                    <a className="custom-btn">Read More</a>
                  </Link>
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

                  <Link href="/portfolio-details">
                    <a className="custom-btn">Read More</a>
                  </Link>
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

                  <Link href="/portfolio-details">
                    <a className="custom-btn">Read More</a>
                  </Link>
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

                  <Link href="/portfolio-details">
                    <a className="custom-btn">Read More</a>
                  </Link>
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

                  <Link href="/portfolio-details">
                    <a className="custom-btn">Read More</a>
                  </Link>
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

                  <Link href="/portfolio-details">
                    <a className="custom-btn">Read More</a>
                  </Link>
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

                  <Link href="/portfolio-details">
                    <a className="custom-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default WorksStyleOne;
