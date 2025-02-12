import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {
  const experience = [
    {
      title: "Associate Software Engineer",
      company: "Enterprise Analytics",
      duration: "July 2022 – July 2023",
      description: "Conducted requirement gathering to customize software solutions based on customer needs, assessed existing capabilities, and identified areas for enhancement. Integrated new features and modified the codebase using SQL and PL/SQL within IFS Developer Studio. Gained hands-on experience with Enterprise Explorer and IFS Web applications (Apps8, Apps09, Apps10, Aurena), as well as IFS Cloud. Collaborated with project teams to deliver the next version of applications, leading troubleshooting efforts during Go-Live. Followed software development methodologies to ensure efficient and high-quality delivery.",
    },
    {
      title: "Freelance Software Engineer",
      duration: "August 2023 – Present",
      description: "As a freelance software engineer, I have worked on various projects focusing on developing custom software solutions for clients. Below are some of my key freelance responsibilities:",
    },
  ];

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Experience</h2>
                  <p>
                    Below is a summary of my professional experience, where I have gained valuable skills and contributed to diverse projects, consistently delivering high-quality solutions                  </p>
                  <Row>
                    <Col size={12}>
                    <ul>
                        {/* Associate Software Engineer experience */}
                        <li>
                            <strong>{experience[0].title}</strong>
                            <br />
                            <em>{experience[0].company}</em>
                            <br />
                            <span>{experience[0].duration}</span>                           
                            <p className="experience-description">{experience[0].description}</p>
                        </li>

                        {/* Freelance Software Engineer experience */}
                        <li>
                            <strong>{experience[1].title}</strong>
                            <br />
                            <span>{experience[1].duration}</span>
                            <p className="experience-description">{experience[1].description}</p>
                        </li>
                        </ul>
                    </Col>
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
