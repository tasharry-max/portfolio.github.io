import React from 'react'
import {keyframes, ThemeProvider} from 'styled-components'
import {darkTheme} from './Themes'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'

import astrounaut from '../assets/Images/spaceman.png'

const Box = styled.div `
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
overflow: hidden;
`

const float = keyframes `
  0% {transform: translateY(-10px)}
  50% {transform: translateY(20px) translateX(20px)}
  100% {transform: translateY(-10px)}
`
const Spaceman = styled.div `
  position: absolute;
  top:10%;
  right:10%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width:100%;
    height:auto;
  }
`
const Main = styled.div `
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 45vw;
  height: 45vh;
  z-index:3;
  line-height: 1.5;
  position:absolute;
  left: calc(6rem + 6vw);
  top:10rem;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: calc(0.6rem +2vw);
  backdrop-filter: blur(4px);
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`

const AboutPage = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <LogoComponent theme="dark"/>
                <SocialIcons theme="dark"/>
                <PowerButton theme="dark"/>
                <ParticleComponent theme="dark"/>
                <Spaceman>
                    <img src={astrounaut} alt="spaceman"/>
                </Spaceman>
                <Main>
                    <p>I'm a front-end developer from Kyiv, Ukraine.</p>
                    <br></br>
                    <p>I love to create unusual websites with delightful user experience. I like to try
                    new things and build great projects.</p>
                    <br></br>
                    Aside from my job, I like to make different art, read psychology books and drink
                    a lot of coffee.
                </Main>
            </Box>
        </ThemeProvider>
    )
}

export default AboutPage