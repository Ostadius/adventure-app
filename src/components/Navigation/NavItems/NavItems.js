import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavItems.css'

const navItems = () =>(
  <ul className={classes.NavItems}>
  <NavItem link="/" exact>Home</NavItem>
  <NavItem link="/character-creator">Character Creator</NavItem>
  <NavItem link="/bio">Bio</NavItem>
  <NavItem link="/hub">Hub</NavItem>
  </ul>


);

export default navItems;
