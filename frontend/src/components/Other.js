import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Other = () => {
  const other = [
    {
      title: "Badminton Player",
      duration: "2010 – Present",
      description: "Actively competing in badminton tournaments, representing university and clubs, demonstrating teamwork, agility, and strategic thinking.",
    },
    {
      title: "Athletics",
      duration: "2014 – 2020",
      description: "Participated in track and field events, enhancing endurance, discipline, and competitive spirit.",
    },
    {
      title: "Chess",
      duration: "2010 – Present",
      description: "Passionate about chess, developing strategic thinking, patience, and problem-solving skills through competitive play.",
    },
  ];

  return (
    <section className="other" id="other">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Other Activities</h2>
                  <Row>
                    <Col size={12}>
                      <ul>
                        {other.map((activity, index) => (
                          <li key={index}>
                            <strong>{activity.title}</strong>
                            <br />
                            <span>{activity.duration}</span>
                            <p className="other-description">{activity.description}</p>
                          </li>
                        ))}
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
