import 'mapbox-gl/dist/mapbox-gl.css'
import ReactMapboxGl, { Popup } from 'react-mapbox-gl'
import { ACCESS_TOKEN } from '../../constants'
import prestadoresData from '../../data/mapa.json'
import './mapa.css'


const Map = ReactMapboxGl({
  accessToken: ACCESS_TOKEN
})

const mapBoxStyle = 'mapbox://styles/mapbox/streets-v10'

const Mapa = () => {
  return (
    <div className="mapaContainer">
      <form className="formcontainer" action="">
        <input type="text" placeholder="Digite o serviço" />
        <input type="text" placeholder="Digite o seu CEP" />
        <button type="submit">Buscar</button>
      </form>



      <Map
        style={mapBoxStyle}
        center={[-40.32916950732293, -20.317755923578265]}
        zoom={[18]}
        containerStyle={{
          height: '54.4vh',
          width: '100vw'
        }}
      >
        {prestadoresData.map(prestador => (
          <Popup
            className="popup"
            key={prestador.id}
            coordinates={prestador.coordinates}
            anchor="center"
          >
            <img src={prestador.avatarUrl} alt={prestador.nome} />
            <h4>{prestador.nome}</h4>
          </Popup>
        ))}
      </Map>
    </div>
  )
}

export default Mapa
