import githubIcon from "../assets/logos/bxl-github.svg?raw";
import linkedinIcon from "../assets/logos/bxl-linkedin.svg?raw";
import envelopeIcon from "../assets/logos/bx-envelope.svg?raw";
import xIcon from "../assets/logos/bxl-x.svg?raw";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-social">
          <a
            href="https://github.com/Satyam-1o"
            aria-label="View Github profile"
          >
            <i
              dangerouslySetInnerHTML={{ __html: githubIcon }}
              aria-hidden="true"
            />
          </a>
          <a
            href="https://x.com/satyam_o_"
            aria-label="View X profile"
          >
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
          <a href="mailto:satyam312004@gmail.com" aria-label="Send an email.">
            <i
              dangerouslySetInnerHTML={{ __html: envelopeIcon }}
              aria-hidden="true"
            />
          </a>
        </div>

        <p className="footer-quote">
          Code is like humor. When you have to explain it, it's bad.
        </p>

        <p className="footer-credit">© 2026 Satyam Kumar · built with care</p>
      </div>
    </footer>
  );
}