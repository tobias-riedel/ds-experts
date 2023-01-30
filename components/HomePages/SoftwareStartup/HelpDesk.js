import React from "react";
import Link from "next/link";

const HelpDesk = () => {
  return (
    <>
      <div className="pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">How Can Help You!</span>
            <h2>We’re helping teams do their best work</h2>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="software-single-help-desk-box">
                <div className="icon">
                  <img src="/images/software/icon1.png" alt="icon" />
                </div>
                <h3>Zero Configuration</h3>
                <p>
                  Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed
                  est non feugiat sagittis, donec.
                </p>
                <Link href="/service-details">
                  <a className="link-btn">
                    Learn More <i className="fa-solid fa-angle-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="software-single-help-desk-box">
                <div className="icon">
                  <img src="/images/software/icon2.png" alt="icon" />
                </div>
                <h3>Code Security</h3>
                <p>
                  Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed
                  est non feugiat sagittis, donec.
                </p>
                <Link href="/service-details">
                  <a className="link-btn">
                    Learn More <i className="fa-solid fa-angle-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="software-single-help-desk-box">
                <div className="icon">
                  <img src="/images/software/icon3.png" alt="icon" />
                </div>
                <h3>Team Management</h3>
                <p>
                  Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed
                  est non feugiat sagittis, donec.
                </p>
                <Link href="/service-details">
                  <a className="link-btn">
                    Learn More <i className="fa-solid fa-angle-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="software-single-help-desk-box">
                <div className="icon">
                  <img src="/images/software/icon4.png" alt="icon" />
                </div>
                <h3>Access Controlled</h3>
                <p>
                  Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed
                  est non feugiat sagittis, donec.
                </p>
                <Link href="/service-details">
                  <a className="link-btn">
                    Learn More <i className="fa-solid fa-angle-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpDesk;
