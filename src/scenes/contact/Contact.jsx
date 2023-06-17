import "./Contact.css";
import Header from "../global/Header";
import InfoBox from "../../components/infoBox/InfoBox";
import { IconButton } from "@mui/material";
import {
  GitHub,
  Telegram,
  LinkedIn,
  Instagram,
  Portrait,
  Email,
  Phone,
  Place,
  Share,
} from "@mui/icons-material";
const Contact = () => {
  return (
    <div>
      <Header section="contact" />
      <section id="contact" className="section contact">
        <div className="container">
          <div class="section-title">
            <h2>Contact</h2>
            <p>Contact Me</p>
          </div>

          <div class="row mt-2">
            <div class="col-md-6 d-flex align-items-stretch">
              <div className="info-box">
                <IconButton className="bx">
                  <Place />
                </IconButton>
                <InfoBox title="My Address">
                  <p>Mashhad, Iran</p>
                </InfoBox>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
              <div className="info-box">
                <IconButton className="bx">
                  <Share />
                </IconButton>
                <InfoBox title="Social Profiles">
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
                </InfoBox>
              </div>
            </div>
            <div class="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <IconButton className="bx">
                  <Email />
                </IconButton>
                <InfoBox title="Email Me">
                  <p>maryam_imani22@yahoo.com</p>
                </InfoBox>
              </div>
            </div>
            <div class="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <IconButton className="bx">
                  <Phone />
                </IconButton>
                <InfoBox title="Call Me">
                  <p>+98 9216921455</p>
                </InfoBox>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
