import React from 'react';
import classes from './BioForm.css';

const bioForm = (props) =>(
<div>
  <h2>Tell me more about your Legend</h2>
  <form className={classes.formStyle} >
  <textarea className={classes.BioForm} name='bio' rows='30' cols='200' >

  </textarea>
  <input type='submit' value='Compose' />
  </form>
  </div>
);

export default bioForm;
