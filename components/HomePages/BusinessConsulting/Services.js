import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR SERVICES</span>
            <h2>Consulting Services</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="bc-services-item">
                <img
                  src="/images/business-consulting/services-img1.jpg"
                  alt="image"
                />
                <h3>Sales & Marketing</h3>
                <div className="hover-content">
                  <h3>
                    <Link href="/service-details">
                      <a>Sales & Marketing</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, cons e ctetur adipiscing elit,
                    sed do eiu smod.
                  </p>
                  <Link href="/service-details">
                    <a className="link-btn">
                      Read More <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="bc-services-item">
                <img
                  src="/images/business-consulting/services-img2.jpg"
                  alt="image"
                />
                <h3>Cost Transformation</h3>
                <div className="hover-content">
                  <h3>
                    <Link href="/service-details">
                      <a>Cost Transformation</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, cons e ctetur adipiscing elit,
                    sed do eiu smod.
                  </p>
                  <Link href="/service-details">
                    <a className="link-btn">
                      Read More <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="bc-services-item">
                <img
                  src="/images/business-consulting/services-img3.jpg"
                  alt="image"
                />
                <h3>Sustainability</h3>
                <div className="hover-content">
                  <h3>
                    <Link href="/service-details">
                      <a>Sustainability</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, cons e ctetur adipiscing elit,
                    sed do eiu smod.
                  </p>
                  <Link href="/service-details">
                    <a className="link-btn">
                      Read More <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="bc-services-item">
                <img
                  src="/images/business-consulting/services-img4.jpg"
                  alt="image"
                />
                <h3>Strategy</h3>
                <div className="hover-content">
                  <h3>
                    <Link href="/service-details">
                      <a>Strategy</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, cons e ctetur adipiscing elit,
                    sed do eiu smod.
                  </p>
                  <Link href="/service-details">
                    <a className="link-btn">
                      Read More <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="bc-services-item">
                <img
                  src="/images/business-consulting/services-img5.jpg"
                  alt="image"
                />
                <h3>Customer Experience</h3>
                <div className="hover-content">
                  <h3>
                    <Link href="/service-details">
                      <a>Customer Experience</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, cons e ctetur adipiscing elit,
                    sed do eiu smod.
                  </p>
                  <Link href="/service-details">
                    <a className="link-btn">
                      Read More <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="bc-services-item">
                <img
                  src="/images/business-consulting/services-img6.jpg"
                  alt="image"
                />
                <h3>Profit Planning</h3>
                <div className="hover-content">
                  <h3>
                    <Link href="/service-details">
                      <a>Profit Planning</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, cons e ctetur adipiscing elit,
                    sed do eiu smod.
                  </p>
                  <Link href="/service-details">
                    <a className="link-btn">
                      Read More <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
