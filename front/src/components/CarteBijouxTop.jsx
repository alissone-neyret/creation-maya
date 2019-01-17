import React, { Component } from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';
import './CarteBijouxTop.css';

class CarteBijouxTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bijoux: [],
    }
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/catalogue/top")
      .then(response => response.json())
      .then(data => {
        this.setState({
          bijoux: data,
        })
      })
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