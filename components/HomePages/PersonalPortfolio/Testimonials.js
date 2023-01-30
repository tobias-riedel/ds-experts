import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Testimonials = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title style-two">
            <h2>Testimonials</h2>
          </div>

          <Swiper
            navigation={true}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              }
            }}
            modules={[Navigation]}
            className="pp-testimonials-slides"
          >
            <SwiperSlide>
              <div className="pp-testimonials-box">
                <i className="icon fa-solid fa-quote-left"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur apiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus com modo
                  viverra accumsan lacus vel facilisis.”
                </p>
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="info">
                  <h3>Richard Turner</h3>
                  <span>Director</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="pp-testimonials-box bg-ca83ff">
                <i className="icon fa-solid fa-quote-left"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur apiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus com modo
                  viverra accumsan lacus vel facilisis.”
                </p>
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="info">
                  <h3>Mary K. Austin</h3>
                  <span>Law Consultant</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="pp-testimonials-box bg-ff9f07">
                <i className="icon fa-solid fa-quote-left"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur apiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus com modo
                  viverra accumsan lacus vel facilisis.”
                </p>
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="info">
                  <h3>Christopher Lindsey</h3>
                  <span>Finance Consultant</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="pp-testimonials-box bg-ca83ff">
                <i className="icon fa-solid fa-quote-left"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur apiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus com modo
                  viverra accumsan lacus vel facilisis.”
                </p>
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="info">
                  <h3>Johnson</h3>
                  <span>React Developer</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
