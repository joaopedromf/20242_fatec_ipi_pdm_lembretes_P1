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

    editarLembrete = (key, lembreteEditado) => {
        this.state.lembretes.splice(key, 1, lembreteEditado)
        this.setState({
            lembretes: this.state.lembretes
        })
    }     

    excluirLembrete = (key) => {
        const texto = this.state.lembretes[key]
        const confirmacao = window.confirm(`Você deseja mesmo excluir o lembrete "${texto}"?`)
        if(confirmacao){
            this.state.lembretes.splice(key,1)
            this.setState({
                lembretes: this.state.lembretes
            })
            window.alert(`O lembrete "${texto}" foi excluído.`)
        }  
    }

    componentDidMount(){
        try{
            const listaLocalStorage = JSON.stringify(localStorage.getItem('lembretes'))
            const listaAspas = listaLocalStorage.split('"')[1]
            const lembretes = listaAspas.split(',')
            if(lembretes[0] !== ''){
                this.setState({
                    lembretes: lembretes
                })
            }
        }
        catch(e){}
    }

    componentDidUpdate(){
        localStorage.setItem('lembretes', this.state.lembretes)
    }

    render() {
        return (
            <div className='container px-3 px-md-5 py-5 rounded-5 bg-white shadow-lg div-app'>
                <h1 className='h1 display-5 text-center mb-4'>Lembretes</h1>
                <LembreteLista 
                    lembretes={this.state.lembretes}
                    funcaoEditar={this.editarLembrete}
                    funcaoExcluir={this.excluirLembrete}
                />
                <LembreteEntrada 
                    placeholderCampo='Digite seu novo lembrete'
                    textoBotao='Salvar'
                    funcao={this.salvarLembrete}
                />
            </div>
        )
    }
}