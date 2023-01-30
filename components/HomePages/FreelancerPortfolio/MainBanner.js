import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="freelancer-portfolio-banner-area">
        <div className="container">
          <div className="freelancer-portfolio-banner-content">
            <img
              src="/images/freelancer-portfolio/freelancer-profile.jpg"
              alt="Profile Img"
              className="profile-img"
            />
            <span className="sub-title">Welcome To My Portfolio!</span>
            <h1>
              Hi, I'm Johnson Roy <span>Web Developer.</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="socials-link">
              <li>
                <a href="#" target="_blank">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fa-brands fa-skype"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fa-brands fa-gitlab"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
              </li>
            </ul>
            <Link href="/contact">
              <a className="default-btn-two">
                Contact Me <i className="fas fa-chevron-right"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
