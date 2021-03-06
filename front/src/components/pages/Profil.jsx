import React, { Component } from 'react';
import NavbarMain from '../NavbarMain';
import { Container, Row, Col } from 'reactstrap';
import Footer from '../Footer';
import CreationCompte from '../CreationCompte';
import './Profil.css';

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="PageBijoux">
        <header>
          <NavbarMain />
        </header>
        <section>
        <Container>
          <Row>
            <Col>
              <CreationCompte />
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

export default Profil;