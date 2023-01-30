import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const AppScreenshots = () => {
  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="app-sub-title">APP SCREENS</span>
            <h2>Beautifully Crafted All App Screenshots</h2>
          </div>

          <Swiper
            navigation={true}
            spaceBetween={30}
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
              992: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            modules={[Navigation]}
            className="app-screenshots-slides"
          >
            <SwiperSlide>
              <div className="app-screenshot-item">
                <img src="/images/app/screenshots1.png" alt="screenshots" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-screenshot-item">
                <img src="/images/app/screenshots2.png" alt="screenshots" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-screenshot-item">
                <img src="/images/app/screenshots3.png" alt="screenshots" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-screenshot-item">
                <img src="/images/app/screenshots4.png" alt="screenshots" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-screenshot-item">
                <img src="/images/app/screenshots5.png" alt="screenshots" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-screenshot-item">
                <img src="/images/app/screenshots4.png" alt="screenshots" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default AppScreenshots;
