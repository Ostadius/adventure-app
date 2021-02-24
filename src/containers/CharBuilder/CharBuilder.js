import React, {Component,Fragment} from 'react';
import CustomControls from '../../components/CharBody/CustomControls/CustomControls';
import CharBody from '../../components/CharBody/CharBody';
import CharDB from '../../components/CharDB/CharDB';
import CharStats from '../../components/CharStats/CharStats';
import CharSummary from '../../components/CharSummary/CharSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorBoundary from '../../hoc/ErrorBoundary/ErrorBoundary';
import classes from './CharBuilder.css';
import axios from '../../axios-orders.js';
const jobclasses = ['default','berserker','rogue','scribe','engineer'];
class CharBuilder extends Component{
  state={
      status:{
        str:10,
        dex:10,
        vit:10,
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
      customizing:false,
      classInfo:`This is just a commoner, but aren't we all?`,
      error:null  ,
      loading:false
      }

    updateCurrentClass (ind){
      this.setState({currentClass: jobclasses[ind], index:ind})

    }
    updateBodyPart(type,newIndex){
      this.setState({
        [type]:{
          index:newIndex,
          class:jobclasses[newIndex]}
      })
    }
    componentDidMount(){

    }
    componentDidUpdate(prevProps,prevState  ){
      const classJob = this.state.currentClass;
      if(prevState.currentClass !== classJob ){
        axios.get('/classInfo.json')
        .then(response =>{
          const responseStatus =response.data[classJob].status;
          this.setState({
            classInfo:response.data[classJob].info,
            status:{
              str:responseStatus.str,
              dex:responseStatus.dex,
              vit:responseStatus.vit,
              int:responseStatus.int,
            }})
        })


      }
    }
    changeClassHandlerNextIndex = (type)=>{
      const oldIndex = this.state.index;
      const changeIndex = oldIndex +1
      const array = jobclasses.length
      const newIndex = changeIndex % array;

      this.updateCurrentClass(newIndex);

    }
    changeBodyHandlerNextIndex = (type)=>{
      const oldIndex = this.state[type].index;
      const changeIndex = oldIndex + 1;
      const array = jobclasses.length;
      const newIndex = changeIndex % array;

      this.updateBodyPart(type,newIndex);

    }

    changeBodyHandlerPreviousIndex = (type) =>{
      const oldIndex = this.state[type].index;
      const changeIndex = oldIndex -1;
      const array = jobclasses.length;
      const newIndex= (oldIndex===0) ? array -1 : changeIndex;

      this.updateBodyPart(type,newIndex);


    }
showClassHandler =()=>{
  console.log('This is a ' + this.state.currentClass)

}
  saveCharacterHandler =(event)=>{
    this.setState({loading:true})
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
    status:this.state.status
    }
    axios.post('/characters.json',char)
    .then(response =>{
      this.customizingCancelHandler();
      this.setState({loading:false})
    }).catch(error=>{
      this.setState({error:true})
    })


  }
  customizingHandler =()=>{
    this.setState({customizing:true})
  }

  customizingCancelHandler =()=>{
    this.setState({customizing:false})
  }
  render(){
    let charSummary = this.state.error ? <p>Can't load son</p>: <Spinner />

    if(this.state.loading){
    charSummary=  <Spinner />;
}
    if(!this.state.loading){
     charSummary=
     <ErrorBoundary>
     <CharSummary
     currentClass={this.state.currentClass}
     head={this.state.head.class}
     torso={this.state.torso.class}
     leftarm={this.state.leftarm.class}
     rightarm={this.state.rightarm.class}
     leftleg={this.state.leftleg.class}
     rightleg={this.state.rightleg.class}
     status={this.state.status}
     saveChar={this.saveCharacterHandler.bind(this)}
     cancelChar={this.customizingCancelHandler}
     />
     </ErrorBoundary>
    }


    return(
      <Fragment>
      <Modal show={this.state.customizing} modalClosed={this.customizingCancelHandler}>
        {charSummary}
      </Modal>
      <div className={classes.flexContainer}>

      <CharStats
       changeClass={this.changeClassHandlerNextIndex}
       showClass={this.showClassHandler}
       currentClass={this.state.currentClass}
       classInfo={this.state.classInfo}
       str={this.state.status.str}
       dex={this.state.status.dex}
       vit={this.state.status.vit}
       int={this.state.status.int}
       />
      <CharBody
        currentClass={this.state.currentClass}
        head={this.state.head.class}
        torso={this.state.torso.class}
        leftarm={this.state.leftarm.class}
        rightarm={this.state.rightarm.class}
        leftleg={this.state.leftleg.class}
        rightleg={this.state.rightleg.class}
        />
        <CustomControls
        partNext={this.changeBodyHandlerNextIndex}
         partPrevious={this.changeBodyHandlerPreviousIndex}
         currentClass={this.state.rightarm.class}
         pushChar={this.customizingHandler}
         classInfo={this.state.classInfo}
        />



       </div>


      </Fragment>
    );
  }
}

export default CharBuilder;
