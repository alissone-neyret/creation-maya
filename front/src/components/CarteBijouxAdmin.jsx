import React, { Component } from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';
import './CarteBijouxAdmin.css';

const bijoux = [
  {
    id: 1,
    nom: "Bracelet demi-jonc en argent",
    prix: "50 euros",
    image: "medias/femme-demi-jonc-argent.jpg"
  },
  {
    id: 2,
    nom: "Bracelet demi-jonc en or",
    prix: "55 euros",
    image: "medias/femme-demi-jonc-or.jpg"
  },
  {
    id: 3,
    nom: "Bracelet demi-jonc en or rose",
    prix: "55 euros",
    image: "medias/femme-demi-jonc-plaque-or-rose.jpg"
  },
  {
    id: 4,
    nom: "Bague plate en argent",
    prix: "25 euros",
    image: "medias/bague-medaille-plate-en-argent.jpg"
  },
  {
    id: 5,
    nom: "Boucle d'oreilles bleu marine",
    prix: "30 euros",
    image: "medias/boucles-d-oreilles-cercle-evide-perles-bleu-marine.jpg"
  },
  {
    id: 6,
    nom: "Bracelet demi-jonc bouddha",
    prix: "55 euros",
    image: "medias/demi-jonc-chainette-tete-de-bouddha-en-argent.jpg"
  },

]

class CarteBijouxAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bijoux,
    }
  }


  render() {
    return (
      <div className="CarteBijouxAdmin">
        <Container>
          <Row className="ligne-titre-bijoux">
            <Col lg="5">
              <h3>Administration du catalogue</h3>
            </Col>
          </Row>
          <Row className="ligne-titre-bijoux">
            <Col lg="3">
              <Button className="bouton-ajout-article">Ajouter un article</Button>
            </Col>
          </Row>
          <Row className="ligne-carte-bijoux">
            {this.state.bijoux.map((element) => (
              <Col lg="4">
                <Card className="carte-bijoux">
                  <CardImg className="carte-image-bijoux" top src={element.image} alt="Card image cap" />
                  <CardBody className="corps-carte-bijoux">
                    <CardTitle>{element.nom}</CardTitle>
                    <CardSubtitle className="sous-titre-carte-bijoux">{element.prix}</CardSubtitle>
                    <hr />
                    <Button className="bouton-panier-bijoux" onClick={this.ajoutPanier}>Ajouter au panier</Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default CarteBijouxAdmin;