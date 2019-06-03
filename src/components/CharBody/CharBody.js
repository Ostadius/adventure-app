import React from 'react';
import classes from './CharBody.css';

const charBody =(props) =>{

const divHead=`${props.head}Head`;
const divTorso=`${props.torso}Torso`;
const divLeftArm=`${props.leftarm}LeftArm`;
const divRightArm=`${props.rightarm}RightArm`;

return(
<div className={classes.CharBody}>
  <a className={classes.text}>{props.currentClass}</a>
  <div type="head" className={classes[divHead]}></div>
  <div type="torso" className={classes[divTorso]}></div>
  <div type="leftArm" className={classes[divLeftArm]}></div>
  <div type="rightArm" className={classes[divRightArm]}></div>
</div>
)};

export default charBody;
