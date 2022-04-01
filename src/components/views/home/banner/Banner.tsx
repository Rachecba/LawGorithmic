import React, { useEffect } from 'react';
import Header from '../../../global/header/Header'
import * as Styled from './Banner.style'
import { TiLocationArrow } from "react-icons/ti";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useInView } from 'react-intersection-observer';
import 'animate.css';


function Banner() {
    const [ref, inView] = useInView()
    const [className, setClassName] = React.useState('')

    useEffect(() => {
        if (inView) {
            setClassName('animate__animated animate__bounce')
            console.log('entre')
        }
      }, [inView]);


    return (
        <Styled.Container>
            <Styled.BackgroundWrapper>
                <img className="bottom" src="/assets/images/Lawtech.jpg" alt='banner'/>
                <img className="top" src="/assets/images/Legaltech.jpg" alt='banner' />
                <Header />
                <Styled.TitleContainer>
                    <div className='contact-buttons'>
                            <a className={className} ref={ref} href='https://ul.waze.com/ul?preview_venue_id=180813923.1808073698.3815409&navigate=yes&utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location' target="_blank" rel="noreferrer"><TiLocationArrow/></a>
                            <a className={className} ref={ref} href='https://wa.me/50684664391' target="_blank" rel="noreferrer"><RiWhatsappFill/></a>
                            <a className={className} ref={ref} href = "mailto: info@lawgorithmic.io"><MdEmail/></a>
                    </div>
                    <div className='title'>
                        <h1>LawGorithmic</h1>
                        <p>Especialistas en Derecho Digital y nuevas tecnologías </p>
                    </div>
                </Styled.TitleContainer>
                {/* <a href='#'><div className="arrow bounce"></div></a> */}
            </Styled.BackgroundWrapper>
        </Styled.Container>
    )
}

export default Banner