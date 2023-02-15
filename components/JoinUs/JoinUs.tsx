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

const roleBtnClasses = "btn btn-primary";

const JoinUs = () => {
  const [profile, setProfile] = useState(profiles.backend);

  return (
    <section id="join-us" className="ptb-100">
      <div className="container">
        <div className="section-title">
          <h2>Komm zu uns als:</h2>
        </div>

        <div className="row text-center">
          <div className="col-lg-4 pb-60">
            <button
              onClick={() => setProfile(profiles.backend)}
              className={`${roleBtnClasses} ${
                profile === profiles.backend && "btn-primary--active"
              }`}
            >
              Back-End Developer
            </button>
          </div>
          <div className="col-lg-4 pb-60">
            <button
              onClick={() => setProfile(profiles.frontend)}
              className={`${roleBtnClasses} ${
                profile === profiles.frontend && "btn-primary--active"
              }`}
            >
              Front-End Developer
            </button>
          </div>
          <div className="col-lg-4 pb-60">
            <button
              onClick={() => setProfile(profiles.projectLead)}
              className={`${roleBtnClasses} ${
                profile === profiles.projectLead && "btn-primary--active"
              }`}
            >
              Projektleiter
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="join-us-info pb-70">
              {profile === profiles.backend && <JoinUsBackEndDeveloper />}
              {profile === profiles.frontend && <JoinUsFrontEndDeveloper />}
              {profile === profiles.projectLead && <JoinUsProjectManager />}
            </div>
          </div>
          <div className="col-lg-6">
            <JoinUsForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
