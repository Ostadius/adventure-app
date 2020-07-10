import React from 'react';
import PlayersPanel from './PlayersPanel/PlayersPanel';
import classes from './PlayersPanels.css';

const playerPanels = (props) =>{


console.log(props.characters);
  return(
    <div className={classes.Panels}>
      <PlayersPanel
      characters={props.characters}
      />

      <PlayersPanel
      characters={props.characters}

       />
    </div>
  )
};

export default playerPanels;
