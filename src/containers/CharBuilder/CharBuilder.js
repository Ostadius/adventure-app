import React, {Component,Fragment} from 'react';
import CustomControls from '../../components/CharBody/CustomControls/CustomControls';
import CharBody from '../../components/CharBody/CharBody';
import CharDB from '../../components/CharDB/CharDB';
import CharStats from '../../components/CharStats/CharStats';
import axios from '../../axios-orders.js';
const classes = ['default','berserker','rogue','scribe','engineer'];
class CharBuilder extends Component{
  state={
//add it all in char Object??
      baseStats:{
        str:10,
        dex:10,
        def:10,
        int:10
      },
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
      customizingReady:false,
      error:false
      }

    updateCurrentClass (ind){
      this.setState({currentClass: classes[ind]})

    }
    updateBodyPart(type,newIndex){
      this.setState({
        [type]:{
          index:newIndex,
          class:classes[newIndex]}
      })
    }

    componentDidUpdate(prevProps,prevState,snapshot){
      const classJob = this.state.currentClass;
      console.log(`Current class:${classJob} and previous class:${prevState.currentClass}`);
      if(prevState.currentClass !== classJob ){
        switch (classJob) {
          case 'default':
          this.setState({
            baseStats:{
              str:10,
              dex:10,
              def:10,
              int:10
            }
          })
          break;
          case 'berserker':
          // updateStats(25,11,18,8)
          this.setState({
            baseStats:{
              str:25,
              dex:11,
              def:18,
              int:8
            }
          })
          break;
          case 'rogue':
          // updateStats(15,21,11,10)
          this.setState({
            baseStats:{
              str:15,
              dex:21,
              def:11,
              int:10
            }
          })
          break;
          case 'scribe':
          // updateStats(9,12,9,29)
          this.setState({
            baseStats:{
              str:9,
              dex:12,
              def:9,
              int:29
            }
          })
          break;
          case 'engineer':
          this.setState({
            baseStats:{
              str:9,
              dex:18,
              def:8,
              int:18
            }
          })
          // updateStats(9,18,9,18)
          break;
        }

      }
    }
    changeClassHandlerNextIndex = (type)=>{


      const oldIndex = this.state.index;
      const changeIndex = oldIndex +1
      const array = classes.length
      const newIndex = changeIndex % array;
      console.log('boop');
      this.setState({index :newIndex });
      this.updateCurrentClass(newIndex);

    }
    changeBodyHandlerNextIndex = (type)=>{

      console.log(this.state.baseStats.str);
      const oldIndex = this.state[type].index;
      console.log(oldIndex);
      const oldPart = this.state;
      console.log(oldPart);
      const changeIndex = oldIndex + 1;
      const array = classes.length;
      const newIndex = changeIndex % array;

      this.updateBodyPart(type,newIndex);

    }

    changeBodyHandlerPreviousIndex = (type) =>{

      let newIndex;
      const oldIndex = this.state[type].index;
      const array = classes.length;

      if(oldIndex ===0){
         newIndex = array -1;
      }
      else {
         newIndex = oldIndex -1;
      }

      this.updateBodyPart(type,newIndex);


    }
showClassHandler =()=>{
  console.log(this.state.index);
  console.log(this.state.currentClass);
  console.log('This is a ' + this.state.currentClass)

}
  saveCharacterHandler =(event)=>{
    console.log(event);
    console.log(this.state);
    console.log(this.state.head.class);
    const char = {
      head:{
      class:this.state.head.class
    },
    torso:{
      class:this.state.torso.class
    },
    leftleg:{
      class:this.state.leftleg.class
    },
    rightleg:{
      class:this.state.rightleg.class
    },
    leftarm:{
      class:this.state.leftarm.class
    },
    rightarm:{
      class:this.state.rightarm.class
    },
    currentClass:this.state.currentClass,
    baseStats:this.state.baseStats
    }
    axios.post('/characters.json',char)
    .then(response =>{
      this.setState({
        customizingReady:true

        })
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

        changeClass={this.changeClassHandlerNextIndex}
        showClass={this.showClassHandler}
        currentClass={this.state.currentClass}
        str={this.state.baseStats.str}
        dex={this.state.baseStats.dex}
        def={this.state.baseStats.def}
        int={this.state.baseStats.int}

      />
      <CustomControls
      partNext={this.changeBodyHandlerNextIndex}
      partPrevious={this.changeBodyHandlerPreviousIndex}
      currentClass={this.state.rightarm.class}
      saveChar={this.saveCharacterHandler.bind(this)}

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
