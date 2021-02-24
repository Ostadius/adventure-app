import React,{Component,Fragment} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';

class Layout extends Component{
  state={
    show:false
  }
  closedHandler=()=>{
    this.setState({show:false});
  }
  toggleHandler=()=>{
    this.setState((prevState)=>{
      return {show:!prevState.show}
    });
  }
  render(){
    return(
      <Fragment>
        <Toolbar drawerToggleClicked={this.toggleHandler} />
        <SideDrawer open ={this.state.show} closed={this.closedHandler} />
        <main className={classes.Layout}>
        {this.props.children}
        </main>
      </Fragment>

    );
  }
}


export default Layout;
