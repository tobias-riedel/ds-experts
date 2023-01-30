import React from "react";

const Partners = () => {
  return (
    <>
      <div className="software-partner-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="partner-title">
                Trusted by world famous companies:
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                  <div className="software-partner-item">
                    <img
                      src="/images/software/partner1.png"
                      alt="partner-image"
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                  <div className="software-partner-item">
                    <img
                      src="/images/software/partner2.png"
                      alt="partner-image"
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                  <div className="software-partner-item">
                    <img
                      src="/images/software/partner3.png"
                      alt="partner-image"
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                  <div className="software-partner-item">
                    <img
                      src="/images/software/partner4.png"
                      alt="partner-image"
                    />
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

export default Partners;
