import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/MoodFlix.png";
import projImg2 from "../assets/img/Dermorax.png";
import projImg3 from "../assets/img/TechSolveForum.png";
import projImg4 from "../assets/img/Athlitismos.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import "../styles/Projects.css"; // Ensure you have this CSS file

export const Projects = () => {
  const projects = [
    {
      title: "MoodFlix: A movie recommendation system based on emotions",
      description: "Developed a hybrid ML-powered application that uses image processing and Convolutional Neural Networks (CNN) to detect user emotions and provide personalized movie recommendations using advanced machine learning concepts to enhance user engagement.",
      imgUrl: projImg1,
    },
    {
      title: "Dermorax: Skin Cancer Detection Application (Group Project)",
      description: "Developed a mobile application using Android Studio and Kotlin,allowing patients to upload images of suspected lesions for diagnosis. The app uses image processing and Convolutional Neural Networks (CNN) to analyze the images and determine whether the lesion is cancerous or not.",
      imgUrl: projImg2,
    },
    {
      title: "TechSolveForum: Technical Question & Answer Websitie",
      description: "Developed a website for users to post and answer technical questions, with upvote and downvote features. Implemented CRUD operations and integrated RESTful APIs using the MVC architecture in CodeIgniter for efficient and scalable development. ",
      imgUrl: projImg3,
    },
    {
      title: "Athlitismos : A sports equipment website",
      description: "Developed a dynamic e-commerce website for sports equipment, featuring CSS-based navigation, a query form with JavaScript validation, and a section for automated product price calculations. Utilized forms, buttons, and menus to provide a responsive and user friendly interface. ",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Here are some of the projects I've worked on, showcasing my skills in Java Spring Boot, database management, and problem-solving. Click on any project to learn more!
                  </p>
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
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
