import React from 'react';
import CustomControl from './CustomControl/CustomControl';
import classes from './CustomControls.css'
const custom =[
  {label:'Head',type:'head'},
  {label:'Torso',type:'torso'},
  {label:'Left Arm',type:'leftarm'},
  {label:'Right Arm',type:'rightarm'},
  {label:'Left leg',type:'leftleg'},
  {label:'Right leg',type:'rightleg'},
]


const customControls = (props) =>(
<div className={classes.CustomControls}>
{custom.map(cust=>(
  <CustomControl
  next={()=>props.partNext(cust.type)}
  previous={()=>props.partPrevious(cust.type)}
  key={cust.label}
  label={cust.label} />
))}

</div>

);
export default customControls;
