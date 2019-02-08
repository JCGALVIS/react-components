import React, { Component } from 'react';
import './navLink.css'

class Navlink extends Component{
    render(){
        const {
            id,
            name,
            nameClass,
            font
            //colorHover
        } = this.props;
        return(
            <li
             id = {id}
             name = {name}
             className = {`navLink ${nameClass}`}
             style={{fontFamily: font}}
            > 
            {this.props.children}                            
            </li>
        );
    }
}

export default Navlink;