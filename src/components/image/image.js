import React, { Component } from 'react';
import './image.css';

class Image extends Component{
    render(){
        const{
            id,
            name,
            nameClass,
            src,
            alt,
            width,
            height,
            title
        }= this.props;
        return(
            <img 
                id={id}
                name={name}
                className={`image ${nameClass}`}
                src={src}
                alt={alt}
                width={width}
                height={height}
                title={title}
            >
            </img>
        );
    }
}

export default Image;