import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import PageAccueil from './components/pages/PageAccueil';
import PageBijoux from './components/pages/PageBijoux';
import PageAdmin from './components/pages/PageAdmin';
import Profil from './components/pages/Profil';
import Panier from './components/pages/Panier';
import PageValidationPaiement from './components/pages/PageValidationPaiement';
import PageConnection from './components/pages/PageConnection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panier: [],
    }
    this.ajoutArticle = this.ajoutArticle.bind(this);
  }

  ajoutArticle(article) {
    this.setState({
      panier: [...this.state.panier, article]      
    })
    console.log("state panier app",this.state.panier)
  }

  componentDidUpdate() {
    console.log(this.state.panier)
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/" component={PageAccueil} />
          <Route onUpdate={window.scrollTo(0, 0)} path="/PageBijoux"><PageBijoux ajoutArticle={this.ajoutArticle} /></Route>
          <Route onUpdate={window.scrollTo(0, 0)} path="/maya-admin" component={PageAdmin} />
          <Route onUpdate={window.scrollTo(0, 0)} path="/profil" component={Profil} />
          <Route onUpdate={window.scrollTo(0, 0)} path="/panier"><Panier panier={this.state.panier}/></Route>
          <Route onUpdate={window.scrollTo(0, 0)} path="/pageValidation" component={PageValidationPaiement} />
          <Route onUpdate={window.scrollTo(0, 0)} path="/compte" component={PageConnection}/>
        </Switch>
      </div>
    );
  }
}

export default App;