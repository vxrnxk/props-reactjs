import React, { Component } from 'react';

class Speed extends Component {
    render() {
        return(
            <div>
                <p>{ this.props.modelo } - { this.props.cor }</p>
            </div>
        ); 
    }
}

export default Speed;
