import React, { Component } from 'react';
import Background from './components/Background/Background';
import Name from './components/Name/Name';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Background/>
      <Name/>
      </div>
    );
  }
}

export default App;
