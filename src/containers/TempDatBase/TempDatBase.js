import React,{Component,Fragment} from 'react';
import CharDB from '../../components/CharDB/CharDB';
import CharMiniView from '../../components/CharMiniView/CharMiniView';

import axios from '../../axios-orders';

class TempDatBase extends Component{
state={
  chars:[],
  loading:true

}
componentDidMount(){
  axios.get('/characters.json')
  .then( res=>{
    const fetchedChar =[];
    for(let key in res.data)
      fetchedChar.push({
        ...res.data[key],
        id:key
      })
      this.setState({loading:false, chars:fetchedChar});

  }

)
.catch(err=>{
  console.log(err);
  this.setState({loading:false})
}

)}

render(){



  return(
  <Fragment>

      {this.state.chars.map(char=>(
        <div key={char.id}>
        <CharDB
        id={char.id}
        class={char.currentClass}
        index={char.index}
         />
         <CharMiniView
         currentClass={char.currentClass}
         id={char.id}
         head={char.head.class}
         torso={char.torso.class}
         leftarm={char.leftarm.class}
         rightarm={char.rightarm.class}
         leftleg={char.leftleg.class}
         rightleg={char.rightleg.class}
          />
         </div>
      ))}

    </Fragment>
  );
}

}


export default TempDatBase;
