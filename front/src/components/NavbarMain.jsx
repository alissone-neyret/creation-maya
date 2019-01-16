import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
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
            <img src="/medias/logo.png" alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="">Prêt-à-porter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="">Bijoux</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="">Panier</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="">Mon compte</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarMain;