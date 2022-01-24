import styled from 'styled-components'

export const Container = styled.div`

    .back-button {
        font-family: montserrat, sans-serif;
        font-weight: 500;
        font-size: 1rem;
        letter-spacing: 1.11px;
        background: #2680EB 0% 0% no-repeat padding-box;
        border-radius: 7px;
        color: white;
        border: none;
        width: 12rem;
        height: 3rem;
        transition: all 0.5s ease-in-out;

        &:hover {
            background-color: #cc790c;
            transition: all 0.5s ease-in-out;
        }
    }

`

export const Banner = styled.div`
    
    margin-top: 3rem;
    margin-bottom: 2rem;
    
    .title {
        color: white;
        text-transform: uppercase;
        font-size: 3rem;
        font-family: 'Mulish', sans-serif;
        font-weight: 500;
        letter-spacing: 3px;
        width: 65%;

        ${(props) => props.theme.breakpoints.down('md')} {
            width: 100%;
            font-size: 2rem;
        }

        ${(props) => props.theme.breakpoints.down('lg')} {
            width: 100%;
            font-size: 2.3rem;
        }
    }

    .date {
        width: 35%;
        display: flex;
        flex-direction: column;
        color: #5e5d5d;
        justify-content: end;
        align-items: end;
        font-family: montserrat, sans-serif;

        ${(props) => props.theme.breakpoints.down('lg')} {
            width: 100%;
            align-items: start;
        }
    }

    .blog-title {
        display: flex;
        justify-content: space-between;
        
        ${(props) => props.theme.breakpoints.down('lg')} {
            display: block;
            width: 100%;
        }
    }

    .image-banner {
        width: 100%;

        img {
            object-fit: cover;
            width: 100%;
            height: 30vh;
        }
    }
`

export const BlogContainer = styled.div`
    margin-left: 7rem;
    margin-right: 7rem;
    margin-top: 3rem;

    ${(props) => props.theme.breakpoints.down('sm')} {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }
`

export const Body = styled.div`
    color: #a8a8a8;
    font-family: montserrat, sans-serif;
    letter-spacing: 1px;
    text-align: justify;
    font-size: 1.2rem;

    ${(props) => props.theme.breakpoints.down('md')} {
        font-size: 1rem;
    }

    h2 {
        margin-top: 3rem;
        margin-bottom: 2rem;
        color: white;

        ${(props) => props.theme.breakpoints.down('md')} {
            font-size: 1.3rem;
        }

        ${(props) => props.theme.breakpoints.down('lg')} {
            font-size: 1.6rem;
        }
    }

    .original {
        margin-top: 5rem;
        color: white;
    }
`

export const Footer = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: flex;
    justify-content: space-between;

    button {
        font-family: montserrat, sans-serif;
        font-weight: 500;
        font-size: 1rem;
        letter-spacing: 1.11px;
        border-radius: 7px;
        color: white;
        border: none;
        width: 10rem;
        height: 3rem;
        transition: all 0.5s ease-in-out;
        border: 1px solid #2680EB;
        background: transparent;

        ${(props) => props.theme.breakpoints.down('sm')} {
            width: 9rem;
        }

        &:hover {
            background-color: #2680EB;
            font-weight: 500;
            transition: all 0.5s ease-in-out;
        }
    }
`