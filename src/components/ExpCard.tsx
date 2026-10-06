import expLogo from "../assets/exp-logos/logo.png";
import "../styles/exp-card.css";

type Props = {
  position?: string;
  workedAt?: string;
  location?: string;
  date?: string;
  workType?: string;
  image?: string;
};

export default function ExpCard({
  position = "Web Developer",
  workedAt = "Self Employed",
  location = "Kandy, Sri Lanka",
  date = "Mar 2025 - Oct 2025",
  workType = "Freelance",
  image = expLogo,
}: Props) {
  return (
    <div className="exp-card">
      <div className="exp-card-left">
        <img
          className="exp-card-logo"
          src={image}
          alt={`Logo of ${workedAt}`}
          height={48}
          width={48}
          loading="lazy"
          aria-hidden="true"
        />
        <div className="exp-card-title">
          <p>{position}</p>
          <span>
            {workedAt} · {workType}{" "}
          </span>
        </div>
      </div>

      <div className="exp-card-right">
        <div className="exp-card-info-item exp-date">
          <i className="icon icon-calendar" aria-hidden="true"></i>
          {date}
        </div>
        <span className="exp-card-info-item exp-location">
          <i className="icon icon-map-pin" aria-hidden="true"></i>
          {location}
        </span>
      </div>
    </div>
  );
}
