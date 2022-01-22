import styled from 'styled-components'

export const Container = styled.div`
    width: 30%;
    height: auto;
    margin-bottom: 3rem;
    padding-bottom: 1rem;
    color: white;
    font-family: montserrat, sans-serif; 

    box-shadow: 0px 3px 28px #000000;
    border-radius: 12px;
    background: transparent linear-gradient(180deg, #000000 0%, #030303 65%, #141414 100%) 0% 0% no-repeat padding-box;

    ${(props) => props.theme.breakpoints.down('xl')} {
        min-width: 55% !important;
    }


    ${(props) => props.theme.breakpoints.down('lg')} {
        min-width: 60% !important;
    }

    ${(props) => props.theme.breakpoints.down('md')} {
        min-width: 80% !important;
    }

    ${(props) => props.theme.breakpoints.down('sm')} {
        min-width: 100% !important;
        margin-bottom: 2rem;
    }

`

export const Banner = styled.div<{
    backgroundImage: string
}>`

    background-image: linear-gradient(0deg, #000000 0%, #000000F5 16%, #00000000 100%), 
                url(${props => props.backgroundImage});

    width: 100%;
    height: 30vh;
    background-size: cover;
    margin-bottom: 1.5rem;
    border-radius: 12px 12px 0px 0px;

    ${(props) => props.theme.breakpoints.down('xl')} {
        height: 25vh;
    }

    ${(props) => props.theme.breakpoints.down('lg')} {
        height: 30vh;
     }

     ${(props) => props.theme.breakpoints.down('md')} {
        height: 35vh;
     }

     ${(props) => props.theme.breakpoints.down('sm')} {
        height: 30vh;
     }
    
`


export const Description = styled.div`
    padding-left: 2rem;
    padding-right: 2rem;

    h1 {
        margin-bottom: 1.3rem;
        font-size: 2rem;
    }

    p {
        font-weight: 300;
        text-align: justify;
        height: 18vh;
        overflow: hidden;
        // white-space: nowrap;
        // text-overflow: ellipsis;

        ${(props) => props.theme.breakpoints.down('xl')} {
            height: 15vh;
        }

        ${(props) => props.theme.breakpoints.down('lg')} {
            height: 20vh;
        }

        ${(props) => props.theme.breakpoints.down('md')} {
            height: 10.5rem;
        }

        ${(props) => props.theme.breakpoints.down('sm')} {
            height: 13.5rem;
        }
    }
`

export const Button = styled.div`
    margin-top: 2.3rem;
    display: flex;
    justify-content: end;

    ${(props) => props.theme.breakpoints.down('xl')} {
        margin-top: 3rem;
    }

    ${(props) => props.theme.breakpoints.down('md')} {
        margin-top: 1rem;
    }

    ${(props) => props.theme.breakpoints.down('sm')} {
        margin-top: 2rem;
    }
    
    button {
        background-color: #000000;
        color: white;
        border: none;
        border-radius: 7px;
        width: 7.5rem;
        height: 2.5rem;
        transition: all 0.5s ease-in-out;

        &:hover {
            width: 8rem;
            height: 3rem;
            background-color: #cc790c;
            font-weight: 500;
            transition: all 0.5s ease-in-out;
            font-weight: 500;
        }
    }
`