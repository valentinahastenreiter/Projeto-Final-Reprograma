import 'mapbox-gl/dist/mapbox-gl.css'
import ReactMapboxGl, { Popup } from 'react-mapbox-gl'
import { ACCESS_TOKEN } from '../../constants'
import { useState, useEffect } from 'react'
// import prestadoresData from '../../data/mapa.json'
import './mapa.css'

const Map = ReactMapboxGl({
  accessToken: ACCESS_TOKEN

})

const Mapa = () => {

  const [repositorio, SetRepositorio] = useState([])

useEffect (() => {
    const getDados = async() => {
        const response = await fetch('https://my-json-server.typicode.com/valentinahastenreiter/repo-acue')
        const data = await response.json()
        SetRepositorio(data)
    }
    getDados()
}, [])

  return (
    <div className="mapaContainer">
      <form className="formcontainer" action="">
        <input type="text" placeholder="Digite o serviço" />
        <input type="text" placeholder="Digite o seu CEP" />
        <button type="submit">Buscar</button>
      </form>

      <Map
      // eslint-disable-next-line react/style-prop-object
        style="mapbox://styles/mapbox/streets-v10"
        center={[-40.32916950732293, -20.317755923578265]}
        zoom={[18]}
        containerStyle={{
          height: '57.5vh',
          width: '100vw'
        }}
      >
        {repositorio.map(repo => (
          <Popup
            className="popup"
            key={repo.id}
            coordinates={repo.coordinates}
            anchor="center"
          >
            <img src={repo.avatarUrl} alt={repo.nome} />
            <h4>{repo.nome}</h4>
          </Popup>
        ))}
      </Map>
    </div>
  )
}

export default Mapa
