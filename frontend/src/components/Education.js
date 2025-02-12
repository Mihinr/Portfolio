import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Education = () => {
  const education = [
    {
      title: "Beng (Hons) in Software Engineering",
      institution: "University of Westminster, UK (UOW)",
      duration: "January 2021 – November 2024",
      description: "Pursued a degree in Software Engineering, gaining a comprehensive understanding of Java programming, database management, algorithms, software development methodologies, and practical problem-solving. Completed projects involving web development, machine learning, and database design.",
    },
    {
      title: "Advanced Level",
      institution: "S. Thomas' College, Mount Lavinia.",
      duration: "January 2017 – November 2020",
      description: "Completed advanced level on mathematics stream.",
    },
  ];

  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Education</h2>
                  <p>
                    Below is a summary of my educational background, showcasing my qualifications in Software Engineering.
                  </p>
                  <Row>
                    <Col size={12}>
                      <ul>
                        {/* BSc (Hons) in Software Engineering */}
                        <li>
                          <strong>{education[0].title}</strong>
                          <br />
                          <em>{education[0].institution}</em>
                          <br />
                          <span>{education[0].duration}</span>
                          <p className="education-description">{education[0].description}</p>
                        </li>

                        {/* Advanced Diploma in Software Engineering */}
                        <li>
                          <strong>{education[1].title}</strong>
                          <br />
                          <em>{education[1].institution}</em>
                          <br />
                          <span>{education[1].duration}</span>
                          <p className="education-description">{education[1].description}</p>
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
