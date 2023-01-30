import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="personal-portfolio-banner-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="personal-portfolio-banner-content">
                <span className="sub-title">Hello I'm</span>
                <h1>Kathleen Lavelle</h1>
                <h4>Digital Product Designer</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p>
                <Link href="/contact">
                  <a className="default-btn-two">Connect With Me</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="personal-portfolio-banner-image"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <img
                  src="/images/personal-portfolio/banner-profile.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pp-shape1">
          <img src="/images/personal-portfolio/shape1.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
