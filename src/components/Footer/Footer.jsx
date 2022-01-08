import React from 'react';
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import TermineIcon from '../../images/doctor.svg'
import HomeIcon from '../../images/home.svg'
import MedikamenteIcon from '../../images/medicine.svg'
import SymptomeIcon from '../../images/symptoms.svg'

function Footer () {

  return (
<NavbarStyled>
    <NavLink to="/"><img className="home" src={HomeIcon}/><p>Home</p></NavLink>
      <NavLink to="symptome"><img className="symptome" src={SymptomeIcon}/><p>Symptome</p></NavLink>
      <NavLink to="medikamente"><img className="medikamente" src={MedikamenteIcon}/><p>Medikamente</p></NavLink>
      <NavLink to="termine"><img className="termine" src={TermineIcon}/><p>Termine</p></NavLink>
      </NavbarStyled>
  )
}

export default Footer;

const NavbarStyled = styled.footer`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  transform: translateY(0);
  `

