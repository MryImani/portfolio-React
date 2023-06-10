
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import {
  GitHub,
  Telegram,
  LinkedIn,
  Instagram,
  Portrait,
} from "@mui/icons-material";
const Header = (props) => {
  return (
    <header id="header" className={props.section !== "home" ? "header-top" : ""}>
      <div className="container">
        <h1>
          <Link to="/">Maryam Imani</Link>
        </h1>
        <h2>
          I'm a passionate <span>front-end developer</span> from Iran
        </h2>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link
                className={
                  props.section === "home" ? "nav-link active" : "nav-link"
                }
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={
                  props.section === "about" ? "nav-link active" : "nav-link"
                }
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={
                  props.section === "resume" ? "nav-link active" : "nav-link"
                }
                to="/resume"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                className={
                  props.section === "portfolio" ? "nav-link active" : "nav-link"
                }
                to="/portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className={
                  props.section === "contact" ? "nav-link active" : "nav-link"
                }
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <div class="social-links">
          <IconButton
            target={"_blank"}
            href={"https://github.com/MryImani"}
            title={"MryImani"}
          >
            <GitHub />
          </IconButton>
          <IconButton
            target={"_blank"}
            href={"https://telegram.com/Maryamimani"}
            title={"maryamimani"}
          >
            <Telegram />
          </IconButton>
          <IconButton
            target={"_blank"}
            href={"http://linkedin.com/in/maryam-imani-3980866b"}
            title={"maryam-imani"}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            target={"_blank"}
            href={"https://www.instagram.com/mryimn07"}
            title={"mryimn07"}
          >
            <Instagram />
          </IconButton>
          <IconButton
            target={"_blank"}
            href={"https://vishal.thetechnician.in/"}
            title={"Web Portfolio"}
          >
            <Portrait />
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
