import React from 'react';
import BattleControl from './BattleControl/BattleControl.js';
import classes from './BattleControls.css';


const battleControls = (props)=>{

  const actButtons =[
    {label:'NormalAtk',type:'normAtk'},
    {label:'SpecAtk1',type:'specAtk1'},
    {label:'SpecAtk2',type:'specAtk2'},
    {label:'Buff',type:'buff'}
  ];


  return(
    <div className={classes.Controls}>
    {actButtons.map(act=>(
      <BattleControl
      action={props.acts}
      key={act.type}
      label={act.label}
      />
    ))}
     </div>
  )

}

export default battleControls;
