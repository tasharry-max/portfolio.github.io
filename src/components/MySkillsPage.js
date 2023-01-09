import React from 'react'
import {ThemeProvider} from 'styled-components'
import {lightTheme} from './Themes'
import styled from 'styled-components'
import {Developer} from "./AllSvgs"
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'

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
background-color: ${props => props.theme.body};

border: 2px solid ${props => props.theme.text};
width: 60vw;
height: 60vh;
color: ${props => props.theme.text};
z-index: 3;
line-height: 1.5;
font-family: 'Ubuntu Mono', monospace;
cursor: pointer;

&:hover{
  color: ${props => props.theme.body};
  background:${props => props.theme.text};
  opacity:0.9;
  transition: 0.3s all ease-in;
}
`

const Title = styled.h2 `
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 2vw);
padding: 0.5rem;

${Main}:hover &{
  &>*{
    fill:${props => props.theme.body}
  }
}
&>*:first-child{
  margin-right:1rem;
}
`

const Description = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 0.5rem 2rem;
font-size: calc(0.5em + 1vw);
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
              <LogoComponent/>
              <SocialIcons />
              <PowerButton/>
              <ParticleComponent theme="light"/>
                <Main>
                    <Title>
                        <Developer width={40} height={40}/>
                        Frontend Developer
                    </Title>
                    <Description>
                        I enjoy bringing new ideas to life. Building web apps with React feels like
                        taking those first few steps into a magical world full of possibilities and
                        wonder.
                    </Description>
                    <Description>
                        <h3>Skills</h3>
                        <div>
                            HTML, CSS, JavaScript, Styled-components, React, MobX
                        </div>
                        <h3>Tools</h3>
                        <div>VCode, Git, Figma</div>
                    </Description>
                </Main>
            </Box>
        </ThemeProvider>
    )
}

export default MySkillsPage