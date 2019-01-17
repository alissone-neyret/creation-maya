import React, { Component } from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col, FormGroup, Label, Input, FormText
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
              <Col lg={{ size:5, offset: 1}}>
                <h3>Administration du catalogue</h3>
              </Col>
            </Row>
            <Row className="ligne-titre-bijoux">
              <Col lg="2">
                <Button onClick={this.ajoutCarte} className="bouton-ajout-article">Ajout article</Button>
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
              <Col lg={{ size:5, offset: 1}}>
                <h3>Administration du catalogue</h3>
              </Col>
            </Row>
            <Row className="ligne-titre-bijoux">
              <Col lg="2">
                <Button className="bouton-ajout-article">Ajout article</Button>
              </Col>
            </Row>
            <Row className="ligne-nouvelle-carte">
              <Col lg="5">
                <Card className="carte-bijoux">
                  <CardBody className="corps-carte-bijoux">
                    <CardTitle><FormGroup>
                      <Label for="nom">Nom</Label>
                      <Input type="text" name="nom" placeholder="nom du bijoux" />
                    </FormGroup></CardTitle>
                    <CardSubtitle className="sous-titre-carte-bijoux">
                      <FormGroup>
                        <Label for="prix">Prix</Label>
                        <Input type="text" name="prix" />euros
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                          Télécharger l'image du bijoux
                        </FormText>
                      </FormGroup></CardSubtitle>
                    <hr />
                    <Button className="bouton-panier-bijoux" onClick={this.ajoutPanier}>Créer article</Button>
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