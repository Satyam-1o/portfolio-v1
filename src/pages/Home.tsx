import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import ExpCard from "../components/ExpCard";
import ProjectCard from "../components/ProjectCard";
import Tabs from "../components/Tabs";

import { skills } from "../data/skills";
import { experience } from "../data/experience";
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
              Go backend · Next.js full stack · 3rd-year CS student proficient
              in AWS.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <SectionHeading
            title="Skills"
            text="Languages, frameworks, and tools I know."
          />

          <div className="skill-cards">
            {skills.map((item) => (
              <SkillCard
                key={item.title}
                title={item.title}
                icon={item.iconURL}
                invert={item.invert}
              />
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

          <Tabs
            labels={["Personal", "Commercial"]}
            panels={[
              <div key="personal">
                <div className="project-cards-grid">
                  {projects.personal.slice(0, 1).map((p) => (
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
              </div>,
              <div key="commercial">
                <div className="project-cards-grid">
                  {projects.commercial.slice(0, 1).map((p) => (
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
                <a href="/commercial-projects" target="_blank">
                  <button className="btn btn-lg btn-outline">
                    See more
                    <div className="icon icon-move-right" aria-hidden="true"></div>
                  </button>
                </a>
              </div>,
            ]}
          />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="container">
          <SectionHeading title="Experience" text="My professional journey." />
          <div className="experience-cards">
            {experience.map((item) => (
              <ExpCard
                key={item.workedAt + item.date}
                image={item.image}
                position={item.position}
                workedAt={item.workedAt}
                location={item.location}
                date={item.date}
                workType={item.type}
              />
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
