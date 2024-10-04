import React, { Component } from 'react'

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
                <input 
                    type="text" 
                    name="campo-lembrete" 
                    id="campo-lembrete" 
                    placeholder={this.props.placeholderCampo} 
                    value={this.state.termo} 
                    onChange={this.onTermoAlterado} 
                    className='form-control mb-3'
                    required
                />
                <button type='submit' className='btn btn-primary w-100'>
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