import { Fragment } from "react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

import { skillGroups } from "../data/skills";
import { experience } from "../data/experience";
import { education } from "../data/education";
import { certificates } from "../data/certificates";
import { projects } from "../data/projects";

import mgs from "../assets/mgs.jpg";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero">
        <div className="container">
          <div className="hero-image">
            <img
              src={mgs}
              height={180}
              width={180}
              alt="Upper-body portrait of a man with short black hair wearing a black t-shirt, looking directly at the camera against a plain gray background."
              loading="eager"
            />
          </div>
          <div className="hero-content">
            <div className="hero-heading">
              <h1>Satyam</h1>

              <span>
                <p>Software Engineer</p>
              </span>
            </div>

            <p className="hero-text">
              Go backend · Next.js · AWS · DevOps
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <SectionHeading
            title="Tech stack"
            text="The tools behind my builds."
          />

          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.label}>
                <h3>{group.label}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <Fragment key={skill.name}>
                      {skill.newRow ? (
                        <span className="skill-break" aria-hidden="true" />
                      ) : null}
                      <span className="skill-tag">
                        {skill.icon ? (
                          <span
                            className={`skill-logo${skill.invert ? " invert" : ""}`}
                            dangerouslySetInnerHTML={{ __html: skill.icon }}
                            aria-hidden="true"
                          />
                        ) : (
                          <span className="skill-code">
                            {skill.name.slice(0, 2).toUpperCase()}
                          </span>
                        )}
                        <span className="skill-name">{skill.name}</span>
                      </span>
                    </Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <SectionHeading
            title="Projects"
            text="Some things I've built and worked on."
          />

          <div className="project-cards-grid">
            {projects.slice(0, 1).map((p) => (
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
          <a href="/personal-projects" target="_blank">
            <button className="btn btn-lg btn-outline">
              See more
              <div className="icon icon-move-right" aria-hidden="true"></div>
            </button>
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="container">
          <SectionHeading title="Experience" text="My professional journey." />
          <div className="experience-list">
            {experience.map((item) => (
              <div className="exp-entry" key={item.workedAt}>
                <div className="exp-head">
                  <h4>{item.workedAt}</h4>
                  <span className="cert-date">{item.date}</span>
                </div>
                <p className="exp-role">
                  {item.position} · {item.location}
                </p>
                <p className="exp-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="container">
          <SectionHeading title="Education" text="School things." />
          <div className="experience-list">
            {education.map((item) => (
              <div className="exp-entry" key={item.institution}>
                <div className="exp-head">
                  <h4>{item.institution}</h4>
                  <span className="cert-date">{item.date}</span>
                </div>
                <p className="exp-role">{item.degree}</p>
                {item.desc ? <p className="exp-desc">{item.desc}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates">
        <div className="container">
          <SectionHeading
            title="Certificates"
            text="Certifications I've earned."
          />
          <ul className="cert-list">
            {certificates.map((cert) => (
              <li key={cert.title}>
                <span>{cert.title}</span>
                <span className="cert-date">{cert.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
