import styled from 'styled-components'

export const Container = styled.div`
   
`

export const Band = styled.div`
    align-items: center;
    background-color: #0053B6;
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    color: white;
    padding: 4rem;
    display: flex;
    padding-left: 8rem;
    padding-right: 8rem;

    ${(props) => props.theme.breakpoints.down('xl')} {
        padding-right: 2rem;
        padding-left: 3rem;
     }

     ${(props) => props.theme.breakpoints.down('md')} {
        display: block;
        margin-right: 0;
     }

    h1 {
        font-family: 'Mulish', sans-serif;
        font-size: 4.5rem;

        ${(props) => props.theme.breakpoints.down('md')} {
            font-size: 3rem;
            margin-bottom: 1rem;
         }
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        margin-bottom: 2rem;
        font-size: 1.3rem;

        ${(props) => props.theme.breakpoints.down('md')} {
            font-size: 1rem;
         }

         ${(props) => props.theme.breakpoints.down('sm')} {
            text-align: justify;
        }
    }

    button {
        border: none;
        background: black;
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        padding: 0.5rem 1rem;
        transition: all 0.5s ease-in-out;
        width: 10rem;
        height: 3rem;
        font-size: 1.2rem;
        border-radius: 0.2rem;

        ${(props) => props.theme.breakpoints.down('md')} {
            font-size: 1rem;
            width: 8rem;
            height: 2.5rem;
         }

        &:hover {
            width: 12rem;
            height: 3.5rem;
            background-color: #cc790c;
            font-weight: 500;
            transition: all 0.5s ease-in-out;
        }
    }

    .title {
        margin-right: 7rem;
    }
`

export const Cards = styled.div`
    display: flex;
    justify-content: space-around;
    margin-left: 4rem;
    margin-right: 4rem;
    flex-wrap: wrap;

    ${(props) => props.theme.breakpoints.down('lg')} {
        margin: 0;
     }

    ${(props) => props.theme.breakpoints.down('md')} {
        margin-left: 1rem !important;
        margin-right: 1rem !important;
     }

    ${(props) => props.theme.breakpoints.down('sm')} {
        margin-left: 1.5rem !important;
        margin-right: 1.5rem !important;
    }
`