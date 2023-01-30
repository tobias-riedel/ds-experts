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
          className="hero-banner it-banner overly bg-fixed" 
          style={{ 
            backgroundImage: `url(/images/hero-banner14.jpg)` 
          }}
        >
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="main-banner-content">
                      <h1>IT agency</h1>

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
                          className="btn btn-secondary" 
                          onClick={() => setToggler(!toggler)}
                        >
                          <i className="fa-solid fa-play me-1"></i> How it works
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div
                      className="animate-banner-image"
                      data-aos="zoom-in"
                      data-aos-duration="1200"
                    >
                      <img
                        src="/images/animate-banner-img2.jpg"
                        alt="Animate image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="oval-shape">
            <img 
              src="/images/oval-shape.png" 
              alt="Shape" 
            />
          </div>
        </div>
      </>
   );
  }
  
export default MainBanner;