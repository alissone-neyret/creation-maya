import React from 'react';
import NavbarMain from '../NavbarMain';
import Footer from '../Footer';
import Banniere from '../Banniere';
import CarteBijouxTop from '../CarteBijouxTop';
import { Container } from 'reactstrap';
import './PageAccueil.css';

const PageAccueil = () => (
  <div className="PageAccueil">
    <header>
      <NavbarMain />
      <Banniere/>
    </header>

    <section>
      <Container fluid className="container-fluid-homepage-top">
      <CarteBijouxTop />
      </Container>
    </section>

    <footer>
      <Footer/>
    </footer>
    
  </div>
)

export default PageAccueil;