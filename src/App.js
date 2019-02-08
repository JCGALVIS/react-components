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
import Nav from './components/nav/nav';
import NavItem from './components/navItem/navItem';
import NavLink from './components/navLink/navLink';
import NavA from './components/nava/nava';
import Image from './components/image/image';
import img1 from './Assets/img/descarga.jpg';
import img2 from './Assets/img/images.jpg';

class App extends Component {
  constructor() {
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

        <Nav height="50px">
          <NavItem font="Arial" fontColor="white" fontSize="15px" width="10%" float="left">
            ESTE ES EL NAV
          </NavItem>
          <NavItem width="30%">
            <NavLink font="cursive"><NavA href="./">HOME</NavA></NavLink>
            <NavLink ><NavA href="./">CONTAINER</NavA></NavLink>
            <NavLink ><NavA href="./">ABOUT</NavA></NavLink>
          </NavItem>
          <NavItem width="10%" float="right">
            <Image src={img2}
                   nameClass = "imageUser"
              />
            
          </NavItem>
        </Nav>

        <Container>
          
        <Input type='text' onChange={e => this.setState({ intputText: e.target.value })} placeHolder='Insert to data' value={this.state.intputText} />
          <ContainerChildren width="50%" >
            <Button color="blue" text="Blue" />
            <Button color="green" text="Green" />
            <Button color="red" text="Red" />
            <Button text="Sin color" />
          </ContainerChildren>
          
          <ContainerChildren width="33%" float="left">
            <ButtonLarge color="blue" text="Prueba de boton largo" />
          </ContainerChildren>
          <ContainerChildren width="33%" float="left">
            <ButtonLarge color="red" text="Prueba de boton largo" />
          </ContainerChildren>
          <ContainerChildren width="33%" float="left">
            <ButtonLarge text="Prueba de boton largo" onClick={this.handleClick} />
          </ContainerChildren>         

          <ContainerChildren>
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
          </ContainerChildren>

          <ContainerChildren width="50%" float="left">
            <Select id="Select" height="34px">
              <Option value="">Seleccionar</Option>
              <Option value="value1">value1</Option>
              <Option value="value2">value2</Option>
              <Option value="value3">value3</Option>
            </Select>
          </ContainerChildren>
          <ContainerChildren width="50%" float="left">
            <Select id="Select" multiple>
              <Option value="value1">Value 1</Option>
              <Option value="value2">Value 2</Option>
              <Option value="value3">Value 3</Option>
            </Select>
          </ContainerChildren>
          <ContainerChildren>
            <Image src={img1} 
                   alt="Esta es una imagen de prueba" 
                   title="Esta imagen es bonita"
                   width="400"
              />
          </ContainerChildren>


        </Container>
      </div>
    );
  }
}

export default App;
