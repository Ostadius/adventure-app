import React from 'react';
import classes from './CharStats.css';


const charStats =(props)=>{

  let dex=props.dex;
  let str=props.str;
  let def=props.def;
  let int=props.int;

  switch(props.currentClass){
    case('default'):
    str=10;
    dex=10;
    def=10;
    int=10;
    break;
    case('rogue'):
    str=12;
    dex=29;
    def=12;
    int=11;
    break;
    case('scribe'):
    str=12;
    dex=19;
    def=8;
    int=25;
    break;
    case('engineer'):
    str=14;
    dex=16;
    def=10;
    int=3;
    break;
    case('berserker'):
    str=25;
    dex=11;
    def=19;
    int=3;
    break;
    default:
       dex = 0;
       str = 0;
       def = 24;
       int = 0;
  }
  return(

    <div className={classes.CharStats}>
  <h3>The name the {props.currentClass}</h3>
  <a>Descriptive text about the {props.currentClass} and props bioForm aljsdoasdhasödjbasöldjabsdösajbdöasdkj
  basödjabdöasjbdaösdjb So
   </a>

  <table className={classes.statTable}>
    <tbody>
      <tr>
        <th>Stats</th>
      </tr>
      <tr>
        <td>Strength</td>
        <td>{str}</td>
      </tr>
      <tr>
        <td>Dexterity</td>
        <td>{dex}</td>
      </tr>
      <tr>
        <td>Defense</td>
        <td>{def}</td>
      </tr>
      <tr>
        <td>Intelligence</td>
        <td>{int}</td>
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

}


;

export default charStats;
