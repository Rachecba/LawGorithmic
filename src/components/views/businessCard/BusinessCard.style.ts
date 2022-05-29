import styled from 'styled-components'

export const Container = styled.div``

export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 8rem 0rem;
  -webkit-perspective: 1000;
  perspective: 1000;
  width: fit-content;
  position: relative;

  &:hover {
    .front {
      transform: rotateY(180deg);
      z-index: -1;
    }

    .back {
      transform: rotateY(0deg);
      z-index: 10;
    }
  }
`

export const CardFront = styled.div`
  background: transparent
    linear-gradient(180deg, #004ba4 0%, #002c61 54%, #001b3b 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 3px 19px #005cc9;
  border-radius: 9px;
  padding: 0.5rem 3rem;

  position: relative;
  -webkit-transition: all 1s cubic-bezier(0.5, 1, 0.5, 1);
  transition: all 1s cubic-bezier(0.5, 1.3, 0.5, 1.3);
  transform-style: preserve-3d;

  z-index: 10;

  ${(props) => props.theme.breakpoints.down('sm')} {
    padding: 0.5rem 2.5rem;
  }
`

export const CardContent = styled.div`
  -webkit-transform: translateZ(50px);
  transform: translateZ(50px);
`

export const ArrowsTopFront = styled.div`
  display: flex;
  justify-content: end !important;
  margin-top: 2.8rem;
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  margin-bottom: 10rem;

  img {
    width: 20rem;

    ${(props) => props.theme.breakpoints.down('sm')} {
      width: 17rem;
    }
  }
`

export const ArrowsBottomFront = styled.div``

export const Tap = styled.div`
  text-align: center;
  color: white;
  text-transform: uppercase;
  margin-top: 3rem;
`

export const CardBack = styled.div`
  -webkit-transition: all 1s cubic-bezier(0.5, 1, 0.5, 1);
  transition: all 1s cubic-bezier(0.5, 1.3, 0.5, 1.3);
  transform-style: preserve-3d;

  position: absolute;
  z-index: -1;
  transform: rotateY(-180deg);
`

export const ArrowsTopBack = styled.div`
  margin-top: 3rem;
  margin-left: -1.5rem;

  ${(props) => props.theme.breakpoints.down('sm')} {
    margin-left: -0.5rem;
  }
`

export const LogoBack = styled.div`
  margin-top: 3rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;

  img {
    width: 18rem;
  }
`

export const ContactInfo = styled.div`
  color: white;

  .contact-group {
    display: flex;
    margin-bottom: 1rem;
  }

  img {
    width: 2rem;
    margin-right: 1rem;
  }

  .clickable {
    &:hover {
      cursor: pointer;
    }
  }

  .home {
    display: flex;
    background-color: #001b3b;
    padding-top: 0.6rem;
    border-radius: 4px 0px 0px 4px;
    margin-right: -3rem;
    box-shadow: 0px 4px 4px #0000006e;

    ${(props) => props.theme.breakpoints.down('sm')} {
      margin-right: -1rem;
    }

    img {
      margin-left: 0.3rem;
      width: 1.3rem;
      margin-right: 1rem;
      margin-left: 0.5rem;
    }
  }
`

export const ArrowsBottomBack = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 6.5rem;
  margin-bottom: 3rem;
`
