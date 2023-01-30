import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const OurClients = () => {
  return (
    <>
      <div className="cs-partner-area pt-100 pb-70">
        <div className="container-fluid">
          <div className="section-title white-color">
            <span className="sub-title">OUR CLIENTS</span>
            <h2>
              Taiker Has Been Trusted <span>Over 2300+</span> Companies In The
              World
            </h2>
          </div>

          <Swiper
            navigation={true}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 7,
              },
              1200: {
                slidesPerView: 8,
              },
            }}
            modules={[Navigation]}
            className="cs-partner-slides"
          >
            <SwiperSlide>
              <div className="cs-partner-item text-center">
                <img
                  src="/images/cyber-security/partner/partner-1.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs-partner-item text-center">
                <img
                  src="/images/cyber-security/partner/partner-2.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs-partner-item text-center">
                <img
                  src="/images/cyber-security/partner/partner-3.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs-partner-item text-center">
                <img
                  src="/images/cyber-security/partner/partner-4.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs-partner-item text-center">
                <img
                  src="/images/cyber-security/partner/partner-5.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs-partner-item text-center">
                <img
                  src="/images/cyber-security/partner/partner-6.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs-partner-item text-center">
                <img
                  src="/images/cyber-security/partner/partner-7.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs-partner-item text-center">
                <img
                  src="/images/cyber-security/partner/partner-8.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs-partner-item text-center">
                <img
                  src="/images/cyber-security/partner/partner-6.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OurClients;
