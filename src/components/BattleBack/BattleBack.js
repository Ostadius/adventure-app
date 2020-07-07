import React ,{Fragment} from 'react';
import BattleControls from './BattleControls/BattleControls';
import BattleMessage from './BattleMessage/BattleMessage';
import PlayersPanels from './PlayersPanels/PlayersPanels';
import classes from './BattleBack.css';

const battle = (props) =>{


  return(
    <Fragment>
    <BattleMessage />
    <div className={classes.Col}>
    <BattleControls />
    <div className={classes.BattleBackground} />
    <BattleControls />
    </div>
    <PlayersPanels />
    </Fragment>

  )


};





export default battle;
