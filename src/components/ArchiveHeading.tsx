import "../styles/archive-heading.css";

type Props = {
  title?: string;
  text?: string;
};

export default function ArchiveHeading({
  title = "Archive Heading",
  text = "",
}: Props) {
  return (
    <div className="archive-heading">
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
