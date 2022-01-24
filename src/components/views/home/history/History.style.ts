import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    margin-top: 10rem;
    margin-bottom: 5rem;
    width: 100%;

    ${(props) => props.theme.breakpoints.down('sm')} {
        margin: 0;
    }

    img {
        width: 30%;
        box-shadow: 0px 3px 38px #000000;
        transition: all ease 1s;

        ${(props) => props.theme.breakpoints.down('xl')} {
            width: 100% !important;
         }

         ${(props) => props.theme.breakpoints.down('lg')} {
            display: none;
         }
    }

    .big {
        transition: all ease 1s;
        width: 50% !important;
    }
`

export const Band = styled.div`
    align-items: center;
    background-color: #0053B6;
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    color: white;
    padding: 4rem;
    padding-left: 10rem;
    padding-right: 10rem;
    transition: all ease 1s;

    span {
        font-weight: 500;
    }

    .hide {
        display: none;
        transition: all ease 1s;
    }

    .show {
        display: block;
        transition: all ease 1s;
    }

    ${(props) => props.theme.breakpoints.down('xl')} {
       padding-right: 2rem;
       padding-left: 3rem;
    }


    h1 {
        font-family: 'Mulish', sans-serif;
        margin-bottom: 1.5rem;
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        margin-bottom: 2.5rem;

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
        width: 8rem;
        height:2.5rem;
        border-radius: 0.2rem;

        &:hover {
            width: 10rem;
            height: 2.8rem;
            background-color: #cc790c;
            font-weight: 500;
            transition: all 0.5s ease-in-out;
        }
    }
`