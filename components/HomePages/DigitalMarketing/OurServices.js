import React from "react";
import Link from "next/link";

const OurServices = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">WHAT WE DO</span>
            <h2>All The Services That We Provide to Our Clients</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="dm-services-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <Link href="/service-details">
                  <a>
                    <img
                      src="/images/digital-marketing/services-img1.jpg"
                      alt="image"
                    />
                  </a>
                </Link>
                <div className="content">
                  <h3>
                    <Link href="/service-details">
                      <a>Digital Marketing</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur elit adipiscing
                    labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="dm-services-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <Link href="/service-details">
                  <a>
                    <img
                      src="/images/digital-marketing/services-img2.jpg"
                      alt="image"
                    />
                  </a>
                </Link>
                <div className="content">
                  <h3>
                    <Link href="/service-details">
                      <a>Strategy & Planning</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur elit adipiscing
                    labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="dm-services-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <Link href="/service-details">
                  <a>
                    <img
                      src="/images/digital-marketing/services-img3.jpg"
                      alt="image"
                    />
                  </a>
                </Link>
                <div className="content">
                  <h3>
                    <Link href="/service-details">
                      <a>Search Engine Optimization</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur elit adipiscing
                    labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
