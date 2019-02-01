import React, { Component } from 'react';
import './navItem.css';

class navItem extends Component{
    render(){
        const {
            nameClass,
            id,
            name,
            float,
            width,
            font,
            fontColor,
            fontSize
        } = this.props;
       
        return(
            <ul
            id={id}
            name = {name}
            className = {`navItem ${nameClass}`}
            style = {{
                      float: float,
                      width: width, 
                      fontFamily: font, 
                      color: fontColor, 
                      fontSize: fontSize
                    }}
            >
            <div>
                {this.props.children}
            </div>            
            </ul>
        );
    }

}

export default navItem;