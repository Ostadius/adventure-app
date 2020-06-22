import React, {Component,Fragment} from 'react';
import CharView from '../../components/CharView/CharView';
import CharBody from '../../components/CharBody/CharBody';


class Hub extends Component {
  state ={

  }
  render (){
    return(
      <React.Fragment>
      <CharView />

      <CharBody />
      <a> HEJ LISA</a>
      </React.Fragment>


    )
  }
}

export default Hub;
