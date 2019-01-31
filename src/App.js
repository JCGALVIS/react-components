import React, { Component } from 'react';
import './App.css';
import Container from './components/container/container';
import Button from './components/button/button';
import ButtonLarge from './components/buttonLarge/buttonLarge'
import Input from './components/input/input'
import Table from './components/table/table'
import Tbody from './components/tdoby/tbody'
import Tcolumn from './components/tcolumn/tcolumn'
import Trow from './components/trow/trow'
import Thead from './components/thead/thead';
import Select from './components/select/select';
import Option from './components/option/option';
import ContainerChildren from './components/containerChildren/containerChildren';

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
      <Container>
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

        <ContainerChildren width="50%" float="left">
          <Select id="Select" height="34px">
            <Option value="">Seleccionar</Option>
            <Option value="value1">Value 1</Option>
            <Option value="value2">Value 2</Option>
            <Option value="value3">Value 3</Option>
            <Option value="value4">Value 4</Option>
          </Select>
          </ContainerChildren>
          <ContainerChildren width="50%" float="left">
          <Select id="Select" multiple>
            <Option value="value1">Value 1</Option>
            <Option value="value2">Value 2</Option>
            <Option value="value3">Value 3</Option>
          </Select>
        </ContainerChildren>
        

        </Container>
      </div>
    );
  }
}

export default App;
