import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="bg-dark with-black-border pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR SERVICES</span>
            <h2>Powerful Services Offered in SaaS Application Development</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className="saas-services-box color-white"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <i className="icon fa-solid fa-gear"></i>
                <h3>
                  <Link href="/service-details">
                    <a>Product Engineering</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className="saas-services-box color-white"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <i className="icon fa-solid fa-building-lock"></i>
                <h3>
                  <Link href="/service-details">
                    <a>Security Design</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className="saas-services-box color-white"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <i className="icon fa-solid fa-certificate"></i>
                <h3>
                  <Link href="/service-details">
                    <a>License Management</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className="saas-services-box color-white"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <i className="icon fa-solid fa-file-pen"></i>
                <h3>
                  <Link href="/service-details">
                    <a>Release Planning</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
