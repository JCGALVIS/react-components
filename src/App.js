import React, { Component } from 'react';
import './App.css';
import Button from './components/button/button';
import ButtonLarge from './components/buttonLarge/buttonLarge'

class App extends Component {
  handleClick (e) {
    console.log(e)
    console.log(e.nativeEvent)
    alert('Hi here!')
  }

  render() {
    return (
      <div className="App">
        <Button color="blue" text="Blue"/>
        <Button color="green" text="Green"/>
        <Button color="red" text="Red"/>
        <Button text="Sin color"/>
        <ButtonLarge color="blue" text="Prueba de boton largo" />
        <ButtonLarge color="red" text="Prueba de boton largo" />
        <ButtonLarge text="Prueba de boton largo" onClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
