import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 13rem;

    ${(props) => props.theme.breakpoints.down('sm')} {
        margin: 0;
    }
`

export const Logos = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    img {
        width: 8rem;

        ${(props) => props.theme.breakpoints.down('md')} {
            width: 5rem;    
        }
    }

    img:last-child {
        width: 8rem;
        height: 3rem;

        ${(props) => props.theme.breakpoints.down('md')} {
            width: 5rem;
            height: 1.5rem; 
        }
    }
`

export const Carousel = styled.div`
    margin-top: 4rem;
`