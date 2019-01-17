import React from 'react';
import NavbarMain from '../NavbarMain';
import Footer from '../Footer';
import TableauPanier from '../TableauPanier';
import Paiement from '../Paiement';
import './Panier.css';

const Panier = (props) => (
  <div className="PageAccueil">
    <header>
      <NavbarMain />
    </header>

    <section>
      <TableauPanier panier={props.panier}/>
      <Paiement />
    </section>

    <footer>
      <Footer/>
    </footer>
    
  </div>
)

export default Panier;