import React, { Component } from 'react'
import './components.css'

export default class LembreteEntrada extends Component {
    state = {
        termo: ''
    }

    onTermoAlterado = (evento) => {
        this.setState({
            termo: evento.target.value
        })
    }

    onFormSubmit = (evento) => {
        evento.preventDefault()
        this.props.funcao(this.state.termo)
        this.setState({
            termo: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className='mt-4'>
                <div className='div-campo'>
                    <input 
                        type="text" 
                        name="campo-lembrete" 
                        id="campo-lembrete" 
                        placeholder={this.props.placeholderCampo} 
                        value={this.state.termo} 
                        onChange={this.onTermoAlterado} 
                        className='mb-3'
                        required
                    />
                    <i className='fa-solid fa-thumbtack'></i>
                </div>
                <button type='submit' className='w-100 botao'>
                    {this.props.textoBotao}
                </button>
            </form>
        )
    }
}

LembreteEntrada.defaultProps = {
    placeholderCampo: 'Buscar...',
    textoBotao: 'OK'
}