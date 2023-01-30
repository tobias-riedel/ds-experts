import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="software-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="software-banner-content">
                <span className="sub-title fw-bold">
                  Get your 14 days free trail!
                </span>
                <h1>Manage All of Your Stuff Using a Pungent</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  tincidunt eifend odio viverra diam aliquet donec again.
                </p>
                <Link href="/contact">
                  <a className="software-btn">
                    Get Started Now{" "}
                    <i className="fa-solid fa-angles-right"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="software-banner-image"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <img src="/images/software/banner-img.png" alt="banner-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
