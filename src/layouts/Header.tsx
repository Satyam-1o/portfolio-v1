import { Link } from "react-router-dom";
import githubIcon from "../assets/logos/bxl-github.svg?raw";
import linkedinIcon from "../assets/logos/bxl-linkedin.svg?raw";
import xIcon from "../assets/logos/bxl-x.svg?raw";

const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certificates", label: "Certificates" },
];

export default function Header() {
  return (
    <header>
      <div className="header-title">
        <Link to="/"> Satyam </Link>
        <span>—— Software Engineer</span>
      </div>
      <nav className="header-nav" aria-label="On this page">
        <div className="header-nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
      <div className="header-nav-social">
        <a href="https://github.com/Satyam-1o" aria-label="View GitHub profile">
          <i
            dangerouslySetInnerHTML={{ __html: githubIcon }}
            aria-hidden="true"
          />
        </a>
        <a href="https://x.com/satyam_o_" aria-label="View X profile">
          <i
            dangerouslySetInnerHTML={{ __html: xIcon }}
            aria-hidden="true"
          />
        </a>
        <a
          href="https://www.linkedin.com/"
          aria-label="View Linkedin profile"
        >
          <i
            dangerouslySetInnerHTML={{ __html: linkedinIcon }}
            aria-hidden="true"
          />
        </a>
      </div>
    </header>
  );
}