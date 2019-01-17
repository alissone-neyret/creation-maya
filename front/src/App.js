import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import PageAccueil from './components/pages/PageAccueil';
import PageBijoux from './components/pages/PageBijoux';
import PageAdmin from './components/pages/PageAdmin';
import Profil from './components/pages/Profil';
import Panier from './components/pages/Panier';
import PageValidationPaiement from './components/pages/PageValidationPaiement';

const App = () => (
  <div className="App">
    <Route onUpdate={window.scrollTo(0,0)} exact path="/" component={PageAccueil} />
    <Route onUpdate={window.scrollTo(0,0)} path="/PageBijoux" component={PageBijoux} />
    <Route onUpdate={window.scrollTo(0,0)} path="/maya-admin" component={PageAdmin} />
    <Route onUpdate={window.scrollTo(0,0)} path="/profil" component={Profil}/>
    <Route onUpdate={window.scrollTo(0,0)} path="/panier" component={Panier}/>
    <Route onUpdate={window.scrollTo(0,0)} path="/pageValidation" component={PageValidationPaiement} />
  </div>
);

export default App;
