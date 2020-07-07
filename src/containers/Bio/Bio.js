import React, {Component,Fragment} from 'react';
import BioForm from '../../components/BioForm/BioForm';
import BackButton from '../../components/Navigation/BackButton/BackButton';
import Input from '../../components/UI/Input/Input';



class Bio extends Component{
  state ={
    bioForm:{
      backstory:{
        elementType:'input',
        elementConfig:{
          type:'text',
          placeholder:'Your story',
          fieldtype:'backstory'
        },
        value:'',
        validation: {
          required:true,

        },
        valid :false,
        touched:false
      }
    }
  }
  render(){
    return(
      <Fragment>
      <Input
      bioForm={this.state.bioForm}
      backstory={this.state.bioForm.backstory}
      elementType={this.state.bioForm.elementType}
        />
      <BioForm
        />
      <BackButton />
        </Fragment>
    );
  }
}
export default Bio;
