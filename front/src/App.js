import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import PageAccueil from './components/pages/PageAccueil';
import PageBijoux from './components/pages/PageBijoux';

const App = () => (
  <div className="App">
    <Route onUpdate={window.scrollTo(0,0)} exact path="/" component={PageAccueil} />
    <Route onUpdate={window.scrollTo(0,0)} exact path="/PageBijoux" component={PageBijoux} />
  </div>
);

export default App;
