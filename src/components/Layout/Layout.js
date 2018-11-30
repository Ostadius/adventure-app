import React,{Component} from 'react';
import Aux from '../../hoc/_Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './Layout.css'
class Layout extends Component{
  render(){
    return(
      <Aux>
      <Toolbar  />
      <main className={classes.Layout}>
      {this.props.children}
      </main>
      </Aux>

    );
  }
}


export default Layout;
