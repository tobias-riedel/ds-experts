import React from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const PricingStyleTwo = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-70 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Choose The Pricing Plan</h2>
          </div>

          <div className="pricing-list-tab">
            <Tabs>
              <TabList>
                <Tab>
                  <i className="fa-solid fa-calendar-days"></i> Monthly
                </Tab>
                <Tab>
                  <i className="fa-solid fa-calendar-days"></i> Yearly
                </Tab>
              </TabList>

              <TabPanel>
                <div className="row justify-content-center">
                  {/* Single pricing table */}
                  <div className="col-lg-4 col-sm-6">
                    <div className="single-pricing-table">
                      <div className="pricing-header">
                        <h3>Basic</h3>
                      </div>

                      <div className="price">
                        <sup>$</sup>49 <sub>/ monthly</sub>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          24/7 Live Chat
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
                          Visitor Info
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
                          <i className="fa-solid fa-circle-check"></i>Drag & Drop
                          Widgets
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          Visitor Notes
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>Google
                          Analytics
                        </li>
                      </ul>

                      <div className="btn-box">
                        <Link href="#">
                          <a className="btn btn-primary">
                            <i className="bx bxs-hot"></i>
                            Try It Free Now
                            <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Single pricing table */}
                  <div className="col-lg-4 col-sm-6">
                    <div className="single-pricing-table">
                      <div className="pricing-header">
                        <h3>Standard</h3>
                      </div>

                      <div className="price">
                        <sup>$</sup>69 <sub>/ monthly</sub>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          24/7 Live Chat
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
                          Visitor Info
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
                          <i className="fa-solid fa-circle-check"></i>Drag & Drop
                          Widgets
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
                          <a className="btn btn-primary">
                            <i className="bx bxs-hot"></i>
                            Try It Free Now
                            <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Single pricing table */}
                  <div className="col-lg-4 col-sm-6">
                    <div className="single-pricing-table">
                      <div className="pricing-header">
                        <h3>Professional</h3>
                      </div>

                      <div className="price">
                        <sup>$</sup>99<sub> / monthly</sub>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          24/7 Live Chat
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
                          Visitor Info
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
                          <a className="btn btn-primary">
                            <i className="bx bxs-hot"></i>
                            Try It Free Now
                            <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row justify-content-center">
                  {/* Single pricing table */}
                  <div className="col-lg-4 col-sm-6">
                    <div className="single-pricing-table">
                      <div className="pricing-header">
                        <h3>Basic</h3>
                      </div>

                      <div className="price">
                        <sup>$</sup>149 <sub>/ yearly</sub>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          24/7 Live Chat
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
                          Visitor Info
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
                          <a className="btn btn-primary">
                            <i className="bx bxs-hot"></i>
                            Try It Free Now
                            <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Single pricing table */}
                  <div className="col-lg-4 col-sm-6">
                    <div className="single-pricing-table">
                      <div className="pricing-header">
                        <h3>Standard</h3>
                      </div>

                      <div className="price">
                        <sup>$</sup>159 <sub>/ yearly</sub>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          24/7 Live Chat
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
                          Visitor Info
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
                          <a className="btn btn-primary">
                            <i className="bx bxs-hot"></i>
                            Try It Free Now
                            <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Single pricing table */}
                  <div className="col-lg-4 col-sm-6">
                    <div className="single-pricing-table">
                      <div className="pricing-header">
                        <h3>Professional</h3>
                      </div>

                      <div className="price">
                        <sup>$</sup>199 <sub>/ yearly</sub>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          24/7 Live Chat
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
                          Visitor Info
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
                          <a className="btn btn-primary">
                            <i className="bx bxs-hot"></i>
                            Try It Free Now
                            <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingStyleTwo;
