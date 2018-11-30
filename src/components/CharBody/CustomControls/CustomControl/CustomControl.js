import React from 'react';

import classes from './CustomControl.css'

const customControl = (props)=>(
  <div className={classes.CustomControl}>
<span className={classes.Limb}>{props.limb}</span>
<button className={classes.Previous}>Previous</button>
<button className={classes.Next}>Next</button>

  </div>
);

export default customControl;
