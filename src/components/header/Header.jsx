import acueIcon from '../../assets/logoacue.png'
import './header.css'

const Header = () => {
    return (
        <div className='headerContainer'>
            <img src={acueIcon} alt="" />
            <p>Apoie a <br />
            Comunidade LGBTQIA+ </p>
        </div>
    )
}

export default Header