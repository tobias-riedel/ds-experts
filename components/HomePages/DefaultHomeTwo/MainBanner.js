import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div 
        className="main-banner main-banner2"
        style={{ 
          backgroundImage: `url(/images/main-banner-shape.jpg)` 
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <span>A Digital Agency</span>
                    <h1>We're a full-range digital agency.</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
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

                <div className="col-lg-6">
                  <div
                    className="banner-animation-image2"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <img
                      src="/images/banner-img3.png"
                      className="main-pic"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		</>
  );
}

export default MainBanner;