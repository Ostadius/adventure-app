import React from 'react';
import classes from './CharDB.css';


const charDB = (props) =>{

const body =[];


console.log(body);
console.log(props.id);
  return (
    <div className={classes.charSummary}>
    <p>{props.id} : {props.class}</p>

    </div>
  );
}

export default charDB;
