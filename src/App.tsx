import * as React from 'react';
import {Component} from "react";
import './App.css';
import {Manager} from './components/Manager';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Manager/>
        </p>
      </div>
    );
  }
}

export default App;
