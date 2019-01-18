import React, { Component } from 'react';
import './input.css';

class Input extends Component{
    render(){
        const{
            id,
            name,
            nameClass,
            placeHolder,
            type,
            value
        } = this.props;

        return(
            <input 
                className={`input ${nameClass}`}
                id={id}
                name={name}
                placeholder={placeHolder}
                type={type}
                value={value}
            />
        );
    }
}

export default Input;