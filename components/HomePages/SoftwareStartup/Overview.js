import React from "react";

const Overview = () => {
  return (
    <>
      <div className="software-overview-area ptb-100 bg-f9f9f9">
        <div className="container">
          <div className="software-overview-box">
            <div className="row align-items-center">
              <div
                className="col-lg-6 col-md-12 overview-image left-img"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                <img src="/images/software/overview1.png" alt="overview" />
              </div>
              <div className="col-lg-6 col-md-12 overview-content">
                <span className="sub-title">Software Intregrations</span>
                <h2>Your valuable helping hand will find here</h2>
                <ul className="overview-list">
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                      Marketplace System
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                      Management System
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                      Remote System
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                      File System
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="software-overview-box">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 overview-content">
                <span className="sub-title">Team Intregrations</span>
                <h2>It is an easy solution for a very large solution</h2>
                <ul className="overview-list">
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                      Business Solution
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                      Management Support
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                      Enterprise Account
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                      Market Analysis
                    </span>
                  </li>
                </ul>
              </div>
              <div
                className="col-lg-6 col-md-12 overview-image right-img"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                <img src="/images/software/overview2.png" alt="overview" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
