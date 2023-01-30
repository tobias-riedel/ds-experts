import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div 
        className="hero-banner overly" 
        style={{ 
          backgroundImage: `url(/images/hero-banner1.jpg)` 
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="main-banner-content text-center">
                <span>We are a</span>

                <h1>Creative agency</h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href="/contact">
                  <a className="btn btn-primary">Get Started</a>
                </Link>

                <Link href="#play-video">
                  <a
                    onClick={() => setToggler(!toggler)}
                    className="btn btn-secondary"
                  >
                    <i className="fa-solid fa-play me-1"></i> How it works
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="curve-shape">
          <img src="/images/curve-shape.png" alt="Shape" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
