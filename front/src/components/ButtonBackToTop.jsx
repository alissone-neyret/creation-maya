import React from 'react';
import './ButtonBackToTop.css';

const ButtonBackToTop = () => (
  <button type="button" title="Haut de Page" onClick={()=> window.scrollTo(0,0)} className="ButtonBackToTop">
    <img src="medias/arrowTop.png" alt="retour en haut de page" />
  </button>
);

export default ButtonBackToTop;