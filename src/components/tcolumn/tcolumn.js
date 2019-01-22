import React, { Component } from 'react';

class Tcolumn extends Component {
    constructor(props) {
        super(props);
        this.state = { isTitle: false }        
    }

    componentDidMount(){
        this.setState({
            isTitle: this.props.isTitle
        });
    }

    render() {
        return this.state.isTitle
                ? <th>{this.props.children}</th>
                : <td>{this.props.children}</td>
            
    }
}

Tcolumn.defaultProps  = {
    isTitle: false
}

export default Tcolumn;