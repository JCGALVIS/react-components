import React, { Component } from 'react';
import './containerChildren.css'

class ContainerChildren extends Component{
    render(){
        const {
            id,
            name,
            nameClass,
            color = 'white',
            width = 'auto', 
            float
        } = this.props;
        return(
            <div
            className={`containerChildren ${nameClass}`}
            id = {id}
            name = {name}
            style = {{backgroundColor: color, width: width, float: float}}
            >
                <div>
                     {this.props.children}
                </div>
            </div>
        );
    }
}

export default ContainerChildren;