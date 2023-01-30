import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Partners = () => {
  return (
    <>
      <div className="ptb-100">
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
              <div className="app-partner-item">
                <img src="/images/app/partner1.png" alt="partner" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-partner-item">
                <img src="/images/app/partner2.png" alt="partner" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-partner-item">
                <img src="/images/app/partner3.png" alt="partner" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-partner-item">
                <img src="/images/app/partner4.png" alt="partner" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-partner-item">
                <img src="/images/app/partner5.png" alt="partner" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-partner-item">
                <img src="/images/app/partner6.png" alt="partner" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-partner-item">
                <img src="/images/app/partner7.png" alt="partner" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-partner-item">
                <img src="/images/app/partner8.png" alt="partner" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partners;
