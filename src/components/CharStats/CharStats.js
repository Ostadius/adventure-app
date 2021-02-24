import React from 'react';
import classes from './CharStats.css';


const charStats =(props)=>(

  <div className={classes.CharStats}>
<h3>The name the {props.currentClass}</h3>
<a className={classes.bioText}>
  Descriptive text about the {props.currentClass} and {props.classInfo}
</a>
<table className={classes.statTable}>
  <tbody>
    <tr>
      <th>Stats</th>
    </tr>
    <tr>
      <td>Strength</td>
      <td>{props.str}</td>
    </tr>
    <tr>
      <td>Dexterity</td>
      <td>{props.dex}</td>
    </tr>
    <tr>
      <td>Vitality</td>
      <td>{props.vit}</td>
    </tr>
    <tr>
      <td>Intelligence</td>
      <td>{props.int}</td>
    </tr>
  </tbody>
</table>
<div className={classes.buttons}>
  <button
  onClick={props.changeClass}>
  Class change{props.classes}
  </button>

</div>
</div>


)





;

export default charStats;
