import React, { Component } from 'react';
import CarteBijoux from '../CarteBijoux';
import NavbarMain from '../NavbarMain';
import { Container, Row, Col } from 'reactstrap';
import Footer from '../Footer';
import './PageBijoux.css';

class PageBijoux extends Component {
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
              <CarteBijoux ajoutArticle={this.props.ajoutArticle}/>
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

export default PageBijoux;