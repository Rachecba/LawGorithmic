import * as Styled from './Card.style'
import { Props } from './Cards.interface'

function Card({id, image, title, description }: Props) {

    return (
        <Styled.Container>
            <Styled.Banner backgroundImage={ image }/>
            <Styled.Description>
                <h1>{ title }</h1>
                <p>{ description }</p>
                <Styled.Button>
                    <button onClick={() => { window.location.href = '/news/' + id}}>Leer más</button>
                </Styled.Button>
            </Styled.Description>
        </Styled.Container>
    )

}

export default Card