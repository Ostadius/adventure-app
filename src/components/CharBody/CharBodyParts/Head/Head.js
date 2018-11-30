import React,{Component}from 'react';
import classes from './Head.css';

class Head extends Component{
  render(){
    let head= <div className={classes.defaultHead} />;

    switch(this.props.type){

      case('rogue-head'):
      head=<div className={classes.rogueHead} />
      break;
      case('mage-head'):
      head=<div className={classes.mageHead} />
      break;
      case('hunter-head'):
      head=<div className={classes.hunterHead} />
      break;
      default:
      head
    }
    return head= <div className={classes.defaultHead} />;
  }
};

export default Head;
