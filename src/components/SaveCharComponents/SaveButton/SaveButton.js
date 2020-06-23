import React from 'react';

import classes from './SaveButton.css'

const saveButton =(props)=>{
  return (
    <div className={classes.SaveButton}>
        <button onClick={props.saveChar} >Save Character Playa</button>
    </div>


  )
}

export default saveButton;
