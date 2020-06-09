import React, { Component } from 'react';
import Mtb from './Mtb';
import Speed from './Speed';

class MainContainer extends Component {
    render() {
        return(
           <div>
                <h2>Mtb</h2>
                <Mtb modelo={ this.props.infoMtb.modelo } cor={ this.props.infoMtb.cor } />
                
                <h2>Speed</h2>
                <Speed modelo={ this.props.infoSpeed.modelo } cor={ this.props.infoSpeed.cor }/>
           </div>
        );
    }
}

export default MainContainer;
