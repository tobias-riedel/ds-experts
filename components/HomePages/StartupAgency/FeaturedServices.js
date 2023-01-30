import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const FeaturedServices = () => {
  return (
    <>
      <section className="featured-services-area">
        <div className="container">
          <div className="row">
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
                992: {
                  slidesPerView: 3,
                },
              }}
              modules={[Navigation]}
              className="featured-services-slides"
            >
              <SwiperSlide>
                <div className="col-lg-12">
                  <div className="featured-services-box">
                    <div className="icon">
                      <i className="pe-7s-filter"></i>
                    </div>
                    <h3>
                      <Link href="/service-details">
                        <a>Information Architect</a>
                      </Link>
                    </h3>
                    <p>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis.
                    </p>

                    <Link href="/service-details">
                      <a className="read-more-btn">Read More</a>
                    </Link>

                    <div className="back-text">Ia</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-lg-12">
                  <div className="featured-services-box">
                    <div className="icon">
                      <i className="pe-7s-display1"></i>
                    </div>
                    <h3>
                      <Link href="/service-details">
                        <a>Business Analyst</a>
                      </Link>
                    </h3>
                    <p>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis.
                    </p>

                    <Link href="/service-details">
                      <a className="read-more-btn">Read More</a>
                    </Link>

                    <div className="back-text">Ba</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-lg-12">
                  <div className="featured-services-box">
                    <div className="icon">
                      <i className="pe-7s-plugin"></i>
                    </div>
                    <h3>
                      <Link href="/service-details">
                        <a>Interaction Designer</a>
                      </Link>
                    </h3>
                    <p>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis.
                    </p>

                    <Link href="/service-details">
                      <a className="read-more-btn">Read More</a>
                    </Link>

                    <div className="back-text">Id</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-lg-12">
                  <div className="featured-services-box">
                    <div className="icon">
                      <i className="pe-7s-arc"></i>
                    </div>
                    <h3>
                      <Link href="/service-details">
                        <a>Information Architect</a>
                      </Link>
                    </h3>
                    <p>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis.
                    </p>

                    <Link href="/service-details">
                      <a className="read-more-btn">Read More</a>
                    </Link>

                    <div className="back-text">Ia</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-lg-12">
                  <div className="featured-services-box">
                    <div className="icon">
                      <i className="pe-7s-diamond"></i>
                    </div>
                    <h3>
                      <Link href="/service-details">
                        <a>Visual Designer</a>
                      </Link>
                    </h3>
                    <p>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis.
                    </p>

                    <Link href="/service-details">
                      <a className="read-more-btn">Read More</a>
                    </Link>

                    <div className="back-text">Vd</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-lg-12">
                  <div className="featured-services-box">
                    <div className="icon">
                      <i className="pe-7s-helm"></i>
                    </div>
                    <h3>
                      <Link href="/service-details">
                        <a>Content Strategist</a>
                      </Link>
                    </h3>
                    <p>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis.
                    </p>

                    <Link href="/service-details">
                      <a className="read-more-btn">Read More</a>
                    </Link>

                    <div className="back-text">Cr</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-lg-12">
                  <div className="featured-services-box">
                    <div className="icon">
                      <i className="pe-7s-magnet"></i>
                    </div>
                    <h3>
                      <Link href="/service-details">
                        <a>UX Strategist</a>
                      </Link>
                    </h3>
                    <p>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis.
                    </p>

                    <Link href="/service-details">
                      <a className="read-more-btn">Read More</a>
                    </Link>

                    <div className="back-text">Ux</div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedServices;
