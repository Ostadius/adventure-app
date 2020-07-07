import React from 'react';
import classes from './CharDB.css';


const charDB = (props) =>{



  return (
    <div className={classes.charSummary}>
    <p>{props.id} :</p><br />
    <p> {props.class}</p>

    </div>
  );
}

export default charDB;
