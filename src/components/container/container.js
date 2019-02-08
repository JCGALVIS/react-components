import React, { Component } from 'react';
import './container.css'

class Container extends Component{
    render(){
        const {
            id,
            name,
            nameClass
        } = this.props;
        return(
            <div
            className={`container ${nameClass}`}
            id = {id}
            name = {name}
            >
            {this.props.children}
            </div>
        );
    }
}

export default Container;