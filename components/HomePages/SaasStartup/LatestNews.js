import React from "react";
import Link from "next/link";

const LatestNews = () => {
  return (
    <>
      <div className="bg-dark pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">NEWS & ARTICLES</span>
            <h2>Our Latest News</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="saas-post-item bg-black saas-color">
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
                      <a>Some Important Rules to Start a New Business</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                  <Link href="/blog-details">
                    <a className="link-btn">
                      Read More <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="saas-post-item bg-black saas-color">
                <div className="post-content">
                  <ul className="meta">
                    <li>
                      <i className="far fa-calendar-alt"></i> Dec 03, 2022
                    </li>
                    <li>
                      <i className="far fa-user-circle"></i>{" "}
                      <a href="blog-2.html">Stevn Smith</a>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>Why Would You Need Some New Business</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                  <Link href="/blog-details">
                    <a className="link-btn">
                      Read More <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="saas-post-item bg-black saas-color">
                <div className="post-content">
                  <ul className="meta">
                    <li>
                      <i className="far fa-calendar-alt"></i> Dec 02, 2022
                    </li>
                    <li>
                      <i className="far fa-user-circle"></i>{" "}
                      <a href="blog-2.html">David Warner</a>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>Know Top Ten Rules for Corporate Business</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
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
