import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Feedbacks = () => {
  return (
    <>
      <div className="cs-feedback-area pb-100">
        <div className="container">
          <div className="section-title white-color">
            <span className="sub-title">THOUGHTS OF OUR CLIENT</span>
            <h2>
              These People Have <span>Already</span> Experienced Our Review
            </h2>
          </div>

          <Swiper
            pagination={{
              clickable: true,
            }}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination]}
            className="cs-feedback-slides"
          >
            <SwiperSlide>
              <div className="cs-single-feedback with-black-color">
                <ul className="rating">
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                </ul>
                <p>
                  “We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication. No fake products and services.”
                </p>
                <div className="client-info">
                  <img src="/images/cyber-security/user1.jpg" alt="image" />

                  <h3>Jason Roy</h3>
                  <span>Manager</span>
                </div>
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs-single-feedback with-black-color">
                <ul className="rating">
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                </ul>
                <p>
                  “We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication. No fake products and services.”
                </p>
                <div className="client-info">
                  <img src="/images/cyber-security/user2.jpg" alt="image" />

                  <h3>James Anderson</h3>
                  <span>Web Developer</span>
                </div>
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs-single-feedback with-black-color">
                <ul className="rating">
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                </ul>
                <p>
                  “We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication. No fake products and services.”
                </p>
                <div className="client-info">
                  <img src="/images/cyber-security/user3.jpg" alt="image" />

                  <h3>Jason Roy</h3>
                  <span>Manager</span>
                </div>
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs-single-feedback with-black-color">
                <ul className="rating">
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                </ul>
                <p>
                  “We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication. No fake products and services.”
                </p>
                <div className="client-info">
                  <img src="/images/cyber-security/user1.jpg" alt="image" />

                  <h3>James Anderson</h3>
                  <span>Web Developer</span>
                </div>
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs-single-feedback with-black-color">
                <ul className="rating">
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                </ul>
                <p>
                  “We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication. No fake products and services.”
                </p>
                <div className="client-info">
                  <img src="/images/cyber-security/user2.jpg" alt="image" />

                  <h3>Jason Roy</h3>
                  <span>Manager</span>
                </div>
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs-single-feedback with-black-color">
                <ul className="rating">
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                  </li>
                </ul>
                <p>
                  “We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication. No fake products and services.”
                </p>
                <div className="client-info">
                  <img src="/images/cyber-security/user3.jpg" alt="image" />

                  <h3>James Anderson</h3>
                  <span>Web Developer</span>
                </div>
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="cs-feedback-line-bg">
          <img src="/images/cyber-security/line-bg.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Feedbacks;
