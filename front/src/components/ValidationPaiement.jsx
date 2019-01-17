import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './ValidationPaiement.css';

const ValidationPaiement = () => (
  <div className="ValidationPaiement">
    <Container>
      <Row className="ligne-validation">
        <Col lg="3">
          <img className="image-validation" src="/medias/icon-valider.png.png" alt="icone valider" />
        </Col>
      </Row>
      <Row className="ligne-confirmation">
        <Col lg={{ size: 10, offset: 1}}>
          <p>Votre paiement a bien été accepté et votre commande va être préparée</p>
        </Col>
      </Row>
      <Row className="bouton-retour">
        <Col lg={{ size: 4, offset: 1}}>
          <Button className="retour-accueil"><Link className="lien-bouton" to="/">Retour à l'accueil</Link></Button>
        </Col>
      </Row>
    </Container>
  </div>
)

export default ValidationPaiement;