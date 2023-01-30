import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div 
        className="consulting-banner-area"
        style={{ 
          backgroundImage: `url(/images/business-consulting/consulting-banner-bg.jpg)` 
        }}
      >
        <div className="container">
          <div className="consulting-banner-content">
            <h1>We Are Always As Your Service For Any Business Consulting</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link href="/contact">
              <a className="default-btn-two">
                Get Started <i className="fas fa-chevron-right"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
