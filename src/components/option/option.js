import React, { Component } from 'react';

class Option extends Component{
    render(){
        const {
            value
        } = this.props;
        return(
            <option
                value = {value}
            >
                {this.props.children}
            </option>
        );
    }
}

export default Option;