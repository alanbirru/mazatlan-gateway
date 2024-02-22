import "../src/css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="icons-container">
          <a
            href="https://www.facebook.com/profile.php?id=61555346020627&mibextid=ZbWKwL"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faSquareFacebook}
              className="facebook-icon"
            />
          </a>

          <a href="https://www.instagram.com/mazatlan_gateway/" target="_blank">
            <FontAwesomeIcon
              icon={faSquareInstagram}
              className="instagram-icon"
            />
          </a>

          <a
            href="https://x.com/Mazatlangateway?t=oMiYO7osB4k6PkWTCopwug&s=09 "
            target="_blank"
          >
            <FontAwesomeIcon icon={faSquareXTwitter} className="x-icon" />
          </a>

          <a href="https://www.youtube.com/@MazatlanGateway" target="_blank">
            <FontAwesomeIcon icon={faYoutube} className="youtube-icon" />
          </a>
        </div>

        <div>
          <span>© Mazatlan Gateway 2024</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
