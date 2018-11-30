import React,{Component} from 'react';

class CharStat extends Component {
render(){
  let dex = null;
  let atk = null;
  let def = null;
  let mag = null;

  switch(this.props.type){
    case('Default'):
    dex=10;
    atk=10;
    def=10;
    mag=10;
    break;
    case('Rouge'):
    dex=19;
    atk=12;
    def=8;
    mag=11;
    break;
    case('Mage'):
    dex=19;
    atk=12;
    def=8;
    mag=25;
    break;
    case('Hunter'):
    dex=16;
    atk=14;
    def=8;
    mag=3;
    break;
    default:
      let dex = null;
      let atk = null;
      let def = null;
      let mag = null;
  }
  return
}
}

export default CharStat;
