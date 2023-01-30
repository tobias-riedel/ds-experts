import React, { Component } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const BestServices = () => {
  return (
    <>
      <section className="services-area">
        <div className="container-fluid">
          <div className="row m-0">
            <div className="col-lg-5 p-0">
              <div className="services-inner">
                <div className="services-section-title">
                  <h2>Offering The Best of Services</h2>
                  <div className="bar"></div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>

                  <img src="/images/women-with-table.png" alt="Women" />
                </div>
              </div>
            </div>

            <div className="col-lg-7 p-0">
              <div className="services-list">
                <Swiper
                  spaceBetween={30}
                  navigation={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    600: {
                      slidesPerView: 2,
                    },
                    1400: {
                      slidesPerView: 3,
                    },
                  }}
                  modules={[Navigation]}
                  className="services-slides"
                >
                  <SwiperSlide>
                    <div className="single-services">
                      <img
                        src="/images/services/service1.jpg"
                        alt="image"
                        className="w-100"
                      />

                      <div className="content">
                        <div className="icon">
                          <i className="pe-7s-magnet"></i>
                        </div>

                        <h3>UX Design</h3>
                        <p>
                          Quis ipsum suspendisse ultrices gravida. Risus commodo
                          viverra maecenas accumsan lacus vel facilisis.
                        </p>

                        <Link href="/service-details">
                          <a className="read-more-btn">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="single-services">
                      <img
                        src="/images/services/service2.jpg"
                        alt="image"
                        className="w-100"
                      />

                      <div className="content">
                        <div className="icon">
                          <i className="pe-7s-vector"></i>
                        </div>

                        <h3>UI Design</h3>
                        <p>
                          Quis ipsum suspendisse ultrices gravida. Risus commodo
                          viverra maecenas accumsan lacus vel facilisis.
                        </p>

                        <Link href="/service-details">
                          <a className="read-more-btn">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="single-services">
                      <img
                        src="/images/services/service3.jpg"
                        alt="image"
                        className="w-100"
                      />

                      <div className="content">
                        <div className="icon">
                          <i className="pe-7s-scissors"></i>
                        </div>

                        <h3>Digital Product Design</h3>
                        <p>
                          Quis ipsum suspendisse ultrices gravida. Risus commodo
                          viverra maecenas accumsan lacus vel facilisis.
                        </p>

                        <Link href="/service-details">
                          <a className="read-more-btn">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="single-services">
                      <img
                        src="/images/services/service1.jpg"
                        alt="image"
                        className="w-100"
                      />

                      <div className="content">
                        <div className="icon">
                          <i className="pe-7s-scissors"></i>
                        </div>

                        <h3>Digital Product Design</h3>
                        <p>
                          Quis ipsum suspendisse ultrices gravida. Risus commodo
                          viverra maecenas accumsan lacus vel facilisis.
                        </p>

                        <Link href="/service-details">
                          <a className="read-more-btn">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestServices;
