import React,{Component,Fragment} from 'react';
import CharDB from '../../components/CharDB/CharDB';
import axios from '../../axios-orders';
class TempDatBase extends Component{
state={
  char:[],
  loading:true

}
componentDidMount(){
  axios.get('/character.json').
  then( res=>{
    const fetchedChar =[];
    for(let key in res.data)
      fetchedChar.push({
        ...res.data[key],
        id:key
      })
      console.log(fetchedChar);
      this.setState({loading:false, char:fetchedChar});

  }

).
catch(err=>{
  console.log(err);
  this.setState({loading:false})
}

)}

render(){
  console.log(this.state.char);

  return(
  <div>

      {this.state.char.map(ch=>(

        <CharDB
        id={ch.id}
        class={ch.class}
        index={ch.index}
        />
      ))}

    </div>
  );
}

}


export default TempDatBase;
