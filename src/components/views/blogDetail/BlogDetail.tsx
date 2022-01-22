import { useParams } from 'react-router'
import { news } from '../../../utils/constants/constants'
import Header from '../../global/header/Header'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import * as Styled from './BlogDetail.style'
import { useEffect } from 'react';
import { News } from './BlogDetail.interface';

function BlogDetail() {

    const { id } = useParams()

    const getBlog = () => {
        return news.find(element => element.id === id) as News
    }

    const getPrev = () => {
        const blogId = Number(getBlog()?.id)

        if (blogId) {
            return blogId-1 < 1 ? news.length : (blogId-1)
        }
    }

    const getNext = () => {
        const blogId = Number(getBlog()?.id)

        if (blogId) {
            return blogId+1 > news.length ? 1 : (blogId+1)
        }
    }

    const renderTitle = (title: string) => {
        return (
            <>
                <h2 className='text-title'>{ title }</h2>
            </>
        )
    }

    const body = getBlog()?.description

    const renderBody = (array: []) => {
        return (
            <>
                {array.map((item) => {
                    return (
                        <>
                            <p>{ item }</p>
                        </>
                   )
               })}
            </>
        )
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <Styled.Container>
            <Header position={true} />
            <Styled.BlogContainer>
                <div className="button-container">
                    <button className="back-button" onClick={() => { window.location.href = '/news' }}>
                        <ArrowBackIcon /> Volver a blogs
                    </button>
                </div>
            <Styled.Banner>
                <div className='blog-title'>
                    <div className='title'>
                        <p>{getBlog()?.title}</p>
                    </div>
                    <div className='date'>
                        <p>{getBlog()?.writer}</p>
                        <p>{getBlog()?.date}</p>
                    </div>
                </div>
                <div className="image-banner">
                        <img src={getBlog()?.image} alt={getBlog()?.title}/>
                </div>
            </Styled.Banner>
            <Styled.Body>
                    {body!.map((item: any) => { 
                        return (
                            <>
                                {item.title ? renderTitle(item.title) : null}
                                {renderBody(item.text)}
                            </>
                        )
                    })}
                    <p className='original'>Fuente: <a href={getBlog()?.originalUrl}>{getBlog()?.original}</a></p>
            </Styled.Body>
            <Styled.Footer>
                <button onClick={() => { window.location.href = '/news/' + getPrev()}}><ArrowBackIcon /> Anterior</button>
                <button onClick={() => { window.location.href = '/news/' + getNext() }}>Siguiente <ArrowForwardIcon /></button>
            </Styled.Footer>
            </Styled.BlogContainer>
        </Styled.Container>
    )

}

export default BlogDetail