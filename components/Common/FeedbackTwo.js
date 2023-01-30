import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const FeedbackTwo = () => {
  return (
    <>
      <div className="quotes-area bg-fcfbfb">
        <div className="container">
          <Swiper
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            modules={[Pagination]}
            className="quotes-slides"
          >
            <SwiperSlide>
              <div className="quotes-content">
                <p>
                  Design is not just what it looks like and feels like. Design
                  is how it works.
                </p>
                <h3>Steve Jobs</h3>
                <span>Co-founder of Apple, Inc.</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="quotes-content">
                <p>
                  Design is not just what it looks like and feels like. Design
                  is how it works.
                </p>
                <h3>Charlie</h3>
                <span>Co-founder of 3S, Inc.</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="quotes-content">
                <p>
                  Design is not just what it looks like and feels like. Design
                  is how it works.
                </p>
                <h3>Amelia</h3>
                <span>Co-founder of Envato, Inc.</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeedbackTwo;
