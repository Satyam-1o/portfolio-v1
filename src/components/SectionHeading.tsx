import "../styles/section-heading.css";

type Props = {
  title?: string;
  text?: string;
};

export default function SectionHeading({
  title = "Heading",
  text = "",
}: Props) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
