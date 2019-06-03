import React from 'react';
import classes from './CharStats.css';


const charStats =(props)=>{

  let dex;
  let str;
  let def;
  let mag;

  switch(props.currentClass){
    case('default'):
    str=10;
    dex=10;
    def=10;
    mag=10;
    break;
    case('rogue'):
    str=12;
    dex=19;
    def=8;
    mag=11;
    break;
    case('mage'):
    str=12;
    dex=19;
    def=8;
    mag=25;
    break;
    case('hunter'):
    str=14;
    dex=16;
    def=8;
    mag=3;
    break;
    default:
       dex = 0;
       str = 0;
       def = 24;
       mag = 0;
  }
  return(

    <div className={classes.CharStats}>
  <h3>The name the {props.currentClass}</h3>
  <a>Descriptive text about the {props.currentClass} and props bioForm aljsdoasdhasödjbasöldjabsdösajbdöasdkj
  basödjabdöasjbdaösdjb So
   </a>

  <table className={classes.statTable}>
  <tr>
  <th>Stats</th>
  </tr>
  <tr>
  <td>Dexterity</td>
  <td>{dex}</td>
  </tr>
  <tr>
  <td>Strength</td>
  <td>{str}</td>
  </tr>
  <tr>
  <td>Defense</td>
  <td>{def}
  </td>
  </tr>
  <tr>
  <td>Intelligence</td>
  <td>{mag}</td>
  </tr>
  </table>
  <div className={classes.buttons}>
  <button
  onClick={props.changeClass}>
  Class change{props.classes}
  </button>

  </div>
  </div>
  )

}


;

export default charStats;
