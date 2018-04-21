import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Nav from '../Nav/Nav';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Oh, the places you've been</h1>
          <h4><i>Reflection Board</i></h4>
        </header>
          <Nav />
        <br/>
      </div>
    );
  }
}

export default App;
