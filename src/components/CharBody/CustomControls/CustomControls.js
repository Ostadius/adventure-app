import React from 'react';
import CustomControl from './CustomControl/CustomControl';
import PanelText from '../../PanelText/PanelText';
import classes from './CustomControls.css'
const custom =[
  {label:'Head',type:'head'},
  {label:'Torso',type:'torso'},
  {label:'Left Arm',type:'leftarm'},
  {label:'Right Arm',type:'rightarm'},
  {label:'Left leg',type:'leftleg'},
  {label:'Right leg',type:'rightleg'}
];


const customControls = (props) =>(
<div className={classes.CustomControls}>
<PanelText />
{custom.map(cust=>(
  <CustomControl
  next={()=>props.partNext(cust.type)}
  previous={()=>props.partPrevious(cust.type)}
  key={cust.label}
  label={cust.label} />
))}
<button className={classes.SaveButton} onClick={props.pushChar} type="button">Save Character Playa</button>

</div>

);
export default customControls;
