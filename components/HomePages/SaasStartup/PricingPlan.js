import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const PricingPlan = () => {
  return (
    <>
      <div className="with-black-border bg-dark pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">PRICING PLAN</span>
            <h2>Choose Your Plan</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="saas-pricing-tabs">
            <Tabs>
              <TabList>
                <Tab>Monthly</Tab>
                <Tab>Yearly</Tab>
              </TabList>

              <TabPanel>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="saas-pricing-box bg-black saas-color">
                      <div className="pricing-header">
                        <h3>Starter</h3>
                        <span className="price">
                          $29<span>/Monthly</span>
                        </span>
                      </div>
                      <ul className="features-list">
                        <li>7 Days Free Trail</li>
                        <li>App-In-Purchase</li>
                        <li>Webmail Access</li>
                        <li>Unlimited Attachment</li>
                        <li>100% Safe & Secure</li>
                        <li className="unactive">No Hidden Charges</li>
                      </ul>
                      <a href="#" className="default-btn-two saas-color">
                        Choose Plan <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="saas-pricing-box active bg-black saas-color">
                      <div className="pricing-header">
                        <h3>Professional</h3>
                        <span className="price">
                          $39<span>/Monthly</span>
                        </span>
                      </div>
                      <ul className="features-list">
                        <li>One Time Purchase</li>
                        <li>App-In-Purchase</li>
                        <li>Webmail Access</li>
                        <li>Unlimited Attachment</li>
                        <li>100% Safe & Secure</li>
                        <li>No Hidden Charges</li>
                      </ul>
                      <a href="#" className="default-btn-two saas-color">
                        Choose Plan <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="saas-pricing-box bg-black saas-color">
                      <div className="pricing-header">
                        <h3>Premium</h3>
                        <span className="price">
                          $49<span>/Monthly</span>
                        </span>
                      </div>
                      <ul className="features-list">
                        <li>Unlimited Purchase</li>
                        <li>App-In-Purchase</li>
                        <li>Webmail Access</li>
                        <li>Unlimited Attachment</li>
                        <li>100% Safe & Secure</li>
                        <li>No Hidden Charges</li>
                      </ul>
                      <a href="#" className="default-btn-two saas-color">
                        Choose Plan <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="saas-pricing-box bg-black saas-color">
                      <div className="pricing-header">
                        <h3>Starter</h3>
                        <span className="price">
                          $59<span>/year</span>
                        </span>
                      </div>
                      <ul className="features-list">
                        <li>7 Days Free Trail</li>
                        <li>App-In-Purchase</li>
                        <li>Webmail Access</li>
                        <li>Unlimited Attachment</li>
                        <li>100% Safe & Secure</li>
                        <li className="unactive">No Hidden Charges</li>
                      </ul>
                      <a href="#" className="default-btn-two saas-color">
                        Choose Plan <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="saas-pricing-box active bg-black saas-color">
                      <div className="pricing-header">
                        <h3>Professional</h3>
                        <span className="price">
                          $79<span>/year</span>
                        </span>
                      </div>
                      <ul className="features-list">
                        <li>One Time Purchase</li>
                        <li>App-In-Purchase</li>
                        <li>Webmail Access</li>
                        <li>Unlimited Attachment</li>
                        <li>100% Safe & Secure</li>
                        <li>No Hidden Charges</li>
                      </ul>
                      <a href="#" className="default-btn-two saas-color">
                        Choose Plan <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="saas-pricing-box bg-black saas-color">
                      <div className="pricing-header">
                        <h3>Premium</h3>
                        <span className="price">
                          $99<span>/year</span>
                        </span>
                      </div>
                      <ul className="features-list">
                        <li>Unlimited Purchase</li>
                        <li>App-In-Purchase</li>
                        <li>Webmail Access</li>
                        <li>Unlimited Attachment</li>
                        <li>100% Safe & Secure</li>
                        <li>No Hidden Charges</li>
                      </ul>
                      <a href="#" className="default-btn-two saas-color">
                        Choose Plan <i className="fas fa-chevron-right"></i>
                      </a>
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

export default PricingPlan;
