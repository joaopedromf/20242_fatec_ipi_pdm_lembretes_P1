import React, { Component } from 'react'
import './components.css'

export default class LembreteLista extends Component{
    state = {
        termoEditado: '',
        editando: null
    }

    onTermoEditado = (evento) => {
        this.setState({
            termoEditado: evento.target.value
        })
    }

    botaoEditar = (key, lembrete) => {
        this.setState({
            editando: key,
            termoEditado: lembrete
        })
    }

    botaoSalvar = (key) => {
        if(this.state.termoEditado){
            this.props.funcaoEditar(key, this.state.termoEditado)
            this.setState({
                editando: null
            })
        }
        else{
            this.botaoCancelar()
        }
    }

    botaoCancelar = () => {
        this.setState({
            editando: null
        })
    }

    lista = () => {
        return this.props.lembretes.map((lembrete, key)=>(
            <div key={key} className="col-sm-12 col-md-6 col-lg-4">
                <div className="rounded-2 text-white p-2 d-flex gap-3 flex-row justify-content-between lembrete">
                    <div className='d-flex align-items-center flex-grow-1 div-lembrete'>
                        {
                            this.state.editando === key ?
                                <input type="text" value={this.state.termoEditado} id={key} className='campo campo-menor' onChange={this.onTermoEditado} autoFocus/>
                            :
                                <p className='m-0 texto-lembrete' title={lembrete}>{lembrete}</p>
                        }
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        {
                            this.state.editando === key ?
                                <>
                                    <button title='Salvar' className='btn btn-success' onClick={() => this.botaoSalvar(key)}>
                                        <i className="fa-solid fa-check"></i>
                                    </button>
                                    <button title='Cancelar' className='btn btn-danger' onClick={() => this.botaoCancelar()}>
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </>
                            :
                                <>
                                    <button title='Editar' className='btn btn-warning' onClick={() => this.botaoEditar(key, lembrete)}>
                                        <i className="fa-solid fa-pencil"></i>
                                    </button>
                                    <button title='Excluir' className='btn btn-danger' onClick={() => this.props.funcaoExcluir(key)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </>
                        }
                    </div>
                </div>
            </div>
        ))
    }

    render(){
        return (
            <>
                {
                    this.props.lembretes.length === 0 ?
                        <div className='text-center my-5'>
                            <i className="fa-regular fa-calendar-xmark"></i>
                            <p className='mt-2 texto-nao'>Não há lembretes.</p>
                        </div>
                    :
                        <div className='border rounded div-lista'>
                            <div className="row g-3 p-3">
                                {this.lista()}
                            </div>
                        </div>
                }
            </>
        )
    }
}