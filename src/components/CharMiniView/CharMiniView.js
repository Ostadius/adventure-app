import React from 'react';
import classes from './CharMiniView.css';

const charMiniView =(props) =>{
const divHead=`${props.head}Head`;
const divTorso=`${props.torso}Torso`;
const divLeftArm=`${props.leftarm}LeftArm`;
const divRightArm=`${props.rightarm}RightArm`;
const divLeftLeg=`${props.leftleg}LeftLeg`;
const divRightLeg=`${props.rightleg}RightLeg`;



return(

<div className={classes.miniCharView}>
  <a className={classes.text}>{props.currentClass}</a>
  <div type="head" className={classes[divHead]}></div>
  <div type="torso" className={classes[divTorso]}></div>
  <div type="leftArm" className={classes[divLeftArm]}></div>
  <div type="rightArm" className={classes[divRightArm]}></div>
  <div type="leftLeg" className={classes[divLeftLeg]}></div>
  <div type="rightLeg" className={classes[divRightLeg]}></div>
</div>
)};

export default charMiniView;
