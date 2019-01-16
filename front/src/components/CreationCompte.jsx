import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './CreationCompte.css';

class CreationCompte extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      prenom: "",
      nom: "",
      adresse: "",
      complementAdresse: "",
      codePostal: "",
      ville: "",
      flash: "",
    }
    this.updateEmailField = this.updateEmailField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateEmailField(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  handleSubmit(event) {
    console.log(JSON.stringify(this.state));
    event.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
      prenom: this.state.prenom,
      nom: this.state.nom,
    }
    fetch("",
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
  }

  render() {
    return (
      <div className="CreationCompte">
        <Container className="container">
          <Row className="ligne-formulaire">
            <Col lg="8">
              <h3 className="titre-compte">Créer un compte</h3>
              <Form className="formulaire" onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="prenom">Prénom</Label>
                  <Input onChange={this.updateEmailField} type="text" name="name" value={this.state.prenom} />
                </FormGroup>
                <FormGroup>
                  <Label for="nom">Nom</Label>
                  <Input onChange={this.updateEmailField} type="text" name="lastname" value={this.state.nom} />
                </FormGroup>
                <FormGroup>
                  <Label for="adresse">Adresse</Label>
                  <Input onChange={this.updateEmailField} type="text" name="adresse" value={this.state.adresse} />
                </FormGroup>
                <FormGroup>
                  <Label for="complementAdresse">Complément d'adresse</Label>
                  <Input onChange={this.updateEmailField} type="text" name="complementAdresse" value={this.state.complementAdresse} />
                </FormGroup>
                <FormGroup>
                  <Label for="codePostal">Code Postal </Label>
                  <Input onChange={this.updateEmailField} type="text" name="codePostal" value={this.state.codePostal} />
                </FormGroup>
                <FormGroup>
                  <Label for="ville">Ville</Label>
                  <Input onChange={this.updateEmailField} type="text" name="ville" value={this.state.ville} />
                </FormGroup>
                <FormGroup>
                  <Label for="Email">Email</Label>
                  <Input onChange={this.updateEmailField} type="email" name="email" placeholder="test@test.com" value={this.state.email} />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Mot de passe</Label>
                  <Input onChange={this.updateEmailField} type="password" name="password" placeholder="Mot de passe" value={this.state.password} />
                </FormGroup>
                <FormGroup>
                  <Label for="confirmPassword">Confirmer mot de passe</Label>
                  <Input onChange={this.updateEmailField} type="password" name="confirmPassword" placeholder="password" value={this.state.confirmPassword} />
                </FormGroup>
              </Form>
            </Col>
          </Row>
          <Row className="ligne-bouton-creation-compte">
            <Col lg="3">
              <Button className="bouton-creation-compte"><Link className="lien-bouton" to="/panier">Créer le compte</Link></Button>
              <Button className="bouton"><Link className="lien-bouton" to="/signin">Sign In</Link></Button>
            </Col>
          </Row>
        </Container >
      </div >
    )
  }
}

export default CreationCompte;