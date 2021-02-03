import React, { Component } from 'react';
import CharBuilder from './containers/CharBuilder/CharBuilder';
import Home from './containers/Home/Home';
import Hub from './containers/Hub/Hub';
import BattleLogic from './containers/BattleLogic/BattleLogic';
import TempDatBase from './containers/TempDatBase/TempDatBase';
import Layout from './components/Layout/Layout';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <div>
    <Layout>
        <Switch>
          <Route path='/character-creator'component={CharBuilder} />
          <Route path='/hub'component={Hub} />
        {/* <Route path='/bio'component={Bio} />*/}
          <Route path='/tempDB'component={TempDatBase} />
          <Route path='/battle-logic'component={BattleLogic} />
          <Route path='/' exact component={Home} />
        </Switch>
    </Layout>
    </div>
    );
  }
}

export default App;
