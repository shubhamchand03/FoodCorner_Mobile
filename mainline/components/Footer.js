import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Contact Us: +91-8944569873</Col>
          <Col className="text-center py-3">Copyright &copy; FOOD-CORNER</Col>
          <Col className="text-center py-3">Email Us: foodcorner@team8.com</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
