import React, { Component } from 'react';
import './App.css';
import Button from './components/button/button';
import ButtonLarge from './components/buttonLarge/buttonLarge'
import Input from './components/input/input'

class App extends Component {
  handleClick (e) {
    console.log(e)
    console.log(e.nativeEvent)
    var btnPrueba = document.getElementById('btnPrueba');
    alert('Hi here!')
  }

  render() {
    return (
      <div className="App">
        <div style={{paddingLeft: 16, paddingRight: 16}}>
          <Input type='text' placeHolder='Insert to data' value='@' />
        </div>
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
