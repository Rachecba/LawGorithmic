import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    margin-top: 10rem;
    margin-bottom: 15rem;

    ${(props) => props.theme.breakpoints.down('sm')} {
        margin-bottom: 0;
        margin-top: 7rem;
    }

`

export const Title = styled.div`
    text-align: center;
    color: white;

    h1 {
        font-family: 'Mulish', sans-serif;
        margin-bottom: 1.5rem;

        ${(props) => props.theme.breakpoints.down('md')} {
           font-size: 1.9rem;
        }
    }


    h1:after {
        background-color: #2680EB;
        content: "";
        display: block;
        height: 2px;
        position: relative;
        width: 200px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0.8rem;

        ${(props) => props.theme.breakpoints.down('md')} {
           width: 150px;
        }
        
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 100;
        margin-bottom: 2.5rem;
        font-size: 1.3rem;
        padding-right: 1.5rem;
        padding-left: 1.5rem;

        ${(props) => props.theme.breakpoints.down('md')} {
            font-size: 1.1rem;
         }
    }
`

export const Cards = styled.div`
    margin-top: 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 4rem;
    padding-right: 4rem;
    flex-wrap: wrap;

    ${(props) => props.theme.breakpoints.down('sm')} {
        padding-left: 2rem;
        padding-right: 2rem;
        margin-top: 0;
    }
`

export const Card = styled.div`
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 3rem;
    text-align: center;
    background-color: #000000;
    border: 2px solid #2680EB;
    border-radius: 0px 0px 15px 15px;
    border-top: 17px solid #2680EB;
    width: 25%;
    color: white;
    font-family: 'Montserrat', sans-serif;


    ${(props) => props.theme.breakpoints.down('xl')} {
        min-width: 35% !important;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    ${(props) => props.theme.breakpoints.down('lg')} {
        min-width: 40% !important;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    ${(props) => props.theme.breakpoints.down('md')} {
        min-width: 60% !important;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    ${(props) => props.theme.breakpoints.down('sm')} {
        min-width: 85% !important;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .image-container {
        width: 100%%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 2rem;

        img {
            width: 50%;

            ${(props) => props.theme.breakpoints.down('xl')} {
                width: 70%;
            }

            ${(props) => props.theme.breakpoints.down('lg')} {
                width: 80%;
            }

            ${(props) => props.theme.breakpoints.down('md')} {
                width: 80%;
            }

            ${(props) => props.theme.breakpoints.down('sm')} {
                width: 70%;
            }
        }
    }

    .name {
        font-weight: 300;
        font-size: 1.6rem;

        ${(props) => props.theme.breakpoints.down('xl')} {
            font-size: 1.5rem;
        }

        ${(props) => props.theme.breakpoints.down('lg')} {
            font-size: 1.3rem;
        }

        ${(props) => props.theme.breakpoints.down('sm')} {
            font-size: 1.3rem;
        }
    }

    .position {
        font-weight: 100;
        font-size: 1.4rem;

        ${(props) => props.theme.breakpoints.down('xl')} {
            font-size: 1.3rem;
        }

        ${(props) => props.theme.breakpoints.down('lg')} {
            font-size: 1.1rem;
        }

        ${(props) => props.theme.breakpoints.down('sm')} {
            font-size: 1.1rem;
        }
    }

    .career {
        font-weight: 200;
        color: #929292;
        font-size: 1.3rem;

        ${(props) => props.theme.breakpoints.down('xl')} {
            font-size: 1.3rem;
        }

        ${(props) => props.theme.breakpoints.down('lg')} {
            font-size: 1.1rem;
        }

        ${(props) => props.theme.breakpoints.down('sm')} {
            font-size: 1.1rem;
        }
    }

    
`