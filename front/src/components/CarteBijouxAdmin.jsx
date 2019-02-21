import React, { Component } from 'react';
import {
  Button, Container, Row, Col, Alert
} from 'reactstrap';
import './CarteBijouxAdmin.css';
import CatalogueAdmin from './CatalogueAdmin';
import AjoutBijoux from './AjoutBijoux';

class CarteBijouxAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ajout: false,
      alerte: false,
    }
    this.ajoutCarte = this.ajoutCarte.bind(this);
    this.afficherAlerte = this.afficherAlerte.bind(this);
  }

  ajoutCarte() {
    this.setState({
      ajout: !this.state.ajout,
    })
  }

  afficherAlerte() {
    this.setState({
      alerte: true,
    })
  }


  render() {
    const { ajout, alerte } = this.state;
    return (
      <div className="CarteBijouxAdmin">
        <Container>
          <Row className="ligne-titre-bijoux">
            <Col lg="5">
              <h3>Gestion du catalogue</h3>
            </Col>
          </Row>
          <Row className="ligne-titre-bijoux">
            <Col lg="2">
              <Button onClick={this.ajoutCarte} className="bouton-ajout-article">Ajout article</Button>
            </Col>
          </Row>
          {ajout === false
            ?
            alerte
              ?
              <Alert color="success">
                L'article a bien été ajouté. <a href="/maya-admin" className="alert-link">Recharger la page</a>
              </Alert>
              :
            
           ""

          :
            <AjoutBijoux ajoutCarte={this.ajoutCarte}  afficherAlerte={this.afficherAlerte}/>
          }

          <CatalogueAdmin />
        </Container>
      </div>
    );
  }
}

export default CarteBijouxAdmin;