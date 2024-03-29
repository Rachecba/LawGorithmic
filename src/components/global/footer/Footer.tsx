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
                        <li><span><img alt='instagram' src='/assets/icons/location.png' /></span> Sabana, San José. Condominio Torres del Lago, Oficina 2-A</li>
                        <li><span><img alt='instagram' src='/assets/icons/mail-lightblue.png' /></span> info@lawgorithmic.io</li>
                        <li><a className='waze' target='_blank' href='https://ul.waze.com/ul?preview_venue_id=180813923.1808073698.3815409&navigate=yes&utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location' rel="noreferrer"><span><img alt='instagram' src='/assets/icons/waze.png'/></span> Abrir en Waze</a></li>
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
                    <p>Developed by <a className='duck_studios' target="_blank" href='https://duckstudios.net' rel="noreferrer">Duck Studios</a></p>
                </div>
            </Styled.CopyrightContainer>
        </Styled.Container>
    )
}

export default Footer