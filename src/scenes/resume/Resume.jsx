import './Resume.css'
import Header from "../global/Header";
import ResumeItem from './ResumeItem';
const Resume = () => {
  return (
    <div id="resume" class="section resume">
      <Header section="resume" />
      <div class=" container">
        <div class="section-title">
          <h2>Resume</h2>
          <p>Check My Resume</p>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <h3 class="resume-title">Sumary</h3>
            <ResumeItem title="Maryam Imani">
              <p>
                <em>
                  Interested in web development and site
                  optimization.Experienced full-stack developer and software
                  supporter. Skilled in front-end, HTML,CSS, JS,MSSQL,ReactJs,
                  VueJs and Finance Software . Innovative and deadline-driven
                  web developer with 3+ years of experience .
                </em>
              </p>
              <p>
                <ul>
                  <li>Mashhad, Iran</li>
                  <li>(+98) 9216921455</li>
                  <li>maryam_imani22@yahoo.com</li>
                </ul>
              </p>
            </ResumeItem>
            <h3 class="resume-title">Education</h3>
            <ResumeItem title="Bachelor's degree in Computer Engineering">
              <h5>2010 - 2014</h5>
              <p>
                <em>University of Bojnord - Bojnord,Iran</em>
              </p>
            </ResumeItem>
            <h3 class="resume-title">Certifications and Licenses</h3>
            <ResumeItem title="Web Developer">
              <p>
                <ul>
                  <li>
                    <a
                      href="https://www.shecodes.io/certificates/3a055f09b3b62bf4b3fecfe15e86e079"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="certificate"
                    >
                      SheCodes React
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sololearn.com/certificates/CT-K03UFG2Q"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="certificate"
                    >
                      Sololearn React + Redux
                    </a>
                  </li>
                </ul>
              </p>
            </ResumeItem>
            <h3 class="resume-title">Links</h3>
            <ResumeItem title="">
              <p>
                <ul>
                  <li>
                    <a
                      href="https://github.com/MryImani"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="github"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://linkedin.com/in/maryam-imani-3980866b"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="linkedin"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </p>
            </ResumeItem>
          </div>
          <div class="col-lg-6">
            <h3 class="resume-title">Professional Experience</h3>
            <ResumeItem title="Web Developer">
              <h5>2021 - 2022</h5>
              <p>
                <em>Greenweb company - Mashhad</em>
              </p>
              <p>
                Design and production 8 projects of organizational processes on
                the web based on SAP with bpmn process maker tool
              </p>
              <p>
                <ul>
                  <li>
                    Employee welfare system (2OB_Manage_Employee_Benefits)
                  </li>
                  <li>
                    The strategic workforce planning system (58Q-Strategic
                    Workforce Planning)
                  </li>
                  <li>
                    Promotion and demotion system (FJ2-promotion-demotion)
                  </li>
                  <li>
                    Competencies and skills management system
                    (Center-Of-Capability-Information)
                  </li>
                  <li>Job profile process system (Job_Profile_Builder)</li>
                  <li>
                    The system of defining the identity, occupational and legal
                    information of the new employee
                  </li>
                  <li>career path system</li>
                  <li>User profile system (people profile)</li>
                </ul>
              </p>
            </ResumeItem>
            <ResumeItem title="Software supporter">
              <h5>2017 - 2019</h5>
              <p>
                <em>Pooya Algorithm Company - Mashhad</em>
              </p>
              <p>
                Training, deployment and support of paya accounting software
              </p>
            </ResumeItem>
            <ResumeItem title="Human Resources Expert">
              <h5>2016-2017</h5>
              <p>
                <em>
                  Negin Salamat Institute, Contractor of Health Center No. 1 in
                  Mashhad - Mashhad,Iran
                </em>
              </p>
              <p>
                <ul>
                  <li>Arranging and concluding the contract</li>
                  <li>
                    Introducing and organizing the ready-to-work forces of the
                    health center
                  </li>
                  <li>calculating salaries and wages</li>
                  
                </ul>
              </p>
            </ResumeItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
