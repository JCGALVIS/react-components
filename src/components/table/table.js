import React, { Component } from 'react';
import './table.css'

class Table extends Component{
    render(){
        const {
            id,
            name,
            nameClass
        } = this.props;
        return(
            <table 
                id={id}
                name={name}
                nameClass={nameClass}
            >
                {this.props.children}
            </table>
        );
    }
}

export default Table;