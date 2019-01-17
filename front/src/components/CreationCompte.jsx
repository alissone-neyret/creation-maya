import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './CreationCompte.css';

class CreationCompte extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      mdp: "",
      confirm_mdp: "",
      prenom: "",
      nom: "",
      adresse: "",
      complement_adresse: "",
      code_postal: "",
      ville: "",
      flash: "",
      modal: false,
    }
    this.updateEmailField = this.updateEmailField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  updateEmailField(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  handleSubmit(event) {
    console.log(JSON.stringify(this.state));
    event.preventDefault();
    this.setState({
      modal: !this.state.modal
    });
    const data = {
      email: this.state.email,
      mdp: this.state.mdp,
      prenom: this.state.prenom,
      nom: this.state.nom,
      adresse: this.state.adresse,
      complement_adresse: this.state.complement_adresse,
      code_postal: this.state.code_postal,
      ville: this.state.ville,
    }
    fetch("http://localhost:5000/api/creation-profil",
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
      console.log(data)
  }

  toggle(){
    this.setState({
      modal: !this.state.modal
    });
  }
  

  render() {
    return (
      <div className="CreationCompte">
        <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Votre compte a été créé</ModalHeader>
          <ModalBody>
            Vous allez recevoir un email de confirmation d'inscription.
          </ModalBody>
          <ModalFooter>
            <Button className="bouton-catalogue" onClick={this.toggle}><NavLink className="lien-catalogue-compte" to="/PageBijoux">Catalogue</NavLink></Button>{' '}
            <Button color="secondary" onClick={this.toggle}><NavLink to="/" className="lien-accueil-compte"> Retour à l'accueil</NavLink></Button>
          </ModalFooter>
        </Modal>
        </div>
        <Container>
          <Row className="ligne-formulaire">
            <Col lg="8">
              <h3 className="titre-compte">Créer un compte</h3>
              <Form className="formulaire">
                <FormGroup>
                  <Label for="prenom">Prénom</Label>
                  <Input onChange={this.updateEmailField} type="text" name="prenom" value={this.state.prenom} />
                </FormGroup>
                <FormGroup>
                  <Label for="nom">Nom</Label>
                  <Input onChange={this.updateEmailField} type="text" name="nom" value={this.state.nom} />
                </FormGroup>
                <FormGroup>
                  <Label for="adresse">Adresse</Label>
                  <Input onChange={this.updateEmailField} type="text" name="adresse" value={this.state.adresse} />
                </FormGroup>
                <FormGroup>
                  <Label for="complement_adresse">Complément d'adresse</Label>
                  <Input onChange={this.updateEmailField} type="text" name="complement_adresse" value={this.state.complement_adresse} />
                </FormGroup>
                <FormGroup>
                  <Label for="code_postal">Code Postal </Label>
                  <Input onChange={this.updateEmailField} type="text" name="code_postal" value={this.state.code_postal} />
                </FormGroup>
                <FormGroup>
                  <Label for="ville">Ville</Label>
                  <Input onChange={this.updateEmailField} type="text" name="ville" value={this.state.ville} />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input onChange={this.updateEmailField} type="email" name="email" placeholder="test@test.com" value={this.state.email} />
                </FormGroup>
                <FormGroup>
                  <Label for="mdp">Mot de passe</Label>
                  <Input onChange={this.updateEmailField} type="password" name="mdp" placeholder="Mot de passe" value={this.state.mdp} />
                </FormGroup>
                <FormGroup>
                  <Label for="confirm_mdp">Confirmer mot de passe</Label>
                  <Input onChange={this.updateEmailField} type="password" name="confirm_mdp" placeholder="password" value={this.state.confirm_mdp} />
                </FormGroup>
              </Form>
            </Col>
          </Row>
          <Row className="ligne-bouton-creation-compte">
            <Col lg={{ size:3, offset:1 }}>
              <Button className="bouton-creation-compte" onClick={this.handleSubmit}>Créer le compte</Button>
            </Col>
          </Row>
        </Container >
      </div >
    )
  }
}

export default CreationCompte;