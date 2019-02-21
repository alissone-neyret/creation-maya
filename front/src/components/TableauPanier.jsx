import React, { Component } from 'react';
import { Table, Container, Row, Col } from 'reactstrap';
import './TableauPanier.css';

let total = 0;
let prixTotal = [];

class TableauPanier extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.resultat = this.resultat.bind(this);
  }

  resultat () {    
    for (let i = 0; i < this.props.panier.length; i++ ) {
      total += this.props.panier[i].prix
      console.log("total boucle", total)
    }
    console.log("total boucle2", total)
    return total    
  }

  render() {
    
    return (
      <div className="TableauPanier">
        <Container className="container-panier">
          <Row className="ligne-titre-panier">
            <Col lg={{ size: 3, offset: 1 }}>
              <h2>Mon Panier</h2>
            </Col>
          </Row>
          <Row className="ligne-tableau-panier">
            <Table borderless>
              {this.props.panier.map((element) => (
                prixTotal.push(element.prix),
                <tr key={element.id}>
                  <td className="td-image"><img className="image-panier" src={element.image} alt="bijoux article" /></td>
                  <td className="td-panier">{element.nom}</td>
                  <td className="td-panier">{element.prix} euros</td>
                </tr>
              ))}
              {console.log("tableau1", this.props.panier)}
              {console.log("tableau2", prixTotal)}
            </Table>
            {console.log("tableau3", this.props.panier)}
          </Row>
        </Container>
      </div>
    );
  }
}

export default TableauPanier;