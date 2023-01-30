import React from "react";
import Link from "next/link";

const LatestBlogPost = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title style-two">
            <h2>Latest Blog Post</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="pp-post-item">
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
                      <a>Top 5 Tips To Create An Eye-Catching Website</a>
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
              <div className="pp-post-item">
                <div className="post-content">
                  <ul className="meta">
                    <li>
                      <i className="far fa-calendar-alt"></i> Dec 03, 2022
                    </li>
                    <li>
                      <i className="far fa-user-circle"></i>{" "}
                      <a href="#">Stevn Smith</a>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>Improve Marketing Techniques For Lead Generation</a>
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
              <div className="pp-post-item">
                <div className="post-content">
                  <ul className="meta">
                    <li>
                      <i className="far fa-calendar-alt"></i> Dec 02, 2022
                    </li>
                    <li>
                      <i className="far fa-user-circle"></i>{" "}
                      <a href="#">David Warner</a>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>Esit And A Case For Successful Fast Delivery</a>
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

export default LatestBlogPost;
