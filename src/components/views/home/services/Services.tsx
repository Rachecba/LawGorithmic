import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import * as Styled from './Services.style'
import { services } from '../../../../utils/constants/constants';


function Services() {
    const [ref, inView] = useInView()
    const [className, setClassName] = React.useState('')

    useEffect(() => {
        if (inView) {
            setClassName('animate__animated animate__backInLeft')
        }
      }, [inView]);

    return (
        <Styled.Container id="services">
            <Styled.Title>
                <h1>¿CÓMO PODEMOS AYUDARLE?</h1>
            </Styled.Title>
            <Styled.Boxes>
                {services.map((service) => { 
                    return (
                        <>
                            <Styled.Box className={className} ref={ref}>
                                <img src={service.icon} alt={ service.title }/>
                                <h1>{ service.title }</h1>
                                <p>{ service.description }</p>
                            </Styled.Box>
                        </>
                    )
                })}
            </Styled.Boxes>
            <Styled.SEO>
                <h1>Criptomonedas</h1>
                <h1>Blockchain</h1>
                <h1>Negocios Internacionales</h1>
                <h1>Finanzas Digitales</h1>
                <h1>Minimizar impacto fiscal</h1>
            </Styled.SEO>
        </Styled.Container>
    )
}

export default Services