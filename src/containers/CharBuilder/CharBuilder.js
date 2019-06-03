import React, {Component,Fragment} from 'react';
import CustomControls from '../../components/CharBody/CustomControls/CustomControls';
import CharBody from '../../components/CharBody/CharBody';
import CharStats from '../../components/CharStats/CharStats';


const classes = ['default','rogue','mage','hunter'];
class CharBuilder extends Component{
  state={

      head:{
      index:0,
      class:'default'
    },
    torso:{
      index:0,
      class:'default'
    },
    leftleg:{
      index:0,
      class:'default'
    },
    rightleg:{
      index:0,
      class:'default'
    },
    leftarm:{
      index:0,
      class:'default'
    },
    rightarm:{
      index:0,
      class:'default'
    },
      index:0,
      currentClass:'default',
      customReady:false,
      customDone:false,
      }

    updateCurrentClass (ind){
      this.setState({currentClass: classes[ind]})

    }
    componentDidMount(){
      console.log(this.state.index);
      console.log(this.state.currentClass);
      console.log(this.state.head);
    }
    componentDidUpdate(){

      console.log(this.state.head);

    }
    changeClassAndBodyHandlerNextIndex = (type)=>{


      const oldIndex = this.state.index;
      const changeIndex = oldIndex +1
      const array = classes.length
      const newIndex = changeIndex % array;
      console.log('boop');

      this.setState({index :newIndex });
      this.updateCurrentClass(newIndex);

    }
    changeBodyHandlerNextIndex = (type)=>{


      const oldIndex = this.state[type].index;
      const oldPart = this.state[type];
      const changeIndex = oldIndex + 1;
      const array = classes.length;
      const newIndex = changeIndex % array;

      this.setState({

        [type]:{
          index:newIndex,
          class:classes[newIndex] },

      })


    }

    changeBodyHandlerPreviousIndex = (type) =>{

      const oldIndex = this.state[type].index;
      const oldPart = this.state[type];
      const array = classes.length;

      if(oldIndex ===0){
        var newIndex = array -1;
      }
      else {
        var newIndex = oldIndex -1;
      }

      this.setState({
        [type]:{
          index:(newIndex),
          class:classes[newIndex]}
      })

    }
showClassHandler =()=>{
  console.log(this.state.index);
  console.log(this.state.currentClass);
  console.log('This is a ' + this.state.currentClass)

}
  render(){



    return(
      <Fragment>
      <CharBody
        currentClass={this.state.currentClass}
        head={this.state.head.class}
        torso={this.state.torso.class}
        leftarm={this.state.leftarm.class}
        rightarm={this.state.rightarm.class}
        leftleg={this.state.leftleg.class}
        rightarm={this.state.rightarm.class}
       />
      <CharStats

        changeClass={this.changeClassAndBodyHandlerNextIndex}
        showClass={this.showClassHandler}
        currentClass={this.state.currentClass}

      />
      <CustomControls
      partNext={this.changeBodyHandlerNextIndex}
      partPrevious={this.changeBodyHandlerPreviousIndex}
      currentClass={this.state.rightarm.class}
      />


      </Fragment>
    );
  }
}

export default CharBuilder;
