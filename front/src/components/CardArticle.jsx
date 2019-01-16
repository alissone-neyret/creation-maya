import React, { Component } from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

const jewels = [
  {
    id: 1,
    nom: "bracelet argent",
    prix: "50 euros"
  },
  {
    id: 2,
    nom: "bracelet or",
    prix: "55 euros"
  }
]

class CardArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jewel: jewels,
      panierIn: false,
      panier: []
    }
    this.ajoutPanier = this.ajoutPanier.bind(this);
  }

  ajoutPanier(){
    this.state.panier.push(this.state.jewel.nom)

  }

  render() {
    return (
      <div className="CardArticle">
        <Container>
          <Row>
            {this.state.jewel.map((element) => (
              <Col lg="4">
                <Card>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{element.nom}</CardTitle>
                    <CardSubtitle>{element.prix}</CardSubtitle>
                    <Button onClick={this.ajoutPanier}>Ajouter au panier</Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              {this.state.panier}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CardArticle;