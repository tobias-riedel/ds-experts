import React from "react";
import Link from "next/link";

const PricingStyleThree = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-70 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Choose The Pricing Plan</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            {/* Single pricing table */}
            <div className="col-lg-4 col-sm-6">
              <div
                className="single-pricing-table"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="pricing-header">
                  <h3>Daily plan</h3>
                </div>

                <div className="price">
                  <sup>$</sup>120 <sub>/ Day</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Web Development
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Email Integration
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Messenger Integration
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Mobile + Desktop Apps
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Quick Responses
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Drag & Drop Widgets
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Visitor Notes
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Google Analytics
                  </li>
                </ul>

                <div className="btn-box">
                  <Link href="#">
                    <a className="btn btn-primary">Select the plan</a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Single pricing table */}
            <div className="col-lg-4 col-sm-6">
              <div
                className="single-pricing-table"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div className="pricing-header">
                  <h3>Weekly plan</h3>
                </div>

                <div className="price">
                  <sup>$</sup>840 <sub>/ Week</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Web Development
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Email Integration
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Messenger Integration
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Mobile + Desktop Apps
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Quick Responses
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Drag & Drop Widgets
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Visitor Notes
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Google Analytics
                  </li>
                </ul>

                <div className="btn-box">
                  <Link href="#">
                    <a className="btn btn-primary">Select the plan</a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Single pricing table */}
            <div className="col-lg-4 col-sm-6">
              <div
                className="single-pricing-table"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="pricing-header">
                  <h3>Monthly plan</h3>
                </div>

                <div className="price">
                  <sup>$</sup>3,600<sub> / Month</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Web Development
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Email Integration
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Messenger Integration
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Mobile + Desktop Apps
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Quick Responses
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Drag & Drop Widgets
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Visitor Notes
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Google Analytics
                  </li>
                </ul>

                <div className="btn-box">
                  <Link href="#">
                    <a className="btn btn-primary">Select the plan</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingStyleThree;
