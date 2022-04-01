import { useForm, ValidationError } from '@formspree/react'
import * as Styled from './Contact.style'

function Contact() {
  const [state, handleSubmit] = useForm("xayvqrby");

  if (state.succeeded) {
      return (
        <Styled.Container>
            <Styled.MessageSendContainer>
                <Styled.Message>
                <h4>¡Gracias por su mensaje!</h4>
                <h5>Le estaremos contestando a su correo electrónico lo más pronto posible</h5>
                </Styled.Message>
            </Styled.MessageSendContainer>
        </Styled.Container>
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
                                    prefix="User"
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
                                    prefix="Email"
                                    field="mail"
                                    errors={state.errors}
                                />
                            </div>
                        </div>

                        <div className='message'>
                            <label>Mensaje</label>
                            <textarea placeholder="Déjenos saber cómo le podemos ayudar" name="message" id='message' />
                            <ValidationError
                                prefix="Message"
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
                            <a className='waze' target='_blank' href='https://ul.waze.com/ul?preview_venue_id=180813923.1808073698.3815409&navigate=yes&utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location' rel="noreferrer"><span><img src='/assets/icons/waze.png' alt='waze'/></span> Abrir en Waze</a>
                        </div>
                        <div className='social'>
                            <span><a href='https://www.instagram.com/lawgorithmic/' target='_blank' rel="noreferrer"><img src='/assets/icons/instagram.png' alt='Instagram'/></a></span>
                            <span><img src='/assets/icons/facebook.png' alt='facebook' /></span>
                        </div>
                    </div>
                </Styled.ContactInfo>
            </Styled.FormContainer>
        </Styled.Container>
    )
}

export default Contact