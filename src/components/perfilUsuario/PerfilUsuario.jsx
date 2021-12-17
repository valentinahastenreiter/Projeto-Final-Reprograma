import './perfilusuario.css'
import data from "../../data/usuario.json"

const PerfilUsuario = () => {
    return (
        <section className='usuarioContainer'>
        <div className='usuarioInfoBasicas'>
            <img src={data.avatarUrl} alt="" /> 
            <h1 className='usuarioNome'>{data.nome}</h1>
            <h2 className='usuarioCidade'>{data.endereco.cidade}</h2>
        </div>
        <div className='usuarioDados'>
            <p className='usuariorua'>{data.endereco.rua}</p>
            <p className='usuariobairro'>{data.endereco.bairro}</p>
            <p className='usuarioestado'>{data.endereco.estado}</p>
        </div>
        <button>Editar Perfil</button>
        </section>
    )
}

export default PerfilUsuario