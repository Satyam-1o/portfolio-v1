import "../styles/skill-card.css";

type Props = {
  title?: string;
  icon?: string;
  /** Invert the icon (for dark-colored logos like Next.js / Express). */
  invert?: boolean;
};

export default function SkillCard({
  title = "JavaScript",
  icon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  invert = false,
}: Props) {
  return (
    <div className="skill-card">
      <img
        src={icon}
        width={20}
        height={20}
        loading="eager"
        alt={title}
        className={invert ? "invert" : undefined}
      />

      <span>{title}</span>
    </div>
  );
}
