import React from 'react'

const LembreteLista = ({lembretes}) => {
    const lista = lembretes.map((lembrete, key)=>(
        <div key={key} className="col-sm-12 col-md-6 col-lg-4">
            <div className="card bg-primary text-white p-2">{lembrete}</div>
        </div>
    ))

    return (
        <div className='border'>
            <div className="row g-3 p-3">
                {lista}
            </div>
        </div>
    )
}

export default LembreteLista