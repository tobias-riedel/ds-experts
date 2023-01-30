import React from "react";

const Funfacts = () => {
  return (
    <>
      <div className="pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div
                className="app-funfacts-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="icon">
                  <i className="fa-solid fa-cloud-arrow-down"></i>
                </div>
                <p>Total Downloads</p>
                <h3>
                  10<span className="sign">M</span>
                </h3>
              </div>
            </div>
            
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div
                className="app-funfacts-box bg1"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div className="icon">
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>Total Reviews</p>
                <h3>
                  799<span className="sign">K</span>
                </h3>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div
                className="app-funfacts-box bg2"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="icon">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <p>Worldwide Countries</p>
                <h3>
                  150<span className="sign">+</span>
                </h3>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div
                className="app-funfacts-box bg3"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <div className="icon">
                  <i className="fa-solid fa-user-check"></i>
                </div>
                <p>Active Users</p>
                <h3>
                  5<span className="sign">M</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funfacts;
