import React from 'react';
import NavbarMain from '../NavbarMain';
import Footer from '../Footer';
import Banniere from '../Banniere';
import CarteBijouxTop from '../CarteBijouxTop';

const PageAccueil = () => (
  <div className="PageAccueil">
    <header>
      <NavbarMain />
      <Banniere/>
    </header>

    <section>
      <CarteBijouxTop />
    </section>

    <footer>
      <Footer/>
    </footer>
    
  </div>
)

export default PageAccueil;