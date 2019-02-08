import React, { Component } from 'react';
import './select.css'

class Select extends Component{
    render(){
        const {
            id,
            name,
            nameClass,
            multiple,
            height
        } = this.props;
        return(
            <select
            id={id}
            name = {name}
            className = {`select ${nameClass}`}
            multiple={multiple}
            style={{height:height}}
            >
                {this.props.children}                
            </select>
        );
    }

}

export default Select;