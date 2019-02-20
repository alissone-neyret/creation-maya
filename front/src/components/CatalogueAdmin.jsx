import React, { Component } from 'react';
import { Row, Col, Button, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class CatalogueAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bijoux: [],
    }
    this.supprimerArticle = this.supprimerArticle.bind(this);
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

  supprimerArticle(id) {
    console.log(id.id)
    fetch('http://localhost:5000/maya-admin/' + id, {
      method: 'delete'
    })
      .then(res => res)
      .then( () => {
        fetch('http://localhost:5000/api/catalogue')
          .then( res => res.json())
          .then (data => this.setState({
            bijoux: data
          }))
      })
  }

  render() {
    return (
      <div className="CatalogueAdmin">
        
        <Row className="ligne-carte-bijoux">
          {this.state.bijoux.map((element) => (
            <Col lg="4">
              <Card className="carte-bijoux">
                <CardImg className="carte-image-bijoux" top src={element.image} alt="Card image cap" />
                <CardBody className="corps-carte-bijoux">
                  <CardTitle>{element.nom}</CardTitle>
                  <CardSubtitle className="sous-titre-carte-bijoux">{element.prix} euros</CardSubtitle>
                  <hr />
                  <Button onClick={this.supprimerArticle} color="danger">Supprimer article</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default CatalogueAdmin;