import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarBrand,
  NavItem,
} from "reactstrap";

import { NavHashLink } from 'react-router-hash-link';

import { GiHamburgerMenu } from "react-icons/gi";

import * as Styled from './Header.style'
import { Link } from "react-router-dom";

function Header({ position }: {position?: boolean}) {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setnavbar] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const toggleActive = () => {
    if (window.scrollY >= 80) {
      setnavbar(true)
    } else {
      setnavbar(false)
    }
  }

  window.addEventListener('scroll', toggleActive);

  return (
    <Styled.NavBar background={isOpen ? 'black' : 'transparent'} position={position ? 'inherit' : 'fixed'}>
      <Navbar expand="lg" className= {navbar ? 'activeNav' : ''}>
        <NavbarBrand href="/"><img src="/assets/images/Logo.png" alt="LawGorithmic logo" /></NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <span>
            <GiHamburgerMenu/>
          </span>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/" onClick={() => {setIsOpen(false) }}  className='nav-link'>INICIO</Link>
            </NavItem>
            <NavItem>
              <NavHashLink to="/#us" onClick={() => {setIsOpen(false) }} smooth className='nav-link'>NOSOTROS</NavHashLink>
            </NavItem>
            <NavItem>
              <NavHashLink to="/#services" onClick={() => {setIsOpen(false) }}  smooth className='nav-link'>SERVICIOS</NavHashLink>
            </NavItem>
            <NavItem>
              <Link to="/news" onClick={() => {setIsOpen(false) }}  className='nav-link'>NOTICIAS</Link>
            </NavItem>
            <NavItem  className='contact-dropdown'>
              <NavHashLink to="/#contact" onClick={() => {setIsOpen(false) }}  smooth className='contact'>Contacto</NavHashLink>
            </NavItem>
          </Nav>
          <Styled.Copyright>
            <p>© 2022 LawGorithmic. Todos los derechos reservados. Developed by Duck Studios</p>
          </Styled.Copyright>
        </Collapse>
      </Navbar>
    </Styled.NavBar>
  );
};

export default Header;
