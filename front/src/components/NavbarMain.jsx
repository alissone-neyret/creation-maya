import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavbarMain.css';

class NavbarMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => (
      { isOpen: !(prevState.isOpen) }
    ));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="NavbarMain">
        <Navbar expand="md">
          <NavbarBrand className="mr-1 pt-0">
            <Link to="/"><img className="image-logo-accueil" src="/medias/logo200Black.png" alt="logo" /></Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="lien-navbar" to="PageBijoux">Bijoux</Link>
              </NavItem>
              <NavItem>
                <Link className="lien-navbar" to="">Panier</Link>
              </NavItem>
              <NavItem>
                <Link className="lien-navbar" to="/profil">Mon compte</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarMain;