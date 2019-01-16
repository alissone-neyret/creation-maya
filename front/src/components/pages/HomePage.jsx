import React from 'react';
import NavbarMain from '../NavbarMain';
import Footer from '../Footer';
import Banniere from '../Banniere';

const HomePage = () => (
  <div className="HomePage">
    <header>
      <NavbarMain />
      <Banniere/>
    </header>

    <footer>
      <Footer/>
    </footer>
    
  </div>
)

export default HomePage;