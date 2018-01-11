import React, { Component } from 'react';

import './App.css';
import Extension from './containers/Extension/Extension';

import dotenv from 'dotenv';
dotenv.config();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Extension />
      </div>
    );
  }
}

export default App;
