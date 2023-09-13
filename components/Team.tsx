import { Expert } from '@prisma/client';
import Image from 'next/image';
import SectionDivider from './Common/SectionDivider';

interface Experts {
  img: string;
  name: string;
  role: string;
}

// TODO: Remove
const expertsStatic: Experts[] = [
  {
    img: 'Daniel-Schenk.png',
    name: 'Daniel Schenk',
    role: 'Senior Projektleiter',
  },
  {
    img: 'Madelaine-Fröhlich.png',
    name: 'Madelaine Fröhlich',
    role: 'Backoffice',
  },
  {
    img: 'Michael-Heit.png',
    name: 'Michael Heit',
    role: 'Projektleiter',
  },
  {
    img: 'Marco-Marquardt.png',
    name: 'Marco Marquardt',
    role: 'Projektleiter',
  },
  {
    img: 'Tobias-Riedel.png',
    name: 'Tobias Riedel',
    role: 'Software Developer',
  },
];

// FIXME: Get anonymous picture
const DEFAULT_EXPERT_IMG = '/images/team/team5.jpg';

const Team = ({ experts }: { experts: Expert[] }) => {
  return (
    <section id="team" className="pt-100">
      <div className="container">
        <div className="section-title">
          <h2>Unsere Experts</h2>
        </div>

        {experts?.length === 0 ? (
          <h3 className="text-center">Keine Experten eingetragen!</h3>
        ) : (
          <div className="row justify-content-between">
            {experts.map((expert, idx) => {
              const fullName = `${expert.firstName} ${expert.lastName}`;
              return (
                <div className="col-lg-2 col-md-4 col-6" key={idx}>
                  <div
                    className="team-card text-center"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <Image
                      src={expert.img || DEFAULT_EXPERT_IMG}
                      alt={`Porträt von ${fullName}`}
                      title={fullName}
                      className="rounded-circle shadow optimized-image"
                      width={263}
                      height={261}
                    />

                    <div className="team-caption">
                      <h3>{fullName}</h3>
                      <p>{expert.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <SectionDivider />
    </section>
  );
};

export default Team;
