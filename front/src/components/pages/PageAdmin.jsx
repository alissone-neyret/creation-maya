import React, { Component } from 'react';
import NavbarMain from '../NavbarMain';
import { Container, Row, Col } from 'reactstrap';
import Footer from '../Footer';
import CarteBijouxAdmin from '../CarteBijouxAdmin';
import './PageAdmin.css';

class PageAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="PageAdmin">
        <header>
          <NavbarMain />
        </header>
        <section>
        <Container>
          <Row>
            <Col>
              <CarteBijouxAdmin />
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

export default PageAdmin;