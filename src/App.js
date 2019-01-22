import React, { Component } from 'react';
import './App.css';
import Button from './components/button/button';
import ButtonLarge from './components/buttonLarge/buttonLarge'
import Input from './components/input/input'
import Table from './components/table/table'
import Tbody from './components/tdoby/tbody'
import Tcolumn from './components/tcolumn/tcolumn'
import Trow from './components/trow/trow'
import Thead from './components/thead/thead';

class App extends Component {
  constructor(){
    super();
    this.state = {
      intputText: '@'
    }
  }
  handleClick(e) {
    console.log(e)
    console.log(e.nativeEvent)
    alert('Hi here!')
  }

  render() {
    return (
      <div className="App">
        <div style={{ paddingLeft: 16, paddingRight: 16 }}>
          <Input type='text' onChange={e => this.setState({ intputText: e.target.value })} placeHolder='Insert to data' value={this.state.intputText}/>
        </div>
        <Button color="blue" text="Blue" />
        <Button color="green" text="Green" />
        <Button color="red" text="Red" />
        <Button text="Sin color" />
        <ButtonLarge color="blue" text="Prueba de boton largo" />
        <ButtonLarge color="red" text="Prueba de boton largo" />
        <ButtonLarge text="Prueba de boton largo" onClick={this.handleClick} />
        <Table id='tbNombre'>
          <Thead>
            <Trow>
              <Tcolumn isTitle>#</Tcolumn>
              <Tcolumn isTitle>Nombre</Tcolumn>
              <Tcolumn isTitle>Apellido</Tcolumn>
              <Tcolumn isTitle>Identificación</Tcolumn>
            </Trow>
          </Thead>
          <Tbody>
            <Trow>
              <Tcolumn>1</Tcolumn>
              <Tcolumn>Juan</Tcolumn>
              <Tcolumn>Galvis</Tcolumn>
              <Tcolumn>145548855</Tcolumn>
            </Trow>
            <Trow>
              <Tcolumn>2</Tcolumn>
              <Tcolumn>Pepito</Tcolumn>
              <Tcolumn>Perez</Tcolumn>
              <Tcolumn>5466365586</Tcolumn>
            </Trow>
          </Tbody>
        </Table>
      </div>
    );
  }
}

export default App;
