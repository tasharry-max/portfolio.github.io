import React from 'react'
import {keyframes, ThemeProvider} from 'styled-components'
import {darkTheme} from './Themes'
import styled from 'styled-components'
import {motion} from 'framer-motion';
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import astronaut from '../assets/Images/spaceman.png'
import {NavLink} from 'react-router-dom'

const Box = styled.div `
  background: ${({ theme }) => theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
`;

const float = keyframes `
  0% {transform: translateY(-10px)}
  50% {transform: translateY(20px) translateX(20px)}
  100% {transform: translateY(-10px)}
`;

const Spaceman = styled.div `
  position: absolute;
  top: 15%;
  right: 8%;
  width: 18vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div `
  border: 1px solid #2B303B;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  margin: 1rem;
  width: 45vw;
  height: 45vh;
  z-index: 3;
  line-height: 1.5;
  position: absolute;
  left: calc(8rem + 6vw);
  top: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  backdrop-filter: blur(1px);

  h4 {
    font-family: "Eudoxus Sans", sans-serif;
    font-weight: normal;
    font-size: calc(0.3rem + 1vw);
  }
`;

const line1 = "I'm a Front-end Developer from Kyiv, Ukraine."
const line2 = "With a proven track record in maintaining and building cutting-edge websites and apps. Likewise, I focus on writing efficient code to deliver exceptional customer experience."
const line3 = "Aside from my job, I like to make different art, read psychology books and drink a lot of coffee."

const sentence = {
    hidden: {
        opacity: 1
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.1,
            staggerChildren: 0.01
        }
    }
}

const letter = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0
    }

}

const AboutPage = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <NavLink to="/">
                    <LogoComponent theme="dark"/>
                </NavLink>
                <SocialIcons theme="dark"/>
                <PowerButton theme="dark"/>
                <ParticleComponent theme="dark"/>
                <Spaceman>
                    <img src={astronaut} alt="spaceman"/>
                </Spaceman>
                <Main>
                    <h2>Coding to solve business problems or googling to solve code problems...</h2>
                    <motion.h4 variants={sentence} initial="hidden" animate="visible">
                        {line1
                            .split("")
                            .map((char, index) => {
                                return <motion.span key={char + "-" + index} variants={letter}>
                                    {char}
                                </motion.span>
                            })}
                        <br></br>
                        {line2
                            .split("")
                            .map((char, index) => {
                                return <motion.span key={char + "-" + index} variants={letter}>
                                    {char}
                                </motion.span>
                            })}
                            <br></br>
                        {line3
                            .split("")
                            .map((char, index) => {
                                return <motion.span key={char + "-" + index} variants={letter}>
                                    {char}
                                </motion.span>
                            })}
                    </motion.h4>

                </Main>
            </Box>
        </ThemeProvider>
    )
}

export default AboutPage