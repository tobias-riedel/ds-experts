import React from "react";
import Link from "next/link";

const LatestNews = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR BLOG</span>
            <h2>Our Latest News</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="bc-post-item">
                <div className="post-image">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img
                        src="/images/business-consulting/blog-img1.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="post-content">
                  <ul className="meta">
                    <li>
                      <i className="far fa-calendar-alt"></i> Dec 02, 2022
                    </li>
                    <li>
                      <i className="far fa-user-circle"></i>{" "}
                      <a href="#">Shelley Percy</a>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>
                        The Best Way to Get Consulting From Business Clients
                      </a>
                    </Link>
                  </h3>
                  <Link href="/blog-details">
                    <a className="link-btn">
                      Read More <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="bc-post-item">
                <div className="post-image">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img
                        src="/images/business-consulting/blog-img2.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="post-content">
                  <ul className="meta">
                    <li>
                      <i className="far fa-calendar-alt"></i> Dec 02, 2022
                    </li>
                    <li>
                      <i className="far fa-user-circle"></i>{" "}
                      <a href="#">Shelley Percy</a>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>Grow Your Counsulting Business and This Questions</a>
                    </Link>
                  </h3>
                  <Link href="/blog-details">
                    <a className="link-btn">
                      Read More <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="bc-post-item">
                <div className="post-image">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img
                        src="/images/business-consulting/blog-img3.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="post-content">
                  <ul className="meta">
                    <li>
                      <i className="far fa-calendar-alt"></i> Dec 02, 2022
                    </li>
                    <li>
                      <i className="far fa-user-circle"></i>{" "}
                      <a href="#">Shelley Percy</a>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>
                        How to Have a Good Relation With Clients in Your
                        Business
                      </a>
                    </Link>
                  </h3>
                  <Link href="/blog-details">
                    <a className="link-btn">
                      Read More <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
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
