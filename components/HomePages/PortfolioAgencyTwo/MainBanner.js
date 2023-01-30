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
        className="hero-banner overly clip-path-one bg-fixed"
        style={{ 
          backgroundImage: `url(/images/hero-banner15.jpg)` 
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="main-banner-content text-center">
                <h1>Portfolio Agency</h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href="/contact">
                  <a className="btn btn-primary">Contact Us</a>
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
      </div>
    </>
  );
};

export default MainBanner;
