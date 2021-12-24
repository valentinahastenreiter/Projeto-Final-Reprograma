import './perfilprestador.css'
import { useState, useEffect } from 'react'

const PerfilPrestador = () => {
    const [repositorio, setRepositorio] = useState ([])

     return (
        <section className='prestadorContainer'>
        <div className='prestadoInfoBasicas'>
            <img src={repositorio.avatarUrl} alt="" />
            <h1 className='prestadorNome'>{repositorio.nome}</h1>
            <h2 className='prestadorProfissao'>{repositorio['profissao-servico']}</h2>
        </div>
        <div className='prestadorDados'>
            <p className='prestadorExperiencia'>{repositorio.experiencia}</p>
            <p className='prestadorPortifolio'>{repositorio.portifolio}</p>
            <p className='prestadorContato'>{repositorio.celular}</p> 
            <p className='prestadorSobre'>{repositorio.sobre}</p>
        </div>
        <button type='submit'>Me contrate</button>
        <button type='submit'>Avaliar</button>
        </section>

    )
}

export default PerfilPrestador