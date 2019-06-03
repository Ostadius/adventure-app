import React,{Component, Fragment} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

class Layout extends Component{
  render(){
    return(
      <React.Fragment>
      <Toolbar  />
      <main className={classes.Layout}>
      {this.props.children}
      </main>
      </React.Fragment>

    );
  }
}


export default Layout;
