import styled from 'styled-components'

export const Container = styled.div`

`

export const Title = styled.div`
    margin-top: 5rem;
    font-family: 'Mulish', sans-serif;
    font-weight: 500 !important;
    color: white;

    display: flex;
    justify-content: center;

    h1:after {
        background-color: #2680EB;
        content: "";
        display: block;
        height: 2px;
        position: relative;
        width: 400px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0.8rem;

        ${(props) => props.theme.breakpoints.down('md')} {
           width: 263px;
        }
        
    }

    ${(props) => props.theme.breakpoints.down('md')} {
       margin-right: 4rem;
       margin-left: 4rem;
    }
`

export const Boxes = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 4rem;
   flex-wrap: wrap;
`

export const Box = styled.div`
    font-family: 'Montserrat', sans-serif;
    background-color: #191919;
    color: white;
    padding: 1rem 2rem 1rem 2rem;
    max-width: 25%;
    margin-left: 2rem;
    margin-right: 2rem;
    border-radius: 9px;
    margin-bottom: 2.5rem;

    img {
        width: 4rem;
    }

    ${(props) => props.theme.breakpoints.down('lg')} {
        min-width: 40%;
    }

    ${(props) => props.theme.breakpoints.down('md')} {
        min-width: 80%;
    }
    
    img {
        margin-bottom: 1rem;
    }

    h1 {
        font-size: 1.4rem !important;
        margin-bottom: 1.8rem;
    }

    p {
        font-weight: 300;
    }

    &:hover {
        border: 1px solid #2680EB;
        background-color: #1E1E1E;
    }
`

export const SEO = styled.div`
    display: none;
`