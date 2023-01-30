import React from "react";

const Funfacts = () => {
  return (
    <>
      <div className="bc-funfacts-area bg-image pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 col-md-3 col-6">
              <div className="bc-funfacts-box text-center">
                <h3>275</h3>
                <span className="sub-title">Clients Served Globally</span>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-3 col-6">
              <div className="bc-funfacts-box text-center">
                <h3>499</h3>
                <span className="sub-title">Successful Projects</span>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-3 col-6">
              <div className="bc-funfacts-box text-center">
                <h3>20</h3>
                <span className="sub-title">Years in Business</span>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-3 col-6">
              <div className="bc-funfacts-box text-center">
                <h3>
                  100<span className="sign">%</span>
                </h3>
                <span className="sub-title">Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funfacts;
