import * as Styled from './Clients.style'
import { logos, testimonials } from '../../../../utils/constants/constants'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import { truncate } from 'fs';

function Clients() {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <Styled.Container id='clients'>
            <Styled.Logos>
                {logos.map((item) => {
                    return (
                        <>
                            <img src={item.image} alt={item.description}/>
                        </>   
                    )
                })}
            </Styled.Logos>
            <Styled.Carousel>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
                touchEnabled={true}
                bullets={true}
                animation='fallAnimation'>
                {testimonials.map((item) => {
                    return(
                    <div data-src={item.image}/>
                    )
                })}
            </AutoplaySlider>
            </Styled.Carousel>
        </Styled.Container>
    )
}

export default Clients