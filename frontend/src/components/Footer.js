import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">         
          <Col size={12} sm={6}>
            {/* Resume download button with no underline */}
            <a href="Mihin Ratnayake CV.pdf" download className="resume-link">
  <         button className="resume-button">Download Resume <ArrowRightCircle size={25} /></button>
          </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Mihinr"><img src={navIcon4} alt="Github" /></a>
              <a href="https://www.linkedin.com/in/mihin-ratnayake-8295b1195/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/mihin.ratnayake"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://www.instagram.com/mihinn.r/"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
