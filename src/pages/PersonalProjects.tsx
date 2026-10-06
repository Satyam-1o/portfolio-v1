import ArchiveHeading from "../components/ArchiveHeading";
import ProjectCard from "../components/ProjectCard";

import { projects } from "../data/projects";
import arrowLeftIcon from "../assets/icons/arrow-left.svg?raw";

export default function PersonalProjects() {
  return (
    <>
      <section className="archive-hero">
        <div className="container">
          <a href="/" className="back-btn">
            <div
              className="icon"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: arrowLeftIcon }}
            />
          </a>
          <ArchiveHeading
            title="Personal Projects"
            text="Projects I built to learn, experiment, and explore new ideas."
          />
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <div className="project-cards-grid">
            {projects.map((p) => (
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
    </>
  );
}
