import { useState } from 'react';
import SectionDivider from '../Common/SectionDivider';
import JoinUsBackEndDeveloper from './JoinUsBackEndDeveloper';
import JoinUsForm from './JoinUsForm';
import JoinUsFrontEndDeveloper from './JoinUsFrontEndDeveloper';
import JoinUsProjectManager from './JoinUsProjectManager';

const jobProfiles = {
  backend: { label: 'Back-End Developer', jsx: <JoinUsBackEndDeveloper /> },
  frontend: { label: 'Front-End Developer', jsx: <JoinUsFrontEndDeveloper /> },
  projectLead: { label: 'Projektleiter', jsx: <JoinUsProjectManager /> },
} as const;

type JobProfiles = keyof typeof jobProfiles;

const ROLE_BTN_CLASSES = 'btn btn-primary';
const BTN_GRID_CLASSES = 'col-lg-' + 12 / Object.keys(jobProfiles).length;

const JoinUs = () => {
  const [profile, setProfile] = useState<JobProfiles>('backend');

  return (
    <section id="join-us" className="pt-100">
      <div className="container">
        <div className="section-title">
          <h2>Komm zu uns als:</h2>
        </div>

        <div className="row text-center">
          {Object.entries(jobProfiles).map(([key, { label }]) => {
            return (
              <div className={BTN_GRID_CLASSES + ' pb-60'} key={key}>
                <button
                  onClick={() => setProfile(key as JobProfiles)}
                  className={`${ROLE_BTN_CLASSES} ${profile === key && 'btn-primary--active'}`}
                >
                  {label}
                </button>
              </div>
            );
          })}
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="join-us-info pb-70">{jobProfiles[profile].jsx}</div>
          </div>
          <div className="col-lg-6">
            <h3 className="text-center">Bewirb Dich bei uns!</h3>
            <JoinUsForm />
          </div>
        </div>
      </div>

      <SectionDivider />
    </section>
  );
};

export default JoinUs;
