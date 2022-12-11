import React from 'react'
import {ThemeProvider} from 'styled-components'
import {darkTheme} from './Themes'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
// import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import { Work } from '../data/Work'
import Card from '../subComponents/Card'

const Box = styled.div `
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`

const Main = styled.ul `
  position: fixed;
  top: 12rem;
  left: calc(10rem + 12vw);
  width: 40vw;
  height: 40vh;
  display: flex;
  color: white;
`

const WorkPage = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <LogoComponent theme="dark"/>
                <PowerButton theme="dark"/>  
                <Main>
                  
                   {
                    Work.map(d => 
                      <Card key={d.id} data={d}></Card>
                    )
                   }
                </Main>
            
            </Box>
        </ThemeProvider>
    )
}

export default WorkPage