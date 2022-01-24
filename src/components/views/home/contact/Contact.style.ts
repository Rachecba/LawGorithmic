import styled from 'styled-components'

export const Container = styled.div`
    background-image: url('/assets/images/contact-background.jpg');
    background-size: cover;
    min-height: 80vh;
    
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FormContainer = styled.div`

    background-color: rgb(0 0 0 / 53%);
    border-radius: 22px;
    opacity: 1;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    width: 50%;
    padding: 4rem;
    padding-bottom: 1.5rem;
    color: white;
    font-family: montserrat, sans-serif;
    margin-top: 2rem;
    margin-bottom: 2rem;
    
    ${(props) => props.theme.breakpoints.down('lg')} {
        width: 80%;
    }

    ${(props) => props.theme.breakpoints.down('sm')} {
        padding: 1rem;
        width: 100%;
        margin-top: 0;
        margin-bottom: 0;
        border-radius: 0;
    }
    
    .title {
        margin-bottom: 2rem;

        h1 {
            font-weight: 400;
        }
    }

    .form {
        .contact-group {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            ${(props) => props.theme.breakpoints.down('xl')} {
                display: block;
            }
        }

        .field-container {
            width: 45% !important;

            ${(props) => props.theme.breakpoints.down('xl')} {
                width: 100% !important;
            }
        }

        label {
            font-size: 1.3rem;
            font-weight: 300;
            margin-left: 2rem;
            margin-bottom: 1rem;

            ${(props) => props.theme.breakpoints.down('sm')} {
                font-size: 1rem;
                margin-left: 1rem;
            }
        }

        .input-container {
            display: -ms-flexbox; /* IE10 */
            display: flex;
            width: 100%;
            margin-bottom: 15px;
        }


        .icon-container {
            display: inherit;
            border-radius: 30px 0px 0px 30px;
            background: #FFFFFF8C;
        }
          
        .icon {
            padding: 10px;
            color: #0053B6;
            min-width: 50px;
            text-align: center;
            padding-left: 1rem;

            img {
                width: 25px
            }
        }
        
        .input-field {
            width: 100%;
            padding: 10px;
            outline: none;
            border: none;
            background: #FFFFFF57;
            color: white;
            border-radius: 0px 30px 30px 0px;
        }
        
        .input-field:focus {
            border: 2px solid dodgerblue;
        }

        .correo-container {

            ${(props) => props.theme.breakpoints.down('xl')} {
                margin-top: 1.3rem;
             }
        }

        .message {
            margin-top: 1.3rem;
            margin-bottom: 2.3rem;

            textarea {
                width: 100%;
                padding: 10px;
                outline: none;
                border: none;
                background: #FFFFFF57;
                color: white;
                border-radius: 20px;
            }

            textarea:focus {
                border: 2px solid dodgerblue;
            }
        }

        button {
            background: transparent linear-gradient(180deg, #2680EB 0%, #134076 100%) 0% 0% no-repeat padding-box;
            border-radius: 47px;
            color: white;
            border: none;
            padding: 0.5rem;
            width: 100%;
            font-size: 1.3rem;
            letter-spacing: 1.6px;

            &:hover {
                background: transparent linear-gradient(180deg, #C27818 0%, #613C0C 100%) 0% 0% no-repeat padding-box;
            }

            ${(props) => props.theme.breakpoints.down('sm')} {
                font-size: 1rem;
                padding: 0.4rem;
            }
        }
    }
`

export const ContactInfo = styled.div`
    margin-top: 3rem;

    ${(props) => props.theme.breakpoints.down('sm')} {
        font-size: 0.9rem;
    }

    .waze {
        text-decoration: none;
        color: white;

        &:hover {
            color: #0a58ca;
        }
    }

    img {
        width: 25px;
        margin-right: 0.5rem;

        ${(props) => props.theme.breakpoints.down('sm')} {
            width: 20px;
        }
    }

    div {
        margin-bottom: 1rem;
    }

    .phone-email {
        display: flex;

        ${(props) => props.theme.breakpoints.down('sm')} {
            display: block;
        }

        .phone {
            margin-right: 5.5rem;
        }
    }

    .waze-social {
        margin-top: 1.5rem;
        display: flex;
        justify-content: space-between;

        ${(props) => props.theme.breakpoints.down('sm')} {
            display: block;
        }

        .social {
            margin-top: 2rem;
            text-align: end;
            img {
                width: 35px
            }
        }
    }
`

export const MessageSendContainer = styled.div`
  background-color: #222222;
  color: whitesmoke;
  width: 50%;
  height: 12rem;
  margin: auto;
  margin-top: 7rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`
export const Message = styled.div``
