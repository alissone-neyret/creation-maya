import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';

const Footer = () => (
  <div className="Footer">
    <Container fluid className="container-footer">
      <Row>
        <Col>
          <ul className="liste-footer">
            <li className="element-liste-footer">
              Contact
            </li>
            <li>
              Mentions légales
            </li>
          </ul>
        </Col>
        <Col>
          <ul className="liste-footer-logo">
            <li>
              <img src="/medias/logo200White.png" alt="logo" />
            </li>
          </ul>
        </Col>
        <Col>
          <ul className="liste-footer">
            <li className="element-liste-footer">
              Paiement
            </li>
            <li>
              Guide des tailles
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Footer;