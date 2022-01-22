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
                            <a className={className} ref={ref} target="_blank"><TiLocationArrow/></a>
                            <a className={className} ref={ref} href='https://wa.me/50684664391' target="_blank"><RiWhatsappFill/></a>
                            <a className={className} ref={ref} href = "mailto: info@lawgorithmic.io"><MdEmail/></a>
                    </div>
                    <div className='title'>
                        <h1>LawGorithmic</h1>
                        <p>Blockchain, negocios internacionales, inversiónes y más</p>
                    </div>
                </Styled.TitleContainer>
                {/* <a href='#'><div className="arrow bounce"></div></a> */}
            </Styled.BackgroundWrapper>
        </Styled.Container>
    )
}

export default Banner