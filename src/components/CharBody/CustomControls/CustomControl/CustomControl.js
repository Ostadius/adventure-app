import React from 'react';

import classes from './CustomControl.css'

const customControl = (props)=>(
  <div className={classes.CustomControl}>
<span className={classes.Limb}>{props.label}</span>
<button className={classes.Previous} onClick={props.previous}>-</button>
<button className={classes.Next} onClick={props.next}>+</button>

  </div>
);

export default customControl;
