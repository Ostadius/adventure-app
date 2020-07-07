import React, {Component,Fragment} from 'react';
import CustomControls from '../../components/CharBody/CustomControls/CustomControls';
import CharBody from '../../components/CharBody/CharBody';
import CharDB from '../../components/CharDB/CharDB';
import CharStats from '../../components/CharStats/CharStats';
import SaveButton from '../../components/SaveCharComponents/SaveButton/SaveButton';
import axios from '../../axios-orders.js';
const classes = ['default','berserker','rogue','scribe','engineer'];
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
      error:false
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
      console.log(this.state.currentClass);
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
      console.log(oldIndex);
      const oldPart = this.state;
      console.log(oldPart);
      const changeIndex = oldIndex + 1;
      const array = classes.length;
      const newIndex = changeIndex % array;



      this.setState({

        [type]:{
          index:newIndex,
          class:classes[newIndex] }



      })


    }

    changeBodyHandlerPreviousIndex = (type) =>{

      let newIndex;
      const oldIndex = this.state[type].index;
      const oldPart = this.state[type];
      const array = classes.length;

      if(oldIndex ===0){
         newIndex = array -1;
      }
      else {
         newIndex = oldIndex -1;
      }

      this.setState({

          [type]:{
            index:newIndex,
            class:classes[newIndex] }


      })

    }
showClassHandler =()=>{
  console.log(this.state.index);
  console.log(this.state.currentClass);
  console.log('This is a ' + this.state.currentClass)

}
  saveCharacterHandler =(event)=>{
    event.preventDefault();
    console.log(this.state);
    console.log(this.state.head.class);
    const char = {
      head:{
      index:this.state.head.index,
      class:this.state.head.class
    },
    torso:{
      index:this.state.torso.index,
      class:this.state.torso.class
    },
    leftleg:{
      index:this.state.leftleg.index,
      class:this.state.leftleg.class
    },
    rightleg:{
      index:this.state.rightleg.index,
      class:this.state.rightleg.class
    },
    leftarm:{
      index:this.state.leftarm.index,
      class:this.state.leftarm.class
    },
    rightarm:{
      index:this.state.rightarm.index,
      class:this.state.rightarm.class
    },
    currentClass:this.state.currentClass
    }
    axios.post('/characters.json',char)
    .then(response =>{
      this.setState({
        customReady:true

        })
        this.props.history.push('/')
    }).catch(error=>{
      this.setState({error:true})
    })
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
        rightleg={this.state.rightleg.class}
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

      <SaveButton
      saveChar={this.saveCharacterHandler}
       />

       <CharDB
       currentClass={this.state.currentClass}
       head={this.state.head.class}
       torso={this.state.torso.class}
       leftarm={this.state.leftarm.class}
       rightarm={this.state.rightarm.class}
       leftleg={this.state.leftleg.class}
       rightleg={this.state.rightleg.class}

       />
      </Fragment>
    );
  }
}

export default CharBuilder;
