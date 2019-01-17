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
                <Link className="lien-navbar-bijoux" to="PageBijoux">Bijoux</Link>
              </NavItem>
              <NavItem className="nav-item-navbar">
                <Link className="lien-navbar" to="/panier"><img className="image-logo-navbar" src="/medias/panier.png" alt="logo" /></Link>
              </NavItem>
              <NavItem className="nav-item-navbar">
                <Link className="lien-navbar" to="/compte"><img className="image-logo-navbar"  src="/medias/profil.png" alt="logo" /></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarMain;