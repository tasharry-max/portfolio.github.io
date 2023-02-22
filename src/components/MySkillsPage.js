import React, {useRef} from 'react'
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
import ParticleComponent from '../subComponents/ParticleComponent'
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

const Title = styled.h2 `
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1.5vw);
&>*:first-child{
  margin-right:1rem;
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
const StyledIcons = styled.div `
  display: flex;
  width: 70%;
  height: 96px;
  justify-content: space-around;
  align-items: center;
  svg{
    cursor: pointer;
  }
`

const MySkillsPage = () => {
    const constraintsRef = useRef(null);
    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <NavLink to="/">
                    <LogoComponent theme="dark"/>
                </NavLink>
                <SocialIcons theme="dark"/>
                <PowerButton/>
                <ParticleComponent theme="dark"/>
                <Main>
                    <Title>Frontend Developer</Title>
                    <Description className="container" ref={constraintsRef}>
                        <h2>Skills</h2>
                        <StyledIcons>
                            <HTMLIcon dragConstraints={constraintsRef}/>
                            <CSSIcon dragConstraints={constraintsRef}/>
                            <JSIcon/>
                            <ReactIcon/>
                            <MobxIcon/>
                            <StyledComponentsIcon/>
                        </StyledIcons>
                        <StyledIcons>
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