import React from 'react'
import {ThemeProvider} from 'styled-components'
import {darkTheme} from './Themes'
import {motion} from 'framer-motion'
import styled from 'styled-components'
import {
    HTMLIcon,
    CSSIcon,
    ReactIcon,
    JSIcon,
    MobxIcon,
    StyledComponentsIcon,
    GitIcon,
    VSCodeIcon,
    FigmaIcon,
    WebpackIcon
} from "./AllSvgs"
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'

import {NavLink} from 'react-router-dom'

const Box = styled.div `
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div `
width: 100vw;
height: 80vh;
display: flex;
flex-direction: column;
justify-content: center;
color: ${props => props.theme.text};
z-index: 3;
line-height: 1.5;
font-family: 'Ubuntu Mono', monospace;
svg {
  width: 5rem;
  height: 5rem;
}
`

const Description = styled(motion.div)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 0 0.5rem;
font-size: calc(0.5em + 1vw);
h2 {
  margin: 2rem;
}
`

const StyledIcons = styled(motion.div)`
  display: flex;
  width: 70%;
  height: 150px;
  justify-content: space-around;
  padding: 2rem;
  align-items: center;
  svg{
    cursor: pointer;
  }
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <NavLink to="/">
                    <LogoComponent theme="dark"/>
                </NavLink>
                <SocialIcons theme="dark"/>
                <PowerButton/>
         
                <Main>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                        hidden: {
                            scale: .6,
                            opacity: 0
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: .2
                            }
                        }
                    }}>
                    </motion.div>
                    <Description className="container">
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={{
                            hidden: {
                                scale: .8,
                                opacity: 0
                            },
                            visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    delay: .3
                                }
                            }
                        }}>Skills</motion.h2>
                        <StyledIcons
                            initial={{
                            opacity: 0,
                            scale: 0.5
                        }}
                            animate={{
                            opacity: 1,
                            scale: 1
                        }}
                            transition={{
                            duration: 0.8,
                            delay: 0.6,
                            ease: "linear"
                        }}>
                            <HTMLIcon/>
                            <CSSIcon/>
                            <JSIcon/>
                            <ReactIcon/>
                            <MobxIcon/>
                            <StyledComponentsIcon/>
                        </StyledIcons>
                        <StyledIcons
                            initial={{
                            opacity: 0,
                            scale: 0.5
                        }}
                            animate={{
                            opacity: 1,
                            scale: 1
                        }}
                            transition={{
                            duration: 0.8,
                            delay: 1.4,
                            ease: "linear"
                        }}>
                            <VSCodeIcon/>
                            <WebpackIcon/>
                            <GitIcon/>
                            <FigmaIcon/>
                        </StyledIcons>
                    </Description>
                </Main>
            </Box>
        </ThemeProvider>
    )
}

export default MySkillsPage