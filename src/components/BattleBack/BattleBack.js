import React ,{Fragment} from 'react';
import BattleControls from './BattleControls/BattleControls';
import BattleMessage from './BattleMessage/BattleMessage';
import classes from './BattleBack.css';

const battle = (props) =>{


  return(
    <Fragment>
    <BattleMessage />
    <div className={classes.Col}>
      <BattleControls />
        <div className={classes.BattleBackground}>
          
        </div>
      <BattleControls />
    </div>
    </Fragment>

  )


};





export default battle;
