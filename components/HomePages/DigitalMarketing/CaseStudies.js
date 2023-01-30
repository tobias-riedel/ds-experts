import React from "react";
import Link from "next/link";

const CaseStudies = () => {
  return (
    <>
      <div className="case-studies-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>CASE STUDIES</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-case-studies"
                style={{ backgroundImage: `url(/images/case-studies/studie1.jpg)` }}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>Web, Sales</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>Community Engagements</a>
                    </Link>
                  </h3>
                </div>

                <Link href="/portfolio-details">
                  <a className="btn btn-primary">View Case Study</a>
                </Link>

                <div className="shape">
                  <img
                    src="/images/case-studies/studie-shape1.png"
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-case-studies" 
                style={{ backgroundImage: `url(/images/case-studies/studie2.jpg)` }}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>Sales, SEO, Web</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>Built web faster & better</a>
                    </Link>
                  </h3>
                </div>

                <Link href="/portfolio-details">
                  <a className="btn btn-primary">View Case Study</a>
                </Link>

                <div className="shape">
                  <img
                    src="/images/case-studies/studie-shape2.png"
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-case-studies" 
                style={{ backgroundImage: `url(/images/case-studies/studie3.jpg)` }}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>Marketing</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>Traffic Management</a>
                    </Link>
                  </h3>
                </div>

                <Link href="/portfolio-details">
                  <a className="btn btn-primary">View Case Study</a>
                </Link>

                <div className="shape">
                  <img
                    src="/images/case-studies/studie-shape3.png"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="view-more-work">
            <Link href="/portfolio">
              <a className="btn btn-primary">View More Work</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
