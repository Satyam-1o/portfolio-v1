import placeholderImage from "../assets/ProjectThumbs/project-placeholder.png";
import "../styles/project-card.css";

type Props = {
  title?: string;
  desc?: string;
  stack?: string[];
  image?: string;
  url?: string;
};

export default function ProjectCard({
  title = "Cafesy  —  E-Commerce Website",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, minus.",
  stack = [],
  image = placeholderImage,
  url = "https://github.com/Satyam-1o/",
}: Props) {
  return (
    <div className="project-card">
      <a href={url} target="_blank" rel="noreferrer">
        <img
          src={image}
          alt="Descriptive text"
          height={270}
          width={370}
          loading="lazy"
        />
        <h4>{title}</h4>
        <p>{desc}</p>
      </a>
      <div className="project-stack">
        {stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
