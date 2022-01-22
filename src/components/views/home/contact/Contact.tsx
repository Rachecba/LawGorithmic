import { FaUser } from 'react-icons/fa'
import { useForm, ValidationError } from '@formspree/react'
import * as Styled from './Contact.style'

function Contact() {
  const [state, handleSubmit] = useForm("mqkagopr");

  if (state.succeeded) {
    return (
      <Styled.MessageSendContainer>
        <Styled.Message>
          <h4>¡Gracias por su mensaje!</h4>
          <h5>Le estaremos contestando a su correo electrónico lo más pronto posible</h5>
        </Styled.Message>
      </Styled.MessageSendContainer>
    )
  }


    return (
        <Styled.Container id="contact">
            <Styled.FormContainer>
                <div className='title'>
                    <h1>Contáctenos</h1>
                </div>
                <div className='form'>
                    <form onSubmit={handleSubmit}>
                        <div className='contact-group'>
                            <div className='field-container'> 
                                <label>Nombre</label>
                                <div className="input-container">
                                    <div className='icon-container'>
                                        <span className='icon'><img src='/assets/icons/user.png' alt='user'/></span>
                                    </div>
                                    <input className="input-field" type="text" placeholder="Juan Hernández" name="user" id='user' />
                                </div>
                                <ValidationError
                                    prefix="user"
                                    field="user"
                                    errors={state.errors}
                                />
                            </div>

                            <div className='field-container correo-container'>
                                <label>Correo electrónico</label>
                                <div className="input-container">
                                    <div className='icon-container'>
                                        <span className='icon'><img src='/assets/icons/mail-blue.png' alt='mail'/></span>
                                    </div>
                                    <input className="input-field" type="email" placeholder="ejemplo@gmail.com" name="mail" id='mail'/>
                                </div>
                                <ValidationError
                                    prefix="mail"
                                    field="mail"
                                    errors={state.errors}
                                />
                            </div>
                        </div>

                        <div className='message'>
                            <label>Mensaje</label>
                            <textarea placeholder="Escriba su mensaje" name="message" id='message' />
                            <ValidationError
                                prefix="message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>

                        <button type='submit' disabled={state.submitting}>Enviar</button>
                    </form>
                </div>
                <Styled.ContactInfo>
                    <div className="phone-email">
                        <div className='phone'>
                            <span><img src='/assets/icons/phone-blue.png' alt='phone'/></span> 8466-4391
                        </div>
                        <div className='email'>
                            <span><img src='/assets/icons/mail-lightblue.png' alt='mail'/></span> info@lawgorithmic.io
                        </div>
                    </div>
                    <div className="location">
                        <span><img src='/assets/icons/location.png' alt='location'/></span> Rohrmoser, 50m norte de Euromobilia
                    </div>
                    <div className="waze-social">
                        <div>
                            <span><img src='/assets/icons/waze.png' alt='waze'/></span> Abrir en Waze
                        </div>
                        <div className='social'>
                            <span><img src='/assets/icons/instagram.png' alt='Instagram'/></span>
                            <span><img src='/assets/icons/facebook.png' alt='facebook'/></span>
                        </div>
                    </div>
                </Styled.ContactInfo>
            </Styled.FormContainer>
        </Styled.Container>
    )
}

export default Contact