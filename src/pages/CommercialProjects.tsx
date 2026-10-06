import ArchiveHeading from "../components/ArchiveHeading";
import ProjectCard from "../components/ProjectCard";

import { projects } from "../data/projects";

export default function CommercialProjects() {
  return (
    <>
      <section className="archive-hero">
        <div className="container">
          <a href="/" className="back-btn">
            <div className="icon icon-move-left" aria-hidden="true"></div>
          </a>
          <ArchiveHeading
            title="Commercial Projects"
            text="Projects I've built and contributed to for companies and clients.
Not just ideas — real products in use."
          />
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <div className="project-cards-grid">
            {projects.commercial.map((p) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                desc={p.desc}
                stack={p.stack}
                image={p.image}
                url={p.url}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="alert-bar">
        <div className="container">
          <div className="icon icon-circle-alert" aria-hidden="true"></div>
          <p>
            Some projects shown in here are now maintained by other developers,
            so the current versions may differ slightly from the original work
            displayed here.
          </p>
        </div>
      </div>
    </>
  );
}
