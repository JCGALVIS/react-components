import React, { Component } from 'react';
import Button from '../button/button';

class ButtonLarge extends Component {
    render() {
        const {
            color,
            nameClass,
            id,
            name,
            onClick,
            text
        } = this.props;

        return (
            <Button
                color={color}
                nameClass={nameClass}
                display="block"
                id={id}
                name={name}
                onClick={onClick}
                text={text}
                width="100%"
            />
        );
    };
}

export default ButtonLarge;