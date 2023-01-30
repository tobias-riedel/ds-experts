import React from "react";

const FunFacts = () => {
  return (
    <>
      <div className="pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div
                className="dm-funfacts-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <i className="fa-solid fa-list-check"></i>
                <h3>2546</h3>
                <span className="sub-title">Project Complate</span>
                <img
                  src="/images/digital-marketing/border1.png"
                  alt="image"
                  className="shape"
                />
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div
                className="dm-funfacts-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <i className="fa-solid fa-users"></i>
                <h3>2495</h3>
                <span className="sub-title">Happy Clients</span>
                <img
                  src="/images/digital-marketing/border1.png"
                  alt="image"
                  className="shape"
                />
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div
                className="dm-funfacts-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <i className="fa-solid fa-people-group"></i>
                <h3>172</h3>
                <span className="sub-title">Qualified Staffs</span>
                <img
                  src="/images/digital-marketing/border1.png"
                  alt="image"
                  className="shape"
                />
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div
                className="dm-funfacts-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <i className="fa-solid fa-trophy"></i>
                <h3>07</h3>
                <span className="sub-title">Winning Awards</span>
                <img
                  src="/images/digital-marketing/border1.png"
                  alt="image"
                  className="shape"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
