import React from "react";

const Features = () => {
  return (
    <>
      <div className="bg-1b2232 pt-70 pb-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="bc-features-item">
                <i className="icon fa-solid fa-chart-bar"></i>
                <h3>
                  Advanced <br />
                  Analytics
                </h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="bc-features-item">
                <i className="icon fa-solid fa-lightbulb"></i>
                <h3>
                  Business <br />
                  Innovation
                </h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="bc-features-item">
                <i className="icon fa-solid fa-arrow-up-right-dots"></i>
                <h3>
                  Growth <br />
                  Consulting
                </h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="bc-features-item">
                <i className="icon fa-solid fa-users-rays"></i>
                <h3>
                  Sales <br />
                  Consulting
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
