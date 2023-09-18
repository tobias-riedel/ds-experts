import { Expert } from '@prisma/client';
import Image from 'next/image';

const DEFAULT_IMG = '/images/team/default.png';

const ExpertCard = ({ data }: { data?: Expert | null }): JSX.Element => {
  const fullName = `${data?.firstName || 'Vorname'} ${data?.lastName || 'Nachname'}`;

  return (
    <div className="team-card text-center" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
      <Image
        src={data?.img || DEFAULT_IMG}
        alt={`Porträt von ${fullName}`}
        title={fullName}
        className="rounded-circle shadow optimized-image"
        width={263}
        height={261}
      />

      <div className="team-caption">
        <h3>{fullName}</h3>
        <p>{data?.role || 'Rolle'}</p>
      </div>
    </div>
  );
};

export default ExpertCard;
