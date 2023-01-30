import React from "react";
import Link from "next/link";

const PricingPlans = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">CHOOSE A PLAN</span>
            <h2>Our Pricing Plans</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="dm-pricing-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="pricing-header">
                  <h3>
                    $19<span>/Monthly</span>
                  </h3>
                  <span className="sub-title">Starter</span>
                </div>
                <ul className="features-list">
                  <li>
                    <i className="fas fa-check"></i> Get a Free Account
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Own Analytics Platform
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Chat Support
                  </li>
                  <li>
                    <i className="fas fa-times close"></i> Optimize Hashtags
                  </li>
                  <li>
                    <i className="fas fa-times close"></i> Account Manager
                  </li>
                </ul>

                <Link href="#">
                  <a className="default-btn-two">Purchase Now</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="dm-pricing-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div className="pricing-header">
                  <h3>
                    $29<span>/Monthly</span>
                  </h3>
                  <span className="sub-title">Professional</span>
                </div>
                <ul className="features-list">
                  <li>
                    <i className="fas fa-check"></i> Get a Free Account
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Own Analytics Platform
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Chat Support
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Optimize Hashtags
                  </li>
                  <li>
                    <i className="fas fa-times close"></i> Account Manager
                  </li>
                </ul>

                <Link href="#">
                  <a className="default-btn-two">Purchase Now</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="dm-pricing-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="pricing-header">
                  <h3>
                    $39<span>/Yearly</span>
                  </h3>
                  <span className="sub-title">Enterprise</span>
                </div>
                <ul className="features-list">
                  <li>
                    <i className="fas fa-check"></i> Get a Free Account
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Own Analytics Platform
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Chat Support
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Optimize Hashtags
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Account Manager
                  </li>
                </ul>

                <Link href="#">
                  <a className="default-btn-two">Purchase Now</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlans;
