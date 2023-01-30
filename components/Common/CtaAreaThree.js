import React from "react";
import Link from "next/link";

const CtaAreaThree = () => {
  return (
    <>
      <div className="cta-area-two dark-style ptb-100">
        <div className="container">
          <div className="cta-content">
            <span>So What is Next?</span>
            <h3>Are You Ready? Let's get to work!</h3>
          </div>

          <div
            className="cta-btn-box"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Link href="/contact">
              <a className="default-btn-two">
                Contact Us <i className="fa-solid fa-chevron-right"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaAreaThree;
