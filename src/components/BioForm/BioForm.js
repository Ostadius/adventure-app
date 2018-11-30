import React from 'react';
import classes from './BioForm.css';

const bioForm = (props) =>(
<div>
  <h2>Tell me more about your Legend</h2>
  <form >
  <textarea className={classes.BioForm} name='bio' rows='20' cols='70'>
  My legend....well...
  </textarea>
  <input type='submit' value='Compose' />
  </form>
  </div>
);

export default bioForm;
