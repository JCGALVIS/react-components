import React, { Component } from 'react';
import './button.css';

class Button extends Component {
    render() {
        const {
            color,
            text
        } = this.props;

        return (
            <button className={`button ${ color }`}>{text}</button>
        );
    };
}

export default Button;