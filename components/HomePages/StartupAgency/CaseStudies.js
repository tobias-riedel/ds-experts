import React from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const CaseStudies = () => {
  return (
    <>
      <section className="case-studies-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Case Studies</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="case-studies-tabs">
            <Tabs>
              <TabList>
                <Tab>UX Process</Tab>
                <Tab>User Experience</Tab>
                <Tab>User Interface</Tab>
                <Tab>Brand</Tab>
                <Tab>Product</Tab>
              </TabList>

              <TabPanel>
                <div className="row">
                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie1.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Process</a>
                          </Link>
                        </span>
                        <h3>Designing a better cinema experience</h3>
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies"
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie2.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Process</a>
                          </Link>
                        </span>
                        <h3>Building design process within teams</h3>
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie3.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Process</a>
                          </Link>
                        </span>
                        <h3>
                          How Intercom brings play into their design process
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie4.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Process</a>
                          </Link>
                        </span>
                        <h3>
                          Stuck with to-do list, I created a new app for myself 
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies"
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie5.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Process</a>
                          </Link>
                        </span>
                        <h3>Examples of different types of sprints</h3>
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie6.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Process</a>
                          </Link>
                        </span>
                        <h3>Redesigning the New York Times app</h3>
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
              </TabPanel>

              <TabPanel>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie1.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Experience</a>
                          </Link>
                        </span>
                        <h3>Designing a better cinema experience</h3>
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie2.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Experience</a>
                          </Link>
                        </span>
                        <h3>Building design process within teams</h3>
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie3.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Experience</a>
                          </Link>
                        </span>
                        <h3>
                          How Intercom brings play into their design process
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie4.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Experience</a>
                          </Link>
                        </span>
                        <h3>
                          Stuck with to-do list, I created a new app for myself 
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie5.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Experience</a>
                          </Link>
                        </span>
                        <h3>Examples of different types of sprints</h3>
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie6.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Experience</a>
                          </Link>
                        </span>
                        <h3>Redesigning the New York Times app</h3>
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
              </TabPanel>

              <TabPanel>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie1.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Interface</a>
                          </Link>
                        </span>
                        <h3>Designing a better cinema experience</h3>
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie2.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Interface</a>
                          </Link>
                        </span>
                        <h3>Building design process within teams</h3>
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie3.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Interface</a>
                          </Link>
                        </span>
                        <h3>
                          How Intercom brings play into their design process
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie4.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Interface</a>
                          </Link>
                        </span>
                        <h3>
                          Stuck with to-do list, I created a new app for myself 
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie5.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Interface</a>
                          </Link>
                        </span>
                        <h3>Examples of different types of sprints</h3>
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie6.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Interface</a>
                          </Link>
                        </span>
                        <h3>Redesigning the New York Times app</h3>
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
              </TabPanel>

              <TabPanel>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie1.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Brand</a>
                          </Link>
                        </span>
                        <h3>Designing a better cinema experience</h3>
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie2.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Brand</a>
                          </Link>
                        </span>
                        <h3>Building design process within teams</h3>
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie3.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Brand</a>
                          </Link>
                        </span>
                        <h3>
                          How Intercom brings play into their design process
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie4.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Brand</a>
                          </Link>
                        </span>
                        <h3>
                          Stuck with to-do list, I created a new app for myself 
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie5.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Brand</a>
                          </Link>
                        </span>
                        <h3>Examples of different types of sprints</h3>
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie6.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Brand</a>
                          </Link>
                        </span>
                        <h3>Redesigning the New York Times app</h3>
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
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie1.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Product</a>
                          </Link>
                        </span>
                        <h3>Designing a better cinema experience</h3>
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie2.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Product</a>
                          </Link>
                        </span>
                        <h3>Building design process within teams</h3>
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie3.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Product</a>
                          </Link>
                        </span>
                        <h3>
                          How Intercom brings play into their design process
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie4.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Product</a>
                          </Link>
                        </span>
                        <h3>
                          Stuck with to-do list, I created a new app for myself 
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie5.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Product</a>
                          </Link>
                        </span>
                        <h3>Examples of different types of sprints</h3>
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

                  <div className="col-lg-4 col-sm-6 mt-40">
                    <div 
                      className="single-case-studies" 
                      style={{ 
                        backgroundImage: `url(/images/case-studies/studie6.jpg)` 
                      }}
                    >
                      <div className="content">
                        <span>
                          <Link href="/portfolio">
                            <a>Product</a>
                          </Link>
                        </span>
                        <h3>Redesigning the New York Times app</h3>
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
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
