export default function Projects() {
  const projectList = [
    {
      title: "SIMKU",
      information:
        "Team project during the Final Year Summative Assessment, developing a class financial management web application for savings and class funds, refined with an attendance system to replace manual record-keep",
      type: "Web",
      typeInform: "Web Manajement",
      tech: "Laravel",
      techInform: "Tech",
      gambar: "fake1.png",
    },
    {
      title: "TertibSMK",
      information:
        "a personal project in designing a web app for a plan to create a system for a school",
      type: "UI/UX",
      typeInform: "Web Design",
      tech: "Laravel",
      techInform: "Tech",
      gambar: "fake1.png",
    },
  ];

  return (
    <section id="project">
      <h2 className="judul">My Projects</h2>
      <div className="project-container">
        {projectList.map((p, i) => (
          <div key={i} className="project-card">
            <img
              src={`/img/${p.gambar}`}
              alt={`${p.title}-image`}
              className="project-image"
            />
            <div className="content-project">
              <h3 className="c-white-1">{p.title}</h3>
              <p>{p.information}</p>
              <div className="desk-project">
                <div className="type item">
                  <h4>{p.type}</h4>
                  <p>{p.typeInform}</p>
                </div>
                <div className="tech item">
                  <h4>{p.tech}</h4>
                  <p>{p.techInform}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
