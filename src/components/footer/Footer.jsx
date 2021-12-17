import facebookIcon from '../../assets/facebook.png'
import instagramIcon from '../../assets/instagram.png'
import linkedinIcon from '../../assets/linkedin.png'
import twitterIcon from '../../assets/twitter.png'
import './footer.css'

const Footer = () => {
    return (
        <section className='footerContainer'>
            <div className="footerLinks">
                <a
                    href="https://www.facebook.com/tina.hastenreiter"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={facebookIcon} alt="Ícone do Facebook" />
                </a>
                <a
                    href="https://twitter.com/ValentinaHaste1"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={twitterIcon} alt="Ícone do Twitter" />
                </a>
                <a
                    href="https://www.instagram.com/v.hasten/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={instagramIcon} alt="Ícone do Instagram" />
                </a>
                <a
                    href="https://www.linkedin.com/in/valentina-hastenreiter-0b268a21a/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={linkedinIcon} alt="Ícone do LinkedIn" />
                </a>
            </div>
            <div>
                <p>Desenvolvido por Valentina Hastenreiter, aluna do Reprograma</p>
            </div>
            <div className='footerImagem'>
                <div className='corQuadrado vermelho'></div>
                <div className='corQuadrado laranja'></div>
                <div className='corQuadrado amarelo'></div>
                <div className='corQuadrado azul'></div>
                <div className='corQuadrado verde'></div>
                <div className='corQuadrado roxo'></div>
                <div className='corQuadrado vermelho'></div>
                <div className='corQuadrado laranja'></div>
                <div className='corQuadrado amarelo'></div>
                <div className='corQuadrado azul'></div>
                <div className='corQuadrado verde'></div>
                <div className='corQuadrado roxo'></div>
            </div>
        </section>

    )
}

export default Footer