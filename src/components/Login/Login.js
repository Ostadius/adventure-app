import React from 'react';
import classes from './Login.css';
import loginlogo from '../../assets/loginpic.png'
const login =(props)=>{
  return (
    <div className={classes.Login}>
        <img alt="Login-pic" src={loginlogo} className={classes.LogPic} />
        <div className={classes.LoginHead}><a>Login Dawg</a></div>
        <input placeholder='Username' onChange={props.changed}></input>
        <input placeholder='Password' onChange={props.changed}></input>
        <button onClick={props.loginBtn} className={classes.btnStyle}>Login Playa</button>
    </div>


  )
}

export default login;
