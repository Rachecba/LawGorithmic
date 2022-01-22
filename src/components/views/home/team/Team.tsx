import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { team } from '../../../../utils/constants/constants'
import * as Styled from './Team.style'
import 'animate.css';


function Team() {
    const [ref, inView] = useInView()
    const [className, setClassName] = React.useState('')

    useEffect(() => {
        if (inView) {
            setClassName('animate__animated animate__fadeInRight')
            console.log('entre')
        }
      }, [inView]);

    return (
        <Styled.Container id='team'>
            <Styled.Title>
                <h1>CONÓZCANOS</h1>
                <p>Nuestro equipo está conformado por los mejores abogados y profesionales, quienes le guiaremos y asesoraremos en cada proceso</p>
            </Styled.Title>
            <Styled.Cards>
                {team.map((item) => {
                    return (
                        <>
                            <Styled.Card className={className} ref={ref}>
                                <div className='image-container'>
                                    <img alt={item.name} src={item.image}/>
                                </div>
                                <div className='description-container'>
                                    <h1 className='name'>{item.name}</h1>
                                    <h1 className='position'>{item.position}</h1>
                                    <h1 className='career'>{item.career}</h1>
                                </div>
                            </Styled.Card>
                        </>
                    )
                 })}
            </Styled.Cards>
        </Styled.Container>
    )
}

export default Team