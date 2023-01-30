import Link from "next/link";
import { useEffect, useState } from "react";
import JoinUsBackEndDeveloper from "./JoinUsBackEndDeveloper";
import JoinUsFrontEndDeveloper from "./JoinUsFrontEndDeveloper";
import JoinUsProjectManager from "./JoinUsProjectManager";
import JoinUsForm from "./JoinUsForm";

const profiles = {
  backend: "backend",
  frontend: "frontend",
  projectLead: "projectLead",
};

const JoinUs = () => {
  const [profile, setProfile] = useState(profiles.backend);

  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Komm zu uns als:</h2>
          </div>

          <div className="row">
            <p className="text-center">
              <button
                onClick={() => setProfile(profiles.backend)}
                className={
                  profile === profiles.backend
                    ? "btn btn-primary btn-primary--active"
                    : "btn btn-primary"
                }
              >
                Back-End Developer
              </button>{" "}
              <button
                onClick={() => setProfile(profiles.frontend)}
                className={
                  profile === profiles.frontend
                    ? "btn btn-primary btn-primary--active"
                    : "btn btn-primary"
                }
              >
                Front-End Developer
              </button>{" "}
              <button
                onClick={() => setProfile(profiles.projectLead)}
                className={
                  profile === profiles.projectLead
                    ? "btn btn-primary btn-primary--active"
                    : "btn btn-primary"
                }
              >
                Projektleiter
              </button>{" "}
            </p>
            <div className="col-lg-6 col-md-12">
              <div className="join-us-info">
                {profile === profiles.backend && <JoinUsBackEndDeveloper />}
                {profile === profiles.frontend && <JoinUsFrontEndDeveloper />}
                {profile === profiles.projectLead && <JoinUsProjectManager />}
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <JoinUsForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
