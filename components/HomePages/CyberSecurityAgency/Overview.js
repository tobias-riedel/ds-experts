import React from "react";
import Link from "next/link";

const Overview = () => {
  return (
    <>
      <div className="cs-overview-area pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="cs-overview-item">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="cs-overview-image">
                      <img
                        src="/images/cyber-security/overview-1.png"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-6">
                    <div className="cs-overview-content">
                      <h3>Personal Online Protection Everywhere We Go</h3>
                      <Link href="/contact">
                        <a className="get-started-btn">GET STARTED</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cs-overview-item">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="cs-overview-image">
                      <img
                        src="/images/cyber-security/overview-2.png"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-6">
                    <div className="cs-overview-content">
                      <h3>Simple Solution For Your Business's Security</h3>
                      <Link href="/contact">
                        <a className="get-started-btn">GET STARTED</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
