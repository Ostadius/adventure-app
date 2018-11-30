import React, { Component } from 'react';
import CharBuilder from './containers/CharBuilder/CharBuilder';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
    <div> 
    <Layout>
    <CharBuilder />
        </Layout>
    </div>
    );
  }
}

export default App;
