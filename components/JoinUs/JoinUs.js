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
          <div className="section-title mb-30">
            <h2>Komm zu uns als:</h2>
          </div>

          <div className="row">
            <div className="text-center pb-60">
              <div
                onClick={() => setProfile(profiles.backend)}
                className={
                  profile === profiles.backend
                    ? "join-us-role join-us-role--active"
                    : "join-us-role"
                }
              >
                Back-End Developer
              </div>
              <div
                onClick={() => setProfile(profiles.frontend)}
                className={
                  profile === profiles.frontend
                    ? "join-us-role join-us-role--active"
                    : "join-us-role"
                }
              >
                Front-End Developer
              </div>
              <div
                onClick={() => setProfile(profiles.projectLead)}
                className={
                  profile === profiles.projectLead
                    ? "join-us-role join-us-role--active"
                    : "join-us-role"
                }
              >
                Projektleiter
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="join-us-info pb-70">
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
