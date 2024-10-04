import React, { Component } from 'react'
import LembreteEntrada from './LembreteEntrada'

export default class App extends Component {
    state = {
        lembretes: []
    }

    salvarLembrete = (lembrete) => {
        this.state.lembretes.push(lembrete)
        console.log(this.state.lembretes)
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        
                    </div>
                </div>
                <LembreteEntrada 
                    placeholderCampo='Digite seu novo lembrete'
                    textoBotao='Salvar'
                    funcao={this.salvarLembrete}
                />
            </div>
        )
    }
}
