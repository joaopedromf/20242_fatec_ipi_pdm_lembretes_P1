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
            <div className='container'>
                <h1 className='h2 text-center mt-3'>Lembretes:</h1>
                {
                    this.state.lembretes.length === 0 ?
                        <p className='text-center my-4'>Não há lembretes.</p>
                    :
                        <LembreteLista lembretes={this.state.lembretes}/>   
                }
                <LembreteEntrada 
                    placeholderCampo='Digite seu novo lembrete'
                    textoBotao='Salvar'
                    funcao={this.salvarLembrete}
                />
            </div>
        )
    }
}