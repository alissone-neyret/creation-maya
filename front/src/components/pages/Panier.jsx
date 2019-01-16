import React from 'react';
import NavbarMain from '../NavbarMain';
import Footer from '../Footer';
import Banniere from '../Banniere';
import TableauPanier from '../TableauPanier';

const Panier = () => (
  <div className="PageAccueil">
    <header>
      <NavbarMain />
      <Banniere/>
    </header>

    <section>
      <TableauPanier />
    </section>

    <footer>
      <Footer/>
    </footer>
    
  </div>
)

export default Panier;