import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter-area">
        <div className="container">
          <div 
            className="newsletter-inner-area" 
            style={{ 
              backgroundImage: `url(/images/newsletter-bg.jpg)` 
            }}
          >
            <div className="newsletter-content">
              <span className="sub-title">Get Started Instantly!</span>
              <h2>Get the only new update from this newsletter</h2>

              <form 
                className="newsletter-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  required
                />
                <button type="submit">Subscribe!</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
