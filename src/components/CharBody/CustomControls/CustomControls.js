import React from 'react';
import CustomControl from './CustomControl/CustomControl';
import classes from './CustomControls.css'
const custom =[
  {limb:'Head',type:'default-head'},
  {limb:'Torso',type:'default-torso'},
  {limb:'Left Arm',type:'default-left-arm'},
  {limb:'Right Arm',type:'default-right-arm'},
  {limb:'Left leg',type:'default-left-leg'},
  {limb:'Right leg',type:'default-right-leg'},
]


const customControls = (props) =>(
<div className={classes.CustomControls}>
{custom.map(cust=>(
  <CustomControl
  key={cust.limb}
  limb={cust.limb} />
))}

</div>

);
export default customControls;
