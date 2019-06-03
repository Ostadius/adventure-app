import React from 'react';
import classes from './CharView.css';


const charView =(props)=>{
  return (
    <div className={classes.CharView}>
    <a className={classes.charName}> props charName or whatevs</a>
    </div>
  )
}

export default charView;
