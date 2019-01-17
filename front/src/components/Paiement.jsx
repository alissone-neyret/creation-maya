import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Paiement.css';

class Paiement extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Container>
          <Row className="ligne-paiement">
            <Col lg="4">
              <Button className="bouton-valider-payer" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Valider la commande et payer</Button>
            </Col>
          </Row>
          <Row className="ligne-formulaire-paiement">
            <Col lg="5">
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    <Form className="formulaire-paiement" onSubmit={this.handleSubmit}>
                      <FormGroup>
                        <Label for="carte">Numéro de Carte</Label>
                        <Input type="text" name="carte"/>
                      </FormGroup>
                      <FormGroup>
                        <Label for="nom">Nom du titulaire</Label>
                        <Input type="text" name="nom" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="expire">Expire le</Label>
                        <Input type="text" name="expire" placeholder="MM/AA" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="crypto">Cryptogramme</Label>
                        <Input type="text" name="crypto" />
                      </FormGroup>
                      <Button className="bouton-paiement"><Link className="lien-validation" to ="/pageValidation">Valider le paiement</Link></Button>
                    </Form>
                  </CardBody>
                </Card>
              </Collapse>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default Paiement;