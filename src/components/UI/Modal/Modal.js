import React,{memo,Fragment} from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

const modal =(props)=>(
  <Fragment>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div className={`${props.show?classes.Modal:classes.unModal}`}>
      {props.children}
    </div>
  </Fragment>

);

export default React.memo(modal);
