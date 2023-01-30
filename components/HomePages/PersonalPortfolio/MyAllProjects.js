import React from "react";
import Link from "next/link";

const MyAllProjects = () => {
  return (
    <>
      <div className="pp-works-area ptb-100">
        <div className="container">
          <div className="section-title style-two">
            <h2>My All Projects</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div
                className="pp-works-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <img
                  src="/images/personal-portfolio/project-img1.jpg"
                  alt="image"
                />
                <h3>Startup Business</h3>
                <Link href="/portfolio-details/">
                  <a className="link-btn"></a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div
                className="pp-works-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <img
                  src="/images/personal-portfolio/project-img2.jpg"
                  alt="image"
                />
                <h3>App Landing</h3>
                <a href="single-portfolio-1.html" className="link-btn"></a>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div
                className="pp-works-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <img
                  src="/images/personal-portfolio/project-img3.jpg"
                  alt="image"
                />
                <h3>Digital Marketing</h3>
                <a href="single-portfolio-1.html" className="link-btn"></a>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div
                className="pp-works-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <img
                  src="/images/personal-portfolio/project-img4.jpg"
                  alt="image"
                />
                <h3>Business Startup</h3>
                <a href="single-portfolio-1.html" className="link-btn"></a>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div
                className="pp-works-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <img
                  src="/images/personal-portfolio/project-img5.jpg"
                  alt="image"
                />
                <h3>Digital Agency</h3>
                <a href="single-portfolio-1.html" className="link-btn"></a>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div
                className="pp-works-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <img
                  src="/images/personal-portfolio/project-img6.jpg"
                  alt="image"
                />
                <h3>Blog Business</h3>
                <a href="single-portfolio-1.html" className="link-btn"></a>
              </div>
            </div>

            <div className="col-lg-12 col-sm-12 col-md-12">
              <div className="pp-works-box-btn">
                <Link href="#">
                  <a className="default-btn-two">
                    View More <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAllProjects;
