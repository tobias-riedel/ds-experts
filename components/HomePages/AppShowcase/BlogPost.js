import React from "react";
import Link from "next/link";

const BlogPost = () => {
  return (
    <>
      <div className="bg-F7F7FF pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="app-sub-title">BLOG POST</span>
            <h2>Latest Article From Our Blog</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="app-blog-post">
                <div className="image">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img src="/images/blog/blog1.jpg" alt="blog" />
                    </a>
                  </Link>

                  <Link href="/blog-grid">
                    <a className="tag">Branding</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="fa-solid fa-calendar"></i>
                      April 14, 2022
                    </li>
                    <li>
                      <i className="fa-solid fa-comment"></i>
                      <Link href="/blog-details">
                        <a>(0) Comment</a>
                      </Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>
                        Branding involves developing strategy to create a point
                        of differentiation
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="app-blog-post">
                <div className="image">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img src="/images/blog/blog2.jpg" alt="blog" />
                    </a>
                  </Link>
                  <Link href="/blog-grid">
                    <a className="tag">Agency</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="fa-solid fa-calendar"></i>
                      April 13, 2022
                    </li>
                    <li>
                      <i className="fa-solid fa-comment"></i>
                      <Link href="/blog-details">
                        <a>(4) Comment</a>
                      </Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>
                        Design is a plan or specification for the construction
                        of an object
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="app-blog-post">
                <div className="image">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img src="/images/blog/blog3.jpg" alt="blog" />
                    </a>
                  </Link>
                  <Link href="/blog-grid">
                    <a className="tag">Marketing</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="fa-solid fa-calendar"></i>
                      April 12, 2022
                    </li>
                    <li>
                      <i className="fa-solid fa-comment"></i>
                      <Link href="/blog-details">
                        <a>(2) Comment</a>
                      </Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>
                        Branding involves developing strategy to create a point
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
