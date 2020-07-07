import React from 'react';
import classes from './PlayersPanels.css';

const playerPanels = (props) =>{


  return(
    <div className={classes.Panels}>
      <div className={classes.Panel}>{props.players}</div>
      <div className={classes.Panel}>{props.players}</div>
    </div>
  )
};

export default playerPanels;
