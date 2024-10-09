import React, { Component } from 'react'
import LembreteEntrada from './LembreteEntrada'
import LembreteLista from './LembreteLista'

export default class App extends Component {
    state = {
        lembretes: []
    }

    salvarLembrete = (lembrete) => {
        this.setState({
            lembretes: [...this.state.lembretes, lembrete]
        })
    }

    render() {
        return (
            <div className='container px-3 px-md-5 py-5 rounded-5 bg-white shadow-lg div-app'>
                <h1 className='h1 display-5 text-center mb-4'>Lembretes</h1>
                <LembreteLista lembretes={this.state.lembretes}/>
                <LembreteEntrada 
                    placeholderCampo='Digite seu novo lembrete'
                    textoBotao='Salvar'
                    funcao={this.salvarLembrete}
                />
            </div>
        )
    }
}