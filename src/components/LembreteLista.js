import React from 'react'
import './components.css'

const LembreteLista = ({lembretes}) => {
    const lista = lembretes.map((lembrete, key)=>(
        <div key={key} className="col-sm-12 col-md-6 col-lg-4">
            <div className="rounded-2 text-white p-2 d-flex gap-3 flex-row justify-content-between lembrete">
                <div className='d-flex align-items-center flex-grow-1 div-lembrete'>
                    <p className='m-0 texto-lembrete' title={lembrete}>{lembrete}</p>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <button title='Editar' className='btn btn-warning'>
                        <i className="fa-solid fa-pencil"></i>
                    </button>
                    <button title='Excluir' className='btn btn-danger'>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    ))

    return (
        <>
            {
                lembretes.length === 0 ?
                    <div className='text-center my-5'>
                        <i className="fa-regular fa-calendar-xmark"></i>
                        <p className='mt-2 texto-nao'>Não há lembretes.</p>
                    </div>
                :
                    <div className='border rounded div-lista'>
                        <div className="row g-3 p-3">
                            {lista}
                        </div>
                    </div>
            }
        </>
    )
}

export default LembreteLista