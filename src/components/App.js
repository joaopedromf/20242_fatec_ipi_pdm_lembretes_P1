import React, { Component } from 'react'
import LembreteEntrada from './LembreteEntrada'
import LembreteLista from './LembreteLista'

export default class App extends Component {
    state = {
        lembretes: ['Preparar aula de programação','Fazer feira','Preparar marmitas']
    }

    salvarLembrete = (lembrete) => {
        this.state.lembretes.push(lembrete)
        console.log(this.state.lembretes)
    }

    render() {
        return (
            <div className='container'>
                <h1 className='h2 text-center mt-3'>Lembretes:</h1>
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