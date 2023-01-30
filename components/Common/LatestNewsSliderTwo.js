import React, { Component } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

class LatestNewsSliderTwo extends Component {
  render() {
    return (
      <>
        <div className="blog-area ptb-100">
          <div className="container">
            <div className="section-title">
              <h2>Latest News</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
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
                992: {
                  slidesPerView: 3,
                },
              }}
              modules={[Pagination]}
              className="blog-slides"
            >
              <SwiperSlide>
                <div className="single-blog-item">
                  <div className="blog-image">
                    <Link href="/blog-details">
                      <a>
                        <img src="/images/blog/blog7.jpg" alt="image" />
                      </a>
                    </Link>

                    <div className="post-tag">
                      <Link href="/blog">
                        <a>Technology</a>
                      </Link>
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <span className="date">Feb 15, 2022</span>
                    <h3>
                      <Link href="/blog-details">
                        <a>The Most Popular New top Business Apps</a>
                      </Link>
                    </h3>

                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium.
                    </p>

                    <Link href="/blog-details">
                      <a className="read-more-btn">
                        Read More
                        <i className="fa-solid fa-angles-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-blog-item">
                  <div className="blog-image">
                    <Link href="/blog-details">
                      <a>
                        <img src="/images/blog/blog8.jpg" alt="image" />
                      </a>
                    </Link>

                    <div className="post-tag">
                      <Link href="/blog">
                        <a>Agency</a>
                      </Link>
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <span className="date">Feb 16, 2022</span>

                    <h3>
                      <Link href="/blog-details">
                        <a>The Best Marketing top use Management Tools</a>
                      </Link>
                    </h3>

                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium.
                    </p>

                    <Link href="/blog-details">
                      <a className="read-more-btn">
                        Read More
                        <i className="fa-solid fa-angles-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-blog-item">
                  <div className="blog-image">
                    <Link href="/blog-details">
                      <a>
                        <img src="/images/blog/blog9.jpg" alt="image" />
                      </a>
                    </Link>

                    <div className="post-tag">
                      <Link href="/blog">
                        <a>IT Agency</a>
                      </Link>
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <span className="date">Feb 17, 2022</span>

                    <h3>
                      <Link href="/blog-details">
                        <a>3 WooCommerce Plugins to Boost Sales</a>
                      </Link>
                    </h3>

                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium.
                    </p>

                    <Link href="/blog-details">
                      <a className="read-more-btn">
                        Read More
                        <i className="fa-solid fa-angles-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-blog-item">
                  <div className="blog-image">
                    <Link href="/blog-details">
                      <a>
                        <img src="/images/blog/blog10.jpg" alt="image" />
                      </a>
                    </Link>

                    <div className="post-tag">
                      <Link href="/blog">
                        <a>Development</a>
                      </Link>
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <span className="date">Feb 18, 2022</span>

                    <h3>
                      <Link href="/blog-details">
                        <a>Top 21 Must-Read Blogs For Creative Agencies</a>
                      </Link>
                    </h3>

                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium.
                    </p>

                    <Link href="/blog-details">
                      <a className="read-more-btn">
                        Read More
                        <i className="fa-solid fa-angles-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </>
    );
  }
}

export default LatestNewsSliderTwo;
