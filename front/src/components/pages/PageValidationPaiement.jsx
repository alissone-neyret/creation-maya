import React from 'react';
import NavbarMain from '../NavbarMain';
import Footer from '../Footer';
import Banniere from '../Banniere';
import ValidationPaiement from '../ValidationPaiement';

const PageValidationPaiement = () => (
  <div className="PageAccueil">
    <header>
      <NavbarMain />
      <Banniere/>
    </header>

    <section>
      <ValidationPaiement />
    </section>

    <footer>
      <Footer/>
    </footer>
    
  </div>
)

export default PageValidationPaiement;