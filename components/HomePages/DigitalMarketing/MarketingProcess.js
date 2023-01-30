import React from "react";

const MarketingProcess = () => {
  return (
    <>
      <div className="dm-process-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title marketing-color">MARKETING PROCESS</span>
            <h2>We Have The Main Process to Run The Marketing</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="dm-process-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <img src="/images/digital-marketing/process1.png" alt="image" />
                <h3>Marketing Plan</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="dm-process-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <img src="/images/digital-marketing/process2.png" alt="image" />
                <h3>Marketing Execution</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="dm-process-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <img src="/images/digital-marketing/process3.png" alt="image" />
                <h3>Growth & Scale</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketingProcess;
