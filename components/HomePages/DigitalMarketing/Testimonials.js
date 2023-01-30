import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Testimonials = () => {
  return (
    <>
      <div className="marketing-testimonials-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">TESTIMONIALS</span>
            <h2>What Our Customers Say</h2>
          </div>

          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="marketing-testimonials-slides"
          >
            <SwiperSlide>
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="marketing-testimonials-image">
                    <img
                      src="/images/digital-marketing/testimonials-img1.jpg"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="marketing-testimonials-content">
                    <i className="icon fa-solid fa-quote-left"></i>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus com
                      modo viverra maecenas accumsan lacus vel facilisis.”
                    </p>
                    <div className="rating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="info">
                      <h3>Sarah Taylor</h3>
                      <span>Director</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="marketing-testimonials-image">
                    <img
                      src="/images/digital-marketing/testimonials-img2.jpg"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="marketing-testimonials-content">
                    <i className="icon fa-solid fa-quote-left"></i>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus com
                      modo viverra maecenas accumsan lacus vel facilisis.”
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
                      <span>CEO & Founder</span>
                    </div>
                  </div>
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
