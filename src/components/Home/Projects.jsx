 
export default function Projects() {
  const projectList = [
    { title: "Project 1", type: "Web", tech: "Laravel", gambar : "fake1.png" },
    { title: "Project 2", type: "Web", tech: "React", gambar : "fake2.png" },
    { title: "Project 3", type: "Web", tech: "Laravel", gambar : "fake2.png" },
    { title: "Project 4", type: "UI/UX", tech: "Figma", gambar : "fake1.png" },
    { title: "Project 5", type: "UI/UX", tech: "Figma", gambar : "fake2.png" },
  ];

  return (
    <section id="project">
      <h2 className="judul">My Projects</h2>
      <div className="project-container">
        {projectList.map((p, i) => (
          <div key={i} className="project-card">
            <img src={`/img/${p.gambar}`} alt={`${p.title}-image`} className="project-image" />
            <div className="content-project">
              <h3 className="c-white-1">{p.title}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="desk-project">
                <div className="type item">
                  <h4>{p.type}</h4>
                  <p>{p.type} project.</p>
                </div>
                <div className="tech item">
                  <h4>{p.tech}</h4>
                  <p>Tech</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
