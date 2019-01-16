import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button/button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button color="btn-blue" text="Blue"/>
        <Button color="btn-green" text="Green"/>
        <Button color="btn-red" text="Red"/>
      </div>
    );
  }
}

export default App;
