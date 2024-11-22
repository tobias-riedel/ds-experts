import { Expert } from '@prisma/client';
import SectionDivider from '../Common/SectionDivider';
import ExpertCard from './ExpertCard';

// TODO: Remove
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const expertsStatic: Partial<Expert>[] = [
  {
    img: 'Daniel-Schenk.png',
    firstName: 'Daniel',
    lastName: 'Schenk',
    role: 'Senior Projektleiter',
  },
  {
    img: 'Madelaine-Fröhlich.png',
    firstName: 'Madelaine',
    lastName: 'Fröhlich',
    role: 'Backoffice',
  },
  {
    img: 'Michael-Heit.png',
    firstName: 'Michael',
    lastName: 'Heit',
    role: 'Projektleiter',
  },
  {
    img: 'Marco-Marquardt.png',
    firstName: 'Marco',
    lastName: 'Marquardt',
    role: 'Projektleiter',
  },
  {
    img: 'Tobias-Riedel.png',
    firstName: 'Tobias',
    lastName: 'Riedel',
    role: 'Software Developer',
  },
];

const Team = ({ data: experts }: { data: Expert[] }): JSX.Element => {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  const currentExperts = experts?.filter((expert) => !expert.endedAt || today <= new Date(expert.endedAt)) ?? [];
  const formerExperts = experts?.filter((expert) => expert.endedAt && today > new Date(expert.endedAt)) ?? [];

  return (
    <section id="team" className="pt-100">
      <div className="container">
        <div className="section-title">
          <h2>Unsere Experts</h2>
        </div>

        {experts?.length === 0 ? (
          <h3 className="text-center">Keine Experten eingetragen!</h3>
        ) : (
          <>
            <div className="row justify-content-between">
              {currentExperts?.map((expert, idx) => (
                <div className="col-lg-2 col-md-4 col-6" key={idx}>
                  <ExpertCard data={expert} />
                </div>
              ))}
            </div>

            {formerExperts?.length > 0 && (
              <>
                <h3 className="text-center">Ehemalige Experts</h3>
                <div className="row justify-content-between">
                  {formerExperts?.map((expert, idx) => (
                    <div className="col-lg-2 col-md-4 col-6 former-employees" key={idx}>
                      <ExpertCard data={expert} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>

      <SectionDivider />
    </section>
  );
};

export default Team;
