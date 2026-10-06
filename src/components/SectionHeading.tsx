import "../styles/section-heading.css";

type Props = {
  title?: string;
  text?: string;
};

export default function SectionHeading({
  title = "Heading",
  text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, saepe.",
}: Props) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
