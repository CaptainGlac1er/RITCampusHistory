import React, { Component } from 'react';
import TimeLapse from './Components/TimeLapse';
import logo from './rit_logo.png';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPos: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">RIT Campus History</h1>
        </header>
        <div className="App-content">
          <TimeLapse id="TimeLapse" source="test.png"/>
        </div>
      </div>
    );
  }
}

export default App;
