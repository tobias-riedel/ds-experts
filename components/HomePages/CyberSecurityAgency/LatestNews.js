import React from "react";
import Link from "next/link";

const LatestNews = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title white-color">
            <span className="sub-title">LATEST NEWS</span>
            <h2>
              Explore, Learn And Stay <span>Up To Date</span> With The Latest In
              Cyber
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="cs-blog-card with-black-color">
                <div className="tag">
                  <span>LATEST NEWS</span>
                </div>
                <ul className="post-meta">
                  <li>
                    <i className="fa-solid fa-calendar-days"></i> 17th January
                  </li>
                  <li>
                    <i className="fa-solid fa-comment"></i> 0 comment
                  </li>
                </ul>
                <h3>
                  <Link href="/blog-details">
                    <a>The Launch Of A Revamped User Referral Program</a>
                  </Link>
                </h3>
                <p>
                  We work hand-in-hand with industry-leading brands to help
                  redefine the possibilities and potential of digital
                  engagements We work.
                </p>
                <div className="info">
                  <img src="/images/cyber-security/user1.jpg" alt="image" />
                  <h3>Thomas Adison</h3>
                  <span>Manager</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="cs-blog-card with-black-color">
                <div className="tag">
                  <span>LATEST NEWS</span>
                </div>
                <ul className="post-meta">
                  <li>
                    <i className="fa-solid fa-calendar-days"></i> 17th January
                  </li>
                  <li>
                    <i className="fa-solid fa-comment"></i> 0 comment
                  </li>
                </ul>
                <h3>
                  <Link href="/blog-details">
                    <a>Complete Protection For All Your Devices</a>
                  </Link>
                </h3>
                <p>
                  We work hand-in-hand with industry-leading brands to help
                  redefine the possibilities and potential of digital
                  engagements We work.
                </p>
                <div className="info">
                  <img src="/images/cyber-security/user2.jpg" alt="image" />
                  <h3>James Anderson</h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="cs-blog-card with-black-color">
                <div className="tag">
                  <span>LATEST NEWS</span>
                </div>
                <ul className="post-meta">
                  <li>
                    <i className="fa-solid fa-calendar-days"></i> 17th January
                  </li>
                  <li>
                    <i className="fa-solid fa-comment"></i> 0 comment
                  </li>
                </ul>
                <h3>
                  <Link href="/blog-details">
                    <a>Online Security For Your Devices Antivirus</a>
                  </Link>
                </h3>
                <p>
                  We work hand-in-hand with industry-leading brands to help
                  redefine the possibilities and potential of digital
                  engagements We work.
                </p>
                <div className="info">
                  <img src="/images/cyber-security/user3.jpg" alt="image" />
                  <h3>Sarah Taylor</h3>
                  <span>Designer</span>
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
