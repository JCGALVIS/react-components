import React, { Component } from 'react';
import './nava.css'

class NavA extends Component{
    render(){
        const{
            id,
            name,
            nameClass,
            href,
            fontColor
        } = this.props;
        return(
            <a 
                id={id}
                name={name}
                className={`a ${nameClass}`}
                href={href}
                style={{color: fontColor}}
            >
                {this.props.children}
            </a> 
        );
    }
}

export default NavA;