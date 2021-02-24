import React from 'react';
import classes from './CharBody.css';
const charBody =(props) =>{

let divHead=[classes.Head,classes[`${props.head}Head`]];
let divTorso=[classes.Torso,classes[`${props.torso}Torso`]];
let divLeftArm=[classes.LeftArm,classes[`${props.leftarm}LeftArm`]];
let divRightArm=[classes.RightArm,classes[`${props.rightarm}RightArm`]];
let divLeftLeg=[classes.LeftLeg,classes[`${props.leftleg}LeftLeg`]];
let divRightLeg=[classes.RightLeg,classes[`${props.rightleg}RightLeg`]];
return(

<div className={classes.CharBody}>
  <a className={classes.text}>{props.currentClass}</a>
  <div className={classes.gridBody}>
    <div type="head" className={divHead.join(' ')}></div>
    <div type="torso" className={divTorso.join(' ')}></div>
    <div type="leftArm" className={divLeftArm.join(' ')}></div>
    <div type="rightArm" className={divRightArm.join(' ')}></div>
    <div type="leftLeg" className={divLeftLeg.join(' ')}></div>
    <div type="rightLeg" className={divRightLeg.join(' ')}></div>
  </div>
</div>
)};

export default charBody;
