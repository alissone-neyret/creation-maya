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
        })
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
          <Row className="ligne-carte-bijoux">
            {this.state.bijoux[0] ? this.state.bijoux.map((element) => (
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