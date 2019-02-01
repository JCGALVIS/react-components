import React, { Component } from 'react';
import './nav.css';

class Nav extends Component{
    render(){
        const {
            id,
            nameClass,
            name,
            color,
            height,
            margin, 
            padding
        } = this.props;
        return(
            <nav
                id={id}
                className = {`nav ${nameClass}`}
                name = {name}
                style = {{backgroundColor: color, height: height, margin:margin, padding: padding}}
            >
                {this.props.children}
            </nav>
        );
    }
}

export default Nav;