import React from "react";

const FunFacts = () => {
  return (
    <>
      <div className="cs-fun-facts-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="cs-single-fun-facts">
                <div className="number">01.</div>
                <h3>
                  2,250<span className="sign-icon">+</span>
                </h3>
                <p>Cybersecurity Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="cs-single-fun-facts">
                <div className="number">02.</div>
                <h3>
                  15,000<span className="sign-icon">+</span>
                </h3>
                <p>All Time Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="cs-single-fun-facts">
                <div className="number">03.</div>
                <h3>
                  160<span className="sign-icon">+</span>
                </h3>
                <p>Attacks Blocked</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="cs-single-fun-facts">
                <div className="number">04.</div>
                <h3>
                  80<span className="sign-icon">+</span>
                </h3>
                <p>Experts Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
