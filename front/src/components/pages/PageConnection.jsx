import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Card, Button, CardTitle, } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NavbarMain from '../NavbarMain';
import Footer from '../Footer';
import './PageConnection.css';

class PageConnection extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="PageConnection">
        <header>
          <NavbarMain />
        </header>
        <section>
          <Container className="container-page-connection">
            <Row className="ligne-titre-connection"><h3>Se connecter</h3></Row>
            <Row className="ligne-page-connection">
              <Col>
                <Form className="formulaire-page-connection">
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input required type="email" name="email" placeholder="exemple@gmail.com" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="mdp">Mot de passe</Label>
                    <Input type="password" name="password" />
                  </FormGroup>
                  <NavLink to="/panier"><Button>Connection</Button></NavLink>
                </Form>
              </Col>
              <Col>
                <Card body className="carte-inscription">
                  <CardTitle>Pas encore inscrit ?</CardTitle>
                  <NavLink to="/profil"><Button>Créer mon compte</Button></NavLink>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default PageConnection;