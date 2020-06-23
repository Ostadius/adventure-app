import React,{Component,Fragment} from 'react';
import CharDB from '../../components/CharDB/CharDB';
import axios from '../../axios-orders';

class TempDatBase extends Component{
state={
  chars:[],
  loading:true

}
componentDidMount(){
  axios.get('/characters.json').
  then( res=>{
    const fetchedChar =[];
    for(let key in res.data)
      fetchedChar.push({
        ...res.data[key],
        id:key
      })
      console.log(fetchedChar);
      this.setState({loading:false, chars:fetchedChar});

  }

).
catch(err=>{
  console.log(err);
  this.setState({loading:false})
}

)}

render(){
  console.log(this.state.chars);

  return(
  <div>
  <p> Hej hej </p>
      {this.state.chars.map(char=>(

        <CharDB
        id={char.id}
        class={char.class}
        index={char.index}
         />

      ))}

    </div>
  );
}

}


export default TempDatBase;
