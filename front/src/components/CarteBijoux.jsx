import React, { Component } from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';
import './CarteBijoux.css';

class CarteBijoux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bijoux: [],
    }
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/catalogue")
      .then(response => response.json())
      .then(data => {
        this.setState({
          bijoux: data,
          prixMin: 0,
          prixMax: 1000000000000,
        })
      })
      this.filtreMin = this.filtreMin.bind(this);
      this.filtreMiddle = this.filtreMiddle.bind(this);
      this.filtreMax = this.filtreMax.bind(this);
      this.filtreAll = this.filtreAll.bind(this);
  }

  filtreMin() {
    this.setState({
      prixMin: 0,
      prixMax: 50,
    })
  }

  filtreMiddle() {
    this.setState({
      prixMin: 50,
      prixMax: 100,
    })
  }
  
  filtreMax() {
    this.setState({
      prixMin: 100,
      prixMax: 1000000000000,
    })
  }

  filtreAll() {
    this.setState({
      prixMin: 0,
      prixMax: 1000000000000,
    })
  }


  render() {
    console.log(this.state.bijoux)
    return (
      <div className="CarteBijoux">
        <Container>
          <Row className="ligne-titre-bijoux">
            <Col lg="3">
              <h3>Les bijoux de Maya</h3>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="text-center" lg="3">
              <Button className="bouton-filtre" onClick={this.filtreMin}>{"< 50€"}</Button>
            </Col>
            <Col className="text-center" lg="3">
              <Button className="bouton-filtre" onClick={this.filtreMiddle}>{"50€-100€"}</Button>
            </Col>
            <Col className="text-center" lg="3">
              <Button className="bouton-filtre" onClick={this.filtreMax}>{"> 100€"}</Button>
            </Col>
            <Col className="text-center" lg="3">
              <Button className="bouton-filtre" onClick={this.filtreAll}>{"Tout voir"}</Button>
            </Col>
          </Row>
          <Row className="ligne-carte-bijoux">
            {this.state.bijoux[0] ? this.state.bijoux.filter(element => (
              (element.prix >= this.state.prixMin) && (element.prix <= this.state.prixMax) 
            )).map((element) => (
              <Col lg="4">
                <Card className="carte-bijoux">
                  <CardImg className="carte-image-bijoux" top src={element.image} alt="Card image cap" />
                  <CardBody className="corps-carte-bijoux">
                    <CardTitle>{element.nom}</CardTitle>
                    <CardSubtitle className="sous-titre-carte-bijoux">{element.prix} euros</CardSubtitle>
                    <hr />
                    <Button className="bouton-panier-bijoux" onClick={this.ajoutPanier}>Ajouter au panier</Button>
                  </CardBody>
                </Card>
              </Col>
            )) : <p>Rien</p>}
          </Row>
        </Container>
      </div>
    );
  }
}

export default CarteBijoux;