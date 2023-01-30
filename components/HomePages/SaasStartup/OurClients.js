import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const OurClients = () => {
  return (
    <>
      <div className="partner-area bg-dark ptb-100">
        <div className="container">
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
                slidesPerView: 6,
              },
            }}
            modules={[Navigation]}
            className="partner-slides"
          >
            <SwiperSlide>
              <div className="partner-item text-center">
                <img
                  src="/images/business-consulting/partner-white1.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item text-center">
                <img
                  src="/images/business-consulting/partner-white2.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item text-center">
                <img
                  src="/images/business-consulting/partner-white3.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item text-center">
                <img
                  src="/images/business-consulting/partner-white4.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item text-center">
                <img
                  src="/images/business-consulting/partner-white5.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item text-center">
                <img
                  src="/images/business-consulting/partner-white6.png"
                  alt="image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item text-center">
                <img
                  src="/images/business-consulting/partner-white4.png"
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
