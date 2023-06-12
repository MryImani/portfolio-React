import './About.css'
import Header from "../global/Header";
import Skill from "../../components/skill/Skill";
const About = () => {
  const skillList = [
    { name: "HTML", percent: "100" },
    { name: "CSS", percent: "100" },
    { name: "Java Script", percent: "80" },
    { name: "React", percent: "70" },
    { name: "Git", percent: "100" },
    { name: "SQL", percent: "75" },
    { name: "JQuery", percent: "100" },
    { name: "Php", percent: "50" },
    { name: "Node.js", percent: "50" },
    { name: "Bootstrap", percent: "90" },

  ];  
  return (
    <div>
      <Header section="about" />
      <div id="about" className="section about">
        <div className="about-me container">
          <div className="section-title">
            <h2>About</h2>
            <p>Learn more about me</p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="../../assets/images/me.jpg"
                className="img-fluid"
                alt="me"
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Front-End Developer</h3>
              <p className="fst-italic">
                My education in computer engineering is software. In addition to
                coding, I love nature, music and dance. I also do yoga
                professionals.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Birthday:</strong> <span>27 Dec 1991</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Github:</strong> <span>github.com/MryImani</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong> <span>+989216921455</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>City:</strong> <span>Mashhad, IRAN</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Age:</strong> <span>32</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Degree:</strong> <span>Bachelor's degree</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong>{" "}
                      <span>maryam_imani22@yahoo.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Interested in web development and site optimization. My last job
                position is designing and re-engineering web-based system
                processes with the processmaker tool based on SAP best
                practice.In the work environment, I attach great importance to
                responsibility, honesty and discipline, and I interact well with
                people
              </p>
            </div>
          </div>
        </div>

        <div className="skills container">
          <div className="section-title">
            <h2>Skills</h2>
          </div>

          <div className="row skills-content">
            {skillList.map((skill) => (
              <div className="col-lg-6">
                <Skill skill={skill.name} percent={skill.percent} key={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
