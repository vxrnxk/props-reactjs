import React, { Component } from 'react';
import MainContainer from './components/MainContainer';

const dados = {
    speed: {
        modelo: 'Gonew Endorphine 2018',
        cor: 'Preto e Cinza',
    },
    mtb: {
        modelo: 'Caloi Sport 2020',
        cor: 'Preto e Amarelo',
    }
}

class App extends Component {
    render() {
        return <MainContainer infoMtb={ dados.mtb } infoSpeed={ dados.speed }/>
    }
}

export default App;
