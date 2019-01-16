import React, { Component } from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';
import './CarteBijouxTop.css';

const bijoux = [
  {
    id: 1,
    nom: "Bague plate en argent",
    prix: "25 euros",
    image: "medias/bague-medaille-plate-en-argent.jpg"
  },
  {
    id: 2,
    nom: "Boucle d'oreilles bleu marine",
    prix: "30 euros",
    image: "medias/boucles-d-oreilles-cercle-evide-perles-bleu-marine.jpg"
  },
  {
    id: 3,
    nom: "Bracelet demi-jonc bouddha",
    prix: "55 euros",
    image: "medias/demi-jonc-chainette-tete-de-bouddha-en-argent.jpg"
  },
  {
    id: 7,
    nom: "Collier chaine et pompon",
    prix: "30 euros",
    image: "medias/collier-chaine-medaille-et-pompon.jpg"
  },
]

class CarteBijouxTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bijoux,
    }
  }


  render() {
    return (
      <div className="CarteBijouxTop">
        <Container className="container-carte-bijoux-top">
          <Row className="ligne-carte-bijoux-top">
            <Col className="col-titre-carte-bijoux-top" lg="4">
              <h2>Nos coups de coeur</h2>
            </Col>
          </Row>
          <Row className="ligne-carte-bijoux">
            {this.state.bijoux.map((element) => (
              <Col lg="3">
                <Card className="carte-bijoux-top">
                  <CardImg className="carte-image-bijoux" top src={element.image} alt="Card image cap" />
                  <CardBody className="corps-carte-bijoux">
                    <CardTitle>{element.nom}</CardTitle>
                    <CardSubtitle className="sous-titre-carte-bijoux">{element.prix}</CardSubtitle>
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

export default CarteBijouxTop;