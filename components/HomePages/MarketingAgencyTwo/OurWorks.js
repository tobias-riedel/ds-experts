import React from "react";
import Link from "next/link";

const OurWorks = () => {
  return (
    <>
      <section className="case-studies-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="work-card text-center">
                <img src="/images/works/work1.jpg" alt="image" />

                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>SEO Optimization</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>Designing a better cinema experience</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="custom-btn">View Details</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="work-card text-center">
                <img src="/images/works/work2.jpg" alt="image" />
                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>Digital Marketing</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>Building design process within teams</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="custom-btn">View Details</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="work-card text-center">
                <img src="/images/works/work3.jpg" alt="image" />

                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>Keyword Targeting</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>How intercom brings play into their design process</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="custom-btn">View Details</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="work-card text-center">
                <img src="/images/works/work4.jpg" alt="image" />

                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>Email Marketing</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>
                        Stuck with to-do list, I created a new app for myself
                      </a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="custom-btn">View Details</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="work-card text-center">
                <img src="/images/works/work5.jpg" alt="image" />

                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>Marketing & Reporting</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>Examples of different types of sprints</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="custom-btn">View Details</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="work-card text-center">
                <img src="/images/works/work6.jpg" alt="image" />

                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>Development</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>Redesigning the New York times app</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="custom-btn">View Details</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="view-more-work">
            <Link href="/portfolio">
              <a className="btn btn-primary">
                <i className="fa-solid fa-list-check"></i> View More
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWorks;
