import React, {Component} from 'react';
import CustomControls from '../../components/CharBody/CustomControls/CustomControls';
import CharBody from '../../components/CharBody/CharBody';
import CharStats from '../../components/CharStats/CharStats';
import BioForm from '../../components/BioForm/BioForm';
import Aux from '../../hoc/_Aux';

const classes = ['default','rouge','mage','hunter'];

class CharBuilder extends Component{
  state={
    body:{
      head:'default',
      torso:'default',
      legs:'default',
      feet:'default'
    },
    index:0,
    currentClass:'Default',
    customReady:false,
    customDone:false,


    }
    updateCurrentClass (index){
      this.setState({currentClass: classes[this.state.index]})

    }
    changeClassHandler = ()=>{


      const oldIndex = this.state.index ;
      const newIndex = oldIndex + 1;
      console.log();
      this.setState({index :(newIndex ) % classes.length});
      this.updateCurrentClass(this.state.index +1);

    }

showClassHandler =()=>{
  console.log(this.state.index);
  console.log(this.state.currentClass);
  alert('This is a ' + this.state.currentClass)
}
  render(){
    return(
      <Aux>
      <CharBody
        currentClass={this.state.currentClass}

       />
      <CharStats
        currentClass={this.state.currentClass}
        changeClass={this.changeClassHandler}
        showClass={this.showClassHandler}
      />
      <CustomControls

      currentClass={this.state.currentClass}
      />
      </Aux>
    );
  }
}

export default CharBuilder;
