 
export default function Projects() {
  const projectList = [
    { title: "Project 1", type: "Web", tech: "Laravel" },
    { title: "Project 2", type: "Web", tech: "React" },
    { title: "Project 3", type: "Web", tech: "Laravel" },
    { title: "Project 4", type: "UI/UX", tech: "Figma" },
    { title: "Project 5", type: "UI/UX", tech: "Figma" },
  ];

  return (
    <section id="project">
      <h2 className="judul">My Projects</h2>
      <div className="project-container">
        {projectList.map((p, i) => (
          <div key={i} className="project-card">
            <img src="/fake1.png" alt={`${p.title}-image`} className="project-image" />
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
