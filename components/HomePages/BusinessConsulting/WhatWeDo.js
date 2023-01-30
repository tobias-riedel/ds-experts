import React from "react";

const WhatWeDo = () => {
  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="bc-what-we-do-content">
                <div className="section-title">
                  <span className="sub-title">SEE WHAT WE DO</span>
                  <h2>Consultancy Cases</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="bc-what-we-do-box">
                      <i className="icon fa-solid fa-chart-line"></i>
                      <h3>Business Analysis</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="bc-what-we-do-box">
                      <i className="icon fa-solid fa-list-check"></i>
                      <h3>Project Management</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="bc-what-we-do-image">
                <img
                  src="/images/business-consulting/what-we-do.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
