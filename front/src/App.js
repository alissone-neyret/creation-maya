import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import PageAccueil from './components/pages/PageAccueil';
import PageBijoux from './components/pages/PageBijoux';
import PageAdmin from './components/pages/PageAdmin';

const App = () => (
  <div className="App">
    <Route onUpdate={window.scrollTo(0,0)} exact path="/" component={PageAccueil} />
    <Route onUpdate={window.scrollTo(0,0)} path="/PageBijoux" component={PageBijoux} />
    <Route onUpdate={window.scrollTo(0,0)} path="/maya-admin" component={PageAdmin} />
  </div>
);

export default App;
