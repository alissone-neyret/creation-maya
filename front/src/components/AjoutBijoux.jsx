import React, { Component } from 'react';
import { Row, Col, Button, Card, CardBody, CardTitle, CardSubtitle, FormGroup, Label, Input  } from 'reactstrap';


class AjoutBijoux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prix: "",
      image: "",
    }
    this.ajoutBijoux = this.ajoutBijoux.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  ajoutBijoux() {
    const data = {
      nom: this.state.nom,
      prix: this.state.prix,
      image: this.state.image,
    }
    fetch("http://localhost:5000/api/creation-bijoux",
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(
        res => this.setState({ "flash": res.flash }),
        err => this.setState({ "flash": err.flash })
      )
      .then(
        this.setState({
          nom: "",
          prix: "",
          image: "",
        })
      )
      .then(
        this.props.ajoutCarte()
      )
      .then(
        this.props.afficherAlerte()
      )
  }

  render() {
    return (
      <div className="AjoutBijoux">
        <Row className="ligne-nouvelle-carte">
          <Col lg="5">
            <Card className="carte-bijoux">
              <CardBody className="corps-carte-bijoux">
                <CardTitle>
                  <FormGroup>
                    <Label for="nom">Nom</Label>
                    <Input onChange={this.handleChange} type="text" name="nom" placeholder="nom du bijoux" value={this.state.nom} />
                  </FormGroup></CardTitle>
                <CardSubtitle className="sous-titre-carte-bijoux">
                  <FormGroup>
                    <Label for="prix">Prix</Label>
                    <Input onChange={this.handleChange} type="text" name="prix" value={this.state.prix} />euros
                      </FormGroup>
                  <FormGroup>
                    <Label for="image">Image</Label>
                    <Input onChange={this.handleChange} type="text" name="image" value={this.state.image} />
                  </FormGroup>
                </CardSubtitle>
                <hr />
                <Button className="bouton-panier-bijoux" onClick={this.ajoutBijoux}>Créer article</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AjoutBijoux;



