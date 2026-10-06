import "../styles/archive-heading.css";

type Props = {
  title?: string;
  text?: string;
};

export default function ArchiveHeading({
  title = "Archive Heading",
  text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, saepe.",
}: Props) {
  return (
    <div className="archive-heading">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
