import { Project } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

const DEFAULT_IMG = '/images/references/default.jpg';

const ProjectCard = ({ data }: { data?: Project | null }): JSX.Element => {
  return (
    <>
      <Image
        src={data?.img || DEFAULT_IMG}
        alt={`Referenzbild zu ${data?.projectName || 'Projektname'}`}
        width={510}
        height={700}
        sizes="(max-width: 576px) 95vw, (max-width: 768px) 45vw, (max-width: 992px) 30vw, (max-width: 1200px) 24vw, 20vw"
        className="optimized-image"
      />

      <div className="content text-center">
        <span>
          <div>
            <Link href="/">{data?.projectName || 'Projektname'}</Link>
          </div>
          <div>
            <Link href="/" className="ref-location">
              ({data?.city || 'Stadt'} )
            </Link>
          </div>
        </span>
      </div>
    </>
  );
};

export default ProjectCard;
