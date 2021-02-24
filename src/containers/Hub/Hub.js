import React, {Component,Fragment} from 'react';
import CharView from '../../components/CharView/CharView';
import CharBody from '../../components/CharBody/CharBody';


class Hub extends Component {
  state ={

  }
  render (){
    return(
      <Fragment>
      <CharView />

      <CharBody />
      <a> HEJ LISA</a>
      </Fragment>


    )
  }
}

export default Hub;
