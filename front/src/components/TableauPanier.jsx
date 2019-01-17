import React, { Component } from 'react';
import { Table, Container, Row, Col } from 'reactstrap';
import './TableauPanier.css';

class TableauPanier extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="TableauPanier">
        <Container>
          <Row className="ligne-titre-panier">
            <Col lg={{ size: 3, offset: 1 }}>
              <h2>Mon Panier</h2>
            </Col>
          </Row>
          <Row className="ligne-tableau-panier">
            <Table borderless>
              {this.props.panier.map((element) => (

                <tr>
                  <td className="td-image"><img className="image-panier" src={element.image} alt="bijoux article" /></td>
                  <td className="td-panier">{element.nom}</td>
                  <td className="td-panier">{element.prix}</td>
                </tr>
              ))}
            </Table>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TableauPanier;