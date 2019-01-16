import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';

const Footer = () => (
  <div className="Footer">
    <Container fluid className="container-footer">
      <Row>
        <Col>
          <ul className="liste-footer">
            <li>
              Contact
            </li>
            <li>
              Mentions légales
            </li>
          </ul>
        </Col>
        <Col>
          <ul className="liste-footer">
            <li>
              Les créations de Maya
            </li>
            <li>
              image
            </li>
          </ul>
        </Col>
        <Col>
          <ul className="liste-footer">
            <li>
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