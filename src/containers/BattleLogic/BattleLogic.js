import React, {Component,Fragment} from 'react';
import BattleBack from '../../components/BattleBack/BattleBack';
import BattleControls from '../../components/BattleBack/BattleControls/BattleControls';


class BattleLogic extends Component {
state ={
  player1:{

  },
  player2:{
    
  }
}

render(){

  return(
    <Fragment>
        <BattleBack />
    </Fragment>


  );
}
}

export default BattleLogic;
