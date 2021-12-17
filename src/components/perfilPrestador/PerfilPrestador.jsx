import './perfilprestador.css'
import data from '../../data/prestador.json'

const PerfilPrestador = () => {
    return (
        <section className='prestadorContainer'>
        <div className='prestadoInfoBasicas'>
            <img src={data.avatarUrl} alt="" />
            <h1 className='prestadorNome'>{data.nome}</h1>
            <h2 className='prestadorProfissao'>{data['profissao-servico']}</h2>
        </div>
        <div className='prestadorDados'>
            <p className='prestadorExperiencia'>{data.experiencia}</p>
            <p className='prestadorPortifolio'>{data.portifolio}</p>
            <p className='prestadorContato'>{data.celular}</p> 
            <p className='prestadorSobre'>{data.sobre}</p>
        </div>
        <button type='submit'>Me contrate</button>
        <button type='submit'>Avaliar</button>
        </section>

    )
}

export default PerfilPrestador