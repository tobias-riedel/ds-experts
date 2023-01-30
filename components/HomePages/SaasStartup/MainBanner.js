import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="saas-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="saas-banner-content">
                <h1>Pungent is Most Powerful SaaS Solution</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p>

                <Link href="/contact">
                  <a className="default-btn-two">
                    Get Started <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="saas-banner-image"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <img src="/images/saas-startup/saas-banner.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
