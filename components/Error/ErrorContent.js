import React from "react";
import Link from "next/link";

const ErrorContent = () => {
  return (
    <>
      <div className="error-area ptb-100">
        <div className="container">
          <div className="error-content">
            <img src="/images/404.png" alt="Error" />
            <h3>Error 404: Seite nicht gefunden</h3>
            <p>
              Diese Seite existiert nicht oder ist vorübergehend nicht
              verfügbar.
            </p>

            <div className="back-btn">
              <Link href="/">
                <a className="btn btn-primary">Zurück zur Hauptseite</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorContent;
