import React from 'react';
import CharStat from './CharStat/CharStat';
import classes from './CharStats.css';

const stats = [
    { label: 'Default', type: 'Default' },
    { label: 'Rogue', type: 'Rogue' },
    { label: 'Mage', type: 'Mage' },
    { label: 'Hunter', type: 'Hunter' },
];

const charStats =(props)=>(
  <div className={classes.CharStats}>
<h3>The name the {props.currentClass}</h3>
<a>Descriptive text about the selected class aljsdoasdhasödjbasöldjabsdösajbdöasdkj
basödjabdöasjbdaösdjb So
 </a>

<table>
<tr>
<th>Stats</th>
</tr>
<tr>
<td>Dex</td>
<td></td>
</tr>
<tr>
<td>Str</td>
<td>props shilldrän</td>
</tr>
<tr>
<td>Def</td>
<td>props shilldrän</td>
</tr>
<tr>
<td>Mag</td>
<td>props shilldrän</td>
</tr>
</table>
<div className={classes.buttons}>
<button
onClick={props.changeClass}>
Class change{props.classes}
</button>
<button
onClick={props.showClass}>
show :{props.currentClass}
</button>
</div>
</div>

);

export default charStats;
