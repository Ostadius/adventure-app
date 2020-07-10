import React from 'react';
import classes from './PlayersPanel.css';

const playerPanel = (props) =>{
  console.log(props.characters);
  let charlist = props.characters.map((ch,i)=>{
    return(
      <div className={classes.CharPanel}>
      <p> this is ID : {ch.id} </p>
      <div> this is ID : {ch.currentClass} </div>
      <div> this is ID : {ch.head.class} </div>
      <div> this is ID : {ch.torso.class} </div>
      <div> this is ID : {ch.leftarm.class} </div>
      <div> this is ID : {ch.leftleg.class} </div>
      <div> this is ID : {ch.rightarm.class} </div>
      <div> this is ID : {ch.rightleg.class} </div>

      </div>
    ) ;
  })

  return(
    <div className={classes.Panel}>
    {charlist}
    </div>
  )
};

export default playerPanel;
