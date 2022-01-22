import { Link } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';
import * as Styled from './Footer.style'

function Footer() {

    return (
        <Styled.Container>
            <Styled.SocialMediaContainer>
                <img alt='instagram' src='/assets/icons/instagram.png'/>
                <img alt='facebook' src='/assets/icons/facebook.png' />
            </Styled.SocialMediaContainer>
            <Styled.ShortcutsContainer>
                <Styled.Us>
                    <h1>Nosotros</h1>
                    <ul className="shortcuts">
                        <li><NavHashLink smooth to={'/#us'}>Historia</NavHashLink></li>
                        {/* <li><NavHashLink smooth to={'/#clients'}>Clientes</NavHashLink></li> */}
                        <li><NavHashLink smooth to={'/#services'}>Servicios</NavHashLink></li>
                        <li><NavHashLink smooth to={'/#team'}>Equipo</NavHashLink></li>
                        <li><Link to={'/news'}>Blogs</Link></li>
                    </ul>
                </Styled.Us>
                <Styled.Contact>
                    <h1>Contacto</h1>
                    <ul className="contacts">
                        <li><span><img alt='instagram' src='/assets/icons/phone-blue.png' /></span> 8466-4391</li>
                        <li><span><img alt='instagram' src='/assets/icons/location.png' /></span> Rohrmoser, 50m de Farmacia Fishel</li>
                        <li><span><img alt='instagram' src='/assets/icons/mail-lightblue.png' /></span> info@lawgorithmic.io</li>
                        <li><span><img alt='instagram' src='/assets/icons/waze.png'/></span> Abrir en Waze</li>
                    </ul>
                </Styled.Contact>
            </Styled.ShortcutsContainer>
            <Styled.CopyrightContainer>
                <div className='logo'>
                    <img alt='logo' src='/assets/images/Logo.png'/>
                </div>
                <div className='copyright'>
                    <p>© 2022 LawGorithmic. Todos los derechos reservados.</p>
                </div>
                <div className='powerBy'>
                    <p>Developed by <a className='duck_studios' target="_blank" href='https://duckstudios.net'>Duck Studios</a></p>
                </div>
            </Styled.CopyrightContainer>
        </Styled.Container>
    )
}

export default Footer