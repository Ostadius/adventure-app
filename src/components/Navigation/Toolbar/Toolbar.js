import React from 'react';
import NavItems from '../NavItems/NavItems';
import Oak from '../../../assets/oak.png';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.css';

const toolBar =(props)=>(
<header className={classes.Toolbar}>
  <img alt="oak-pic" src={Oak} />
<DrawerToggle clicked={props.drawerToggleClicked} />
    <nav>
      <NavItems />
    </nav>
</header>
);

export default toolBar;
