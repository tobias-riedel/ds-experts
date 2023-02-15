interface Experts {
  img: string;
  name: string;
  role: string;
}

const experts: Experts[] = [
  {
    img: "Daniel-Schenk.png",
    name: "Daniel Schenk",
    role: "Senior Projektleiter",
  },
  {
    img: "Michael-Heit.png",
    name: "Michael Heit",
    role: "Projektleiter",
  },
  {
    img: "Marco-Marquardt.png",
    name: "Marco Marquardt",
    role: "Projektleiter",
  },
  {
    img: "Tobias-Riedel.png",
    name: "Tobias Riedel",
    role: "Software Developer",
  },
  {
    img: "Madelaine-Fröhlich.png",
    name: "Madelaine Fröhlich",
    role: "Backoffice",
  },
];

const Team = () => {
  return (
    <section id="team" className="ptb-100">
      <div className="container">
        <div className="section-title">
          <h2>Unsere Experts</h2>
        </div>

        <div className="row justify-content-center">
          {experts.map((expert, idx) => (
            <div className="col-lg-2 col-sm-6" key={idx}>
              <div
                className="team-card text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <img
                  src={`/images/team/${expert.img}`}
                  alt={`Porträt von ${expert.name}`}
                  title={expert.name}
                  className="rounded-circle shadow"
                />

                <div className="team-caption">
                  <h3>{expert.name}</h3>
                  <p>{expert.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
