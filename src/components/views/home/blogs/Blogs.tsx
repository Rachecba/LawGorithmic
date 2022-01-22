import { faWindows } from '@fortawesome/free-brands-svg-icons'
import { mainBlogs } from '../../../../utils/constants/constants'
import * as Styled from './Blogs.style'
import Card from './Cards/Card'

function Blogs() {

    return (
        <Styled.Container id='blogs'>
            <Styled.Band>
                <div className='title'>
                    <h1>Noticias</h1>
                </div>
                <div className='text'>
                    <p>Manténgase informado con nosotros de las noticias y acontecimientos más importantes que están sucediendo 
                        a nivel mundial con respecto a las criptomonedas.
                    </p>
                    <button onClick={ () => window.location.href='/news'}>Ver todas</button>
                </div>
            </Styled.Band>
            <Styled.Cards>
                {mainBlogs.map((item) => {
                    return (
                        <>
                            <Card
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                            />
                        </>
                    )
                 })}
            </Styled.Cards>
        </Styled.Container>
    )

}

export default Blogs