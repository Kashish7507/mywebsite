import React, { Component } from 'react';
import Background from './components/Background/Background';
import Name from './components/Name/Name';
import Description from './components/Description/Description';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Background/>
      <Name/>
      <Description/>
      </div>
    );
  }
}

export default App;
