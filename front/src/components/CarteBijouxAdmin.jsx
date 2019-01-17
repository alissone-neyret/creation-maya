import React, { Component } from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';
import './CarteBijouxAdmin.css';

class CarteBijouxAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bijoux: [],
      ajout: false,
    }
    this.ajoutCarte = this.ajoutCarte.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/catalogue")
      .then(response => response.json())
      .then(data => {
        this.setState({
          bijoux: data,
        })
      })
  }

  ajoutCarte() {
    this.setState({
      ajout: true,
    })
  }

  render() {
    const { ajout } = this.state;
    return (
      <div className="CarteBijouxAdmin">
        {ajout === false
          ?
          <Container>
            <Row className="ligne-titre-bijoux">
              <Col lg="5">
                <h3>Administration du catalogue</h3>
              </Col>
            </Row>
            <Row className="ligne-titre-bijoux">
              <Col lg="3">
                <Button onClick={this.ajoutCarte} className="bouton-ajout-article">Ajouter un article</Button>
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
          :
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
            <Row className="ligne-nouvelle-carte">
              <Col lg="4">
                <Card className="carte-bijoux">
                  <CardImg className="carte-image-bijoux" top src="" alt="Card image cap" />
                  <CardBody className="corps-carte-bijoux">
                    <CardTitle>titre</CardTitle>
                    <CardSubtitle className="sous-titre-carte-bijoux">prix</CardSubtitle>
                    <hr />
                    <Button className="bouton-panier-bijoux" onClick={this.ajoutPanier}>Ajouter au panier</Button>
                  </CardBody>
                </Card>
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
      }
      </div>
    );
  }
}

export default CarteBijouxAdmin;