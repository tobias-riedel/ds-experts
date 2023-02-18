import { useState, GetDerivedStateFromProps } from "react";
import SectionDivider from "../Common/SectionDivider";
import JoinUsBackEndDeveloper from "./JoinUsBackEndDeveloper";
import JoinUsForm from "./JoinUsForm";
import JoinUsFrontEndDeveloper from "./JoinUsFrontEndDeveloper";
import JoinUsProjectManager from "./JoinUsProjectManager";

const profiles = {
  backend: { key: "backend", value: "Back-End Developer" },
  frontend: { key: "frontend", value: "Front-End Developer" },
  projectLead: { key: "projectLead", value: "Projektleiter" },
} as const;

type Profiles = keyof typeof profiles;

const roleBtnClasses = "btn btn-primary";

const JoinUs = () => {
  const [profile, setProfile] = useState<Profiles>(profiles.backend.key);

  return (
    <section id="join-us" className="pt-100">
      <div className="container">
        <div className="section-title">
          <h2>Komm zu uns als:</h2>
        </div>

        <div className="row text-center">
          <div className="col-lg-4 pb-60">
            <button
              onClick={() => setProfile(profiles.backend.key)}
              className={`${roleBtnClasses} ${
                profile === profiles.backend.key && "btn-primary--active"
              }`}
            >
              Back-End Developer
            </button>
          </div>
          <div className="col-lg-4 pb-60">
            <button
              onClick={() => setProfile(profiles.frontend.key)}
              className={`${roleBtnClasses} ${
                profile === profiles.frontend.key && "btn-primary--active"
              }`}
            >
              Front-End Developer
            </button>
          </div>
          <div className="col-lg-4 pb-60">
            <button
              onClick={() => setProfile(profiles.projectLead.key)}
              className={`${roleBtnClasses} ${
                profile === profiles.projectLead.key && "btn-primary--active"
              }`}
            >
              Projektleiter
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="join-us-info pb-70">
              {profile === profiles.backend.key && <JoinUsBackEndDeveloper />}
              {profile === profiles.frontend.key && <JoinUsFrontEndDeveloper />}
              {profile === profiles.projectLead.key && <JoinUsProjectManager />}
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="text-center">Bewirb Dich bei uns!</h3>
            <JoinUsForm subject={`Bewerbung als ${profiles[profile].value}`} />
          </div>
        </div>
      </div>

      <SectionDivider />
    </section>
  );
};

export default JoinUs;
