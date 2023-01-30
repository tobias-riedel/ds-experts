import React from "react";
import Link from "next/link";

const LatestNews = () => {
  return (
    <>
      <div className="blog-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Latest News</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="single-blog-post mb-0">
                <div className="post-image">
                  <Link href="/blog-details">
                    <a>
                      <img src="/images/blog/blog1.jpg" alt="image" />
                    </a>
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <i className="fa-solid fa-user"></i>
                      <Link href="/blog">
                        <a>Admin</a>
                      </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-tag"></i>
                      <Link href="/blog-details">
                        <a>Web Development</a>
                      </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-calendar-days"></i>
                      Feb 15, 2022
                    </li>
                  </ul>

                  <h3 className="mb-0">
                    <Link href="/blog-details">
                      <a>How to Become a Successful Entry Level UX Designer</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="blog-item-box">
                <div className="blog-item">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-3 col-sm-4">
                      <div className="post-image">
                        <Link href="/blog-details">
                          <a>
                            <img src="/images/blog/blog2.jpg" alt="image" />
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-8 col-md-9 col-sm-8">
                      <div className="post-content">
                        <ul className="post-meta">
                          <li>
                            <i className="fa-solid fa-user"></i>
                            <Link href="/blog">
                              <a>Admin</a>
                            </Link>
                          </li>
                          <li>
                            <i className="fa-solid fa-tag"></i>
                            <Link href="/blog-details">
                              <a>React Js</a>
                            </Link>
                          </li>
                          <li>
                            <i className="fa-solid fa-calendar-days"></i>
                            Feb 16, 2022
                          </li>
                        </ul>

                        <h3>
                          <Link href="/blog-details">
                            <a>
                              How to Become a Successful Entry Level UX Designer
                            </a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog-item">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-3 col-sm-4">
                      <div className="post-image">
                        <Link href="/blog-details">
                          <a>
                            <img src="/images/blog/blog3.jpg" alt="image" />
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-8 col-md-9 col-sm-8">
                      <div className="post-content">
                        <ul className="post-meta">
                          <li>
                            <i className="fa-solid fa-user"></i>
                            <Link href="/blog">
                              <a>Admin</a>
                            </Link>
                          </li>
                          <li>
                            <i className="fa-solid fa-tag"></i>
                            <Link href="/blog-details">
                              <a>Angular Js</a>
                            </Link>
                          </li>
                          <li>
                            <i className="fa-solid fa-calendar-days"></i>
                            Feb 17, 2022
                          </li>
                        </ul>

                        <h3>
                          <Link href="/blog-details">
                            <a>
                              The Guide to Running a Client Discovery Process
                            </a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog-item">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-3 col-sm-4">
                      <div className="post-image">
                        <Link href="/blog-details">
                          <a>
                            <img src="/images/blog/blog4.jpg" alt="image" />
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-8 col-md-9 col-sm-8">
                      <div className="post-content">
                        <ul className="post-meta">
                          <li>
                            <i className="fa-solid fa-user"></i>
                            <Link href="/blog">
                              <a>Admin</a>
                            </Link>
                          </li>
                          <li>
                            <i className="fa-solid fa-tag"></i>
                            <Link href="/blog-details">
                              <a>Design</a>
                            </Link>
                          </li>
                          <li>
                            <i className="fa-solid fa-calendar-days"></i>
                            Feb 18, 2022
                          </li>
                        </ul>

                        <h3>
                          <Link href="/blog-details">
                            <a>
                              3 Ways to Get Client Approval for Scope Changes
                            </a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog-item">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-3 col-sm-4">
                      <div className="post-image">
                        <Link href="/blog-details">
                          <a>
                            <img src="/images/blog/blog1.jpg" alt="image" />
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-8 col-md-9 col-sm-8">
                      <div className="post-content">
                        <ul className="post-meta">
                          <li>
                            <i className="fa-solid fa-user"></i>
                            <Link href="/blog">
                              <a>Admin</a>
                            </Link>
                          </li>
                          <li>
                            <i className="fa-solid fa-tag"></i>
                            <Link href="/blog-details">
                              <a>Design</a>
                            </Link>
                          </li>
                          <li>
                            <i className="fa-solid fa-calendar-days"></i>
                            Feb 18, 2022
                          </li>
                        </ul>

                        <h3>
                          <Link href="/blog-details">
                            <a>Top 21 Must-Read Blogs For Creative Agencies</a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
