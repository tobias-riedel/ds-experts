import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const Funfacts = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="software-funfacts-area bg-f9f9f9 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-4 col-6">
              <div
                className="software-funfacts-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="icon">
                  <i className="fa-solid fa-user"></i>
                </div>
                <h3>14,500</h3>
                <p>Happy Users</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 col-6">
              <div
                className="software-funfacts-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div className="icon">
                  <i className="fa-solid fa-star"></i>
                </div>
                <h3>3,527</h3>
                <p>Good Reviews</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-4 col-sm-4 col-6">
              <div
                className="software-funfacts-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="icon">
                  <i className="fa-solid fa-cloud-arrow-down"></i>
                </div>
                <h3>100k</h3>
                <p>App Download</p>
              </div>
            </div>
          </div>

          <div className="software video-box">
            <img src="/images/software/video-thumb.jpg" alt="video" />
            <div
              onClick={() => setToggler(!toggler)}
              className="video-btn"
            >
              <i className="fa-solid fa-play"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Funfacts;