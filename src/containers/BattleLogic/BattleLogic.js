import React, {Component,Fragment} from 'react';
import BattleBack from '../../components/BattleBack/BattleBack';
import BattleControls from '../../components/BattleBack/BattleControls/BattleControls';
import PlayersPanels from '../../components/BattleBack/PlayersPanels/PlayersPanels';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorBoundary from '../../hoc/ErrorBoundary/ErrorBoundary';

import axios from '../../axios-orders.js';

class BattleLogic extends Component {
state ={
  player1:{

  },
  player2:{

  },
  chars:null,
  loading:false,
  error:false
}


componentDidMount(){
  this.setState({loading:true});
  axios.get('/characters.json')
  .then( res=>{
    const fetchedChar =[];
    for(let key in res.data)
      fetchedChar.push({
        ...res.data[key],
        id:key
      })
      this.setState({loading:false, chars:fetchedChar})
      .catch(er=>{
        this.setState({error:true})
        console.log(er);
      }
      )

  }

)
.catch(err=>{
  console.log(err);
  this.setState({loading:false})
}

)}
render(){
    let panel = this.state.error ? <p>Can't load son</p>: <Spinner />

  if(this.state.loading){
  panel=  <Spinner />;
  }
  if(this.state.chars ===null){
  panel=  <Spinner />

  }
  if(this.state.chars){
   panel=  <PlayersPanels
    characters={this.state.chars} />
  }

  return(
    <Fragment>
        <BattleBack
        player1={this.state.player1}
        player2={this.state.player2}
        characters={this.state.chars} />
        <ErrorBoundary>
          {panel}
        </ErrorBoundary>


    </Fragment>


  );
}
}

export default BattleLogic;
