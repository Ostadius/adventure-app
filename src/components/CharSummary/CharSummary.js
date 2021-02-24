import React,{Fragment, Component} from 'react';
import Button from '../UI/Button/Button';
import classes from './CharSummary.css';

class CharSummary extends Component {
  componentDidUpdate(){
    console.log('updating CharSum');
  }
  render(){
    const charClass = this.props.currentClass;
    const charHead = this.props.head;
    const charTorso = this.props.torso;
    const charLeftLeg = this.props.leftleg;
    const charLeftArm = this.props.leftarm;
    const charRightLeg = this.props.rightleg;
    const charRightArm = this.props.rightarm;
    const basesStatus = this.props.status;
    const status = Object.keys(basesStatus).map((statKeys,i)=>{
      return (
        <li key={i}>
          <span style={{textTransform:'capitalize'}}>{statKeys}</span> : {basesStatus[statKeys]}
        </li>
      )
    })
      return(
        <div className={classes.CharSummary}>
          <h3> Your Character </h3>
          <p> Your character is a {charClass} with the following specs:</p>
          <ul className={classes.CharList}>
            <li>Head: {charHead}</li>
            <li>Torso: {charTorso}</li>
            <li>Left Arm: {charLeftArm}</li>
            <li>Right Arm: {charRightArm}</li>
            <li>Left Leg: {charLeftLeg}</li>
            <li>Right Leg: {charRightLeg}</li>
          </ul>
          <ul className={classes.CharList}>
            {status}
          </ul>
          <p> Create character? </p>
          <Button btnType="Fail" clicked={this.props.cancelChar}>NO</Button>
          <Button btnType="Success" clicked={this.props.saveChar}>YES</Button>
        </div>
      )

  }

};

export default CharSummary;
