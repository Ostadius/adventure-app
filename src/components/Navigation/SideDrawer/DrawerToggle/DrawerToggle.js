import React from 'react';
import Oak from '../../../../assets/oak.png';


import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
    <img alt="oak-pic" src={Oak} className={classes.Logo} />
    </div>
);

export default drawerToggle;
