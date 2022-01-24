import React from 'react'
import * as Styled from './History.style'


function History() {
    const [display, setDisplay] = React.useState(false)

    return (
        <Styled.Container id="us">
            <Styled.Band>
                <h1>¿Por qué confiar en nosotros?</h1>
                <p>Lawgorithmic es una empresa latinoamericana enfocada en la <span>asesoría a empresas e individuos</span>,
                    que de alguna manera están <span>involucrados con el uso de la tecnología Blockchain,
                    criptomonedas, finanzas digitales, negocios internacionales, banca e inversión.</span></p>
                <p className={display ? 'show' : 'hide'}>Somos la <span>primera firma a nivel mundial</span> en reunir
                    en un solo lugar expertos del área legal, financiera y técnica de todo el mundo, para
                    brindar soluciones integrales de cara al desarrollo de negocios en el agitado contexto
                    actual. 
                </p>
                <p className={display ? 'show' : 'hide'}>
                    Buscamos ofrecer <span>respuestas ágiles, honestas e inteligentes</span> a todos los retos que nuestros
                    clientes puedan tener, con un enfoque global. A través de nosotros las empresas <span>podrán ser
                    más eficientes, obtener mayores rendimientos, minimizar el impacto fiscal de sus giros
                    comerciales, satisfacer las exigencias regulatorias globales</span> y crecer, sin contingentes
                    legales. Ya sea que usted busque desarrollar un negocio de cero, reestructurar una empresa
                    existente, o administrar de manera astuta su patrimonio, <span>Lawgorithmic es el aliado
                    estratégico que usted necesita.</span>
                </p>
                <button onClick={() => setDisplay(!display)}>{ !display ? 'Saber más' : 'Ocultar'}</button>
            </Styled.Band>
            <img src='/assets/images/ethereum.jpg' alt='history' className={ display ? 'big' : ''}/>
        </Styled.Container>
    )

}

export default History