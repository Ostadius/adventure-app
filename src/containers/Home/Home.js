import React ,{Component,Fragment} from 'react';
import Login from '../../components/Login/Login';


class Home extends Component{
  state ={
    loginForm:{

    }
  }

  inputChangeHandler=(event)=>{
    console.log(event.target.value);

  }
  loginButton =(event)=>{
    alert('trying to log in but...')
  }
  render (){
    return(
      <Fragment>
      <Login
        changed={(event)=>this.inputChangeHandler(event)}
        loginBtn={(event)=>this.loginButton(event)}/>
          <form>
          </form>

      </Fragment>

    )

  }
}
export default Home;
