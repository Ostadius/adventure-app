import React from 'react';
import Head from './CharBodyParts/Head/Head'
import classes from './CharBody.css';

const charBody =(props) =>(


  <div className={classes.CharBody}>
  <a className={classes.text}>{props.currentClass}</a>
<div className={classes.defaultHead}></div>
<div className={classes.defaultTorso}></div>
<div className={classes.defaultLeftArm}></div>
<div className={classes.defaultRightArm}></div>
<div className={classes.defaultLeftLeg}></div>
<div className={classes.defaultRightLeg}></div>



</div>
)
  // let selectedHead = Object.keys(props.head);
  // let selectedTorso = Object.keys(props.torso);
  // let selectedLeftArm = Object.keys(props.leftArm);
  // let selectedRightArm = Object.keys(props.rightArm);
  // let selectedLeftLeg = Object.keys(props.leftLeg);
  // let selectedRightLeg = Object.keys(props.rightLeg); Lägg alla dessa i en array?

;

export default charBody;
