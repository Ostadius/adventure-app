import React from 'react';
import classes from './BattleControl.css';

const battleControl = (props)=>{

  return(
    <div className={classes.Controls}>


      <button className={classes.ControlButton} onClick={props.next}>{props.label}</button>


    </div>
  )

}

export default battleControl;
