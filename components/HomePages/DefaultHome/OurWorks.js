import React from "react";
import Link from "next/link";

const OurWorks = () => {
  return (
    <>
      <div className="case-studies-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Our Works</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div 
                className="single-case-studies"
                style={{ 
                  backgroundImage: `url(/images/case-studies/studie1.jpg)` 
                }}
              >
                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>Web Design</a>
                    </Link>
                  </span>
                  <h3>
                    <Link href="/portfolio-details">
                      <a>Designing a better cinema experience</a>
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

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div 
                className="single-case-studies"
                style={{ 
                  backgroundImage: `url(/images/case-studies/studie2.jpg)` 
                }}
              >
                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>Development</a>
                    </Link>
                  </span>
                  <h3>
                    <Link href="/portfolio-details">
                      <a>Building design process within teams</a>
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

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div 
                className="single-case-studies"
                style={{ 
                  backgroundImage: `url(/images/case-studies/studie3.jpg)` 
                }}
              >
                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>Web Development</a>
                    </Link>
                  </span>
                  <h3>
                    <Link href="/portfolio-details">
                      <a>How intercom brings play into their design process</a>
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

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div 
                className="single-case-studies"
                style={{ 
                  backgroundImage: `url(/images/case-studies/studie4.jpg)` 
                }}
              >
                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>React Development</a>
                    </Link>
                  </span>
                  <h3>
                    <Link href="/portfolio-details">
                      <a>
                        Stuck with to-do list, I created a new app for myself
                      </a>
                    </Link>
                  </h3>
                </div>

                <Link href="/portfolio-details">
                  <a className="btn btn-primary">View Case Study</a>
                </Link>

                <div className="shape">
                  <img
                    src="/images/case-studies/studie-shape4.png"
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <div 
                className="single-case-studies"
                style={{ 
                  backgroundImage: `url(/images/case-studies/studie5.jpg)` 
                }}
              >
                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>Angular Development</a>
                    </Link>
                  </span>
                  <h3>
                    <Link href="/portfolio-details">
                      <a>Examples of different types of sprints</a>
                    </Link>
                  </h3>
                </div>

                <Link href="/portfolio-details">
                  <a className="btn btn-primary">View Case Study</a>
                </Link>

                <div className="shape">
                  <img
                    src="/images/case-studies/studie-shape5.png"
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div 
                className="single-case-studies"
                style={{ 
                  backgroundImage: `url(/images/case-studies/studie6.jpg)` 
                }}
              >
                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>App Development</a>
                    </Link>
                  </span>
                  <h3>
                    <Link href="/portfolio-details">
                      <a>Redesigning the New York times app</a>
                    </Link>
                  </h3>
                </div>

                <Link href="/portfolio-details">
                  <a className="btn btn-primary">View Case Study</a>
                </Link>

                <div className="shape">
                  <img
                    src="/images/case-studies/studie-shape6.png"
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

export default OurWorks;
