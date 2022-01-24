import styled from 'styled-components'

export const Container = styled.div`
    background-color: black;
    padding: 3rem 8rem 3rem 8rem;

    ${(props) => props.theme.breakpoints.down('sm')} {
        padding: 3rem 2rem 3rem 2rem;
    }

`

export const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    img {
        width: 35px;
    }

    img: first-of-type {
        margin-right: 1rem;
    }
`

export const ShortcutsContainer = styled.div`
    display: flex;
    justify-content: space-around;

    border-top: 1px solid #707070;
    border-bottom: 1px solid #707070;

    color: white;
    font-family: montserrat, sans-serif;
    padding: 3rem 8rem;

    ${(props) => props.theme.breakpoints.down('xl')} {
        padding: 3rem 1rem;
    }
    
    ${(props) => props.theme.breakpoints.down('lg')} {
        display: block;
        text-align: center;
    }

    ${(props) => props.theme.breakpoints.down('sm')} {
        padding: 3rem 1rem;
        display: block;
        text-align: center;
    }
`

export const Us = styled.div`

    display: block;

    ${(props) => props.theme.breakpoints.down('lg')} {
        margin-bottom: 3rem;
    }
    
    h1 {
        font-weight: 300;
        font-size: 1.6rem;
        margin-bottom: 2rem;

        ${(props) => props.theme.breakpoints.down('sm')} {
            font-size: 1.3rem;
        }
    }

    list-style: none;

    li {
        display: block;
        margin-bottom: 0.3rem;
    }

    a {
        font-weight: 200;
        color: white;
        text-decoration: none;

        ${(props) => props.theme.breakpoints.down('sm')} {
            font-size: 1rem;
        }

        &:active, &:focus, &:hover {
            color: #cc790c;
            text-decoration: none;
        }
    }

    ul {
        padding-left: 0;
    }
`

export const Contact = styled.div`

    display: block;

    .waze {
        text-decoration: none;
        color: white;

        &:hover {
            color: #0a58ca;
        }
    }
    
    h1 {
        font-weight: 300;
        font-size: 1.6rem;
        margin-bottom: 2rem;

        ${(props) => props.theme.breakpoints.down('sm')} {
            font-size: 1.3rem;
        }
    }

    img {
        width: 20px;
        margin-right: 1rem;
    }

    ul {
        padding-left: 0 !important;
    }

    .contacts {
        list-style: none;

        li {
            display: block;
            margin-bottom: 1rem;
        }

        font-weight: 300;

        ${(props) => props.theme.breakpoints.down('sm')} {
            font-size: 1rem;
        }
    }
`

export const CopyrightContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2.5rem;
    align-items: baseline;
    flex-wrap: wrap;

    .powerBy {
        color: #4d4d4d;

        &:hover {
            color: #0053B6 !important;
        }

        .duck_studios {
            text-decoration: none;
            color: inherit;
            cursor: pointer;
        }

    }

    ${(props) => props.theme.breakpoints.down('xl')} {
        display: block;
        text-align: center;
    }

    img {
        width: 180px;

        ${(props) => props.theme.breakpoints.down('sm')} {
            width: 150px;
        }
    }

    .copyright {
        color: white;
        font-size: 1.2rem;

        ${(props) => props.theme.breakpoints.down('xl')} {
            margin-top: 1rem;
        }

        ${(props) => props.theme.breakpoints.down('sm')} {
            font-size: 1rem;
        }
    }
`