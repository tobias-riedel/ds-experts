import React from "react";
import Link from "next/link";

const PricingStyleOne = () => {
  return (
    <>
      <div className="pricing-area ptb-100 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Pricing Plans</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="pricing-table"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="pricing-header">
                  <h3>Basic Plan</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>59
                    <span>/Monthly</span>
                  </span>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li className="active">5 GB Bandwidth</li>
                    <li className="active">Highest Speed</li>
                    <li className="active">1 GB Storage</li>
                    <li className="active">Unlimited Website</li>
                    <li className="active">Unlimited Users</li>
                    <li className="active">24x7 Great Support</li>
                    <li>Data Security and Backups</li>
                    <li>Monthly Reports and Analytics</li>
                  </ul>
                </div>

                <div className="pricing-footer">
                  <Link href="#">
                    <a className="btn btn-primary">Select Plan</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="pricing-table active-plan"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div className="pricing-header">
                  <h3>Advanced Plan</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>79
                    <span>/Monthly</span>
                  </span>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li className="active">10 GB Bandwidth</li>
                    <li className="active">Highest Speed</li>
                    <li className="active">3 GB Storage</li>
                    <li className="active">Unlimited Website</li>
                    <li className="active">Unlimited Users</li>
                    <li className="active">24x7 Great Support</li>
                    <li className="active">Data Security and Backups</li>
                    <li>Monthly Reports and Analytics</li>
                  </ul>
                </div>

                <div className="pricing-footer">
                  <Link href="#">
                    <a className="btn btn-primary">Select Plan</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="pricing-table"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="pricing-header">
                  <h3>Expert Plan</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>100
                    <span>/Monthly</span>
                  </span>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li className="active">15 GB Bandwidth</li>
                    <li className="active">Highest Speed</li>
                    <li className="active">5 GB Storage</li>
                    <li className="active">Unlimited Website</li>
                    <li className="active">Unlimited Users</li>
                    <li className="active">24x7 Great Support</li>
                    <li className="active">Data Security and Backups</li>
                    <li className="active">Monthly Reports and Analytics</li>
                  </ul>
                </div>

                <div className="pricing-footer">
                  <Link href="#">
                    <a className="btn btn-primary">Select Plan</a>
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

export default PricingStyleOne;
