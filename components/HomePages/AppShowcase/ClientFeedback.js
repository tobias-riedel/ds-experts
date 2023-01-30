import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const ClientFeedback = () => {
  return (
    <>
      <div className="pb-100">
        <div className="container">
          <div className="section-title">
            <span className="app-sub-title">CLIENT REVIEWS</span>
            <h2>Some of Our Happy Customer Reviews About Our Products</h2>
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
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            className="app-screenshots-slides"
          >
            <SwiperSlide>
              <div className="app-feedback-box">
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src="/images/app/user1.jpg" alt="user" />
                    <div className="title">
                      <h3>Deanna Hodges</h3>
                      <span>Spotify Developer</span>
                    </div>
                  </div>
                </div>
                <p>
                  "Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type."
                </p>
                <div className="rating d-flex align-items-center justify-content-between">
                  <h5>Theme Customization</h5>
                  <div>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-feedback-box">
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src="/images/app/user2.jpg" alt="user" />
                    <div className="title">
                      <h3>Londynn Vargas</h3>
                      <span>PHP Developer</span>
                    </div>
                  </div>
                </div>
                <p>
                  "Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type."
                </p>
                <div className="rating d-flex align-items-center justify-content-between">
                  <h5>Customer Support</h5>
                  <div>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-feedback-box">
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src="/images/app/user3.jpg" alt="user" />
                    <div className="title">
                      <h3>James Andy</h3>
                      <span>Moodle Developer</span>
                    </div>
                  </div>
                </div>
                <p>
                  "Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type."
                </p>
                <div className="rating d-flex align-items-center justify-content-between">
                  <h5>Responsive Design</h5>
                  <div>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-feedback-box">
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src="/images/app/user4.jpg" alt="user" />
                    <div className="title">
                      <h3>David Warner</h3>
                      <span>Python Developer</span>
                    </div>
                  </div>
                </div>
                <p>
                  "Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type."
                </p>
                <div className="rating d-flex align-items-center justify-content-between">
                  <h5>Design Quality</h5>
                  <div>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
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

export default ClientFeedback;
