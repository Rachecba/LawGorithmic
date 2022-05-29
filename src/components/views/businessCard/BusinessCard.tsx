import React from 'react';
import * as Styled from './BusinessCard.style'
import Header from '../../global/header/Header'
import { arrows } from '../../../utils/constants/constants';


function BusinessCard() {    
  
    return (
        <Styled.Container>
            <Header position={ true } />
            <Styled.InnerContainer>
            <Styled.CardContainer>
                <Styled.CardFront className='front'>
                    <Styled.CardContent>
                        <Styled.ArrowsTopFront>
                            { arrows }
                        </Styled.ArrowsTopFront>
                        <Styled.Logo>
                            <img src='\assets\images\Logo_block.png' alt='LG logo'/>
                        </Styled.Logo>
                        <Styled.ArrowsBottomFront>
                            { arrows }
                        </Styled.ArrowsBottomFront>
                        <Styled.Tap>
                            <p>Tap to flip</p>
                        </Styled.Tap>
                    </Styled.CardContent>
                </Styled.CardFront>
                <Styled.CardBack className='back'>
                    <Styled.CardContent>
                        <Styled.ArrowsTopBack>
                           { arrows }
                        </Styled.ArrowsTopBack>
                        <Styled.LogoBack>
                            <img src='\assets\images\Logo.png' alt='LG logo'/>
                        </Styled.LogoBack>
                        <Styled.ContactInfo>
                            <div className='contact-group clickable' onClick={ () => window.location.href='mailto:info@lawgorithmic.io'}>
                                <span><img alt='mail' src='\assets\icons\mail.png' /></span>
                                <p>info@lawgorithmic.io</p>
                            </div>
                            <div className='contact-group'>
                                <span><img alt='phone' src='\assets\icons\phone-card.png' /></span>
                                <p>8466-4391</p>
                            </div>
                            <div className='contact-group'>
                                <span><img alt='location' src='\assets\icons\pin.png' /></span>
                                <p>Rohrmoser, 50m norte de Euromobilia</p>
                            </div>
                            <div className='contact-group clickable' onClick={ () => window.location.href='https://www.instagram.com/lawgorithmic/'}>
                                <span><img alt='instagram' src='\assets\icons\ig.png' /></span>
                                <p>@lawgorithmic</p>
                            </div>
                            <div className='home clickable' onClick={ () => window.location.href='/'}>
                                <span><img alt='home' src='\assets\icons\home-card.png' /></span>
                                <p>Ver servicios</p>
                            </div>
                        </Styled.ContactInfo>
                        <Styled.ArrowsBottomBack>
                            { arrows }
                        </Styled.ArrowsBottomBack>
                    </Styled.CardContent>
                    </Styled.CardBack>
                </Styled.CardContainer>
                </Styled.InnerContainer>
        </Styled.Container>
    )

}

export default BusinessCard