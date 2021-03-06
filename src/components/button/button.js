import React, { Component } from 'react';
import './button.css';

class Button extends Component {
    render() {
        const {
            color,
            nameClass,
            display,
            id,
            name,
            onClick,
            text,
            width
        } = this.props;

        return (
            <button 
                className={`button ${ color } ${nameClass}`}
                id={id}
                name={name}
                onClick={onClick}
                style={{display: display, width: width}}
            >
                {text}
            </button>
        );
    };
}

Button.defaultProps = {
    diplay: 'inline-block',
    width: 'none'
}

export default Button;