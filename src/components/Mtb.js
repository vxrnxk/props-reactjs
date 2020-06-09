import React, { Component } from 'react';

class Mtb extends Component {
    render() {
        return(
            <div>
                <p>{ this.props.modelo } - { this.props.cor }</p>
            </div>
        ); 
    }
}

export default Mtb;
