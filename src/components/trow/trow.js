import React, { Component } from 'react';

class Trow extends Component{
    render(){
        return(
            <tr>{this.props.children}</tr>
        );
    }
}

export default Trow;