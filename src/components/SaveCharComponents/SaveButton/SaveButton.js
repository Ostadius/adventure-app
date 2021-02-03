import React from 'react';

import classes from './SaveButton.css'

const saveButton =(props)=>{
  return (
    <div className={classes.SaveButton}>
      <form type="submit">
          <button type="button" onClick={props.saveChar} type="button">Save Character Playa</button>
      </form>
    </div>


  )
}

export default saveButton;
