import React from 'react';

import classes from './CustomControl.css'

const customControl = (props)=>(
  <div className={classes.CustomControl}>
<span className={classes.Limb}>{props.label}</span>
<button className={classes.Previous} onClick={props.previous}>Prev</button>
<button className={classes.Next} onClick={props.next}>Next</button>

  </div>
);

export default customControl;
