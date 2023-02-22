import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {keyframes} from 'styled-components';
import {motion} from 'framer-motion';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import {YinYang} from './AllSvgs';
import Intro from './Intro';

const MainContainer = styled.div `
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2, h3, h4 ,h5, h6{
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div `
  padding: 2rem;
`

const Contact = styled(NavLink)`
  position: absolute;
  top:2rem;
  right: calc(1rem + 2vw);
  color: ${props => props.theme.text};
  z-index:1;
`
const Work = styled(NavLink)`
  position: absolute;
  top:40%;
  left: 2rem;
  color: ${props => props.click
    ? props.theme.body
    : props.theme.text};
  transform: rotate(-90deg) translate(-50%, -50%);
  z-index:1;
`

const MySkills = styled(NavLink)`
  position: absolute;
  top:50%;
  right: 2rem;
  color: ${props => props.theme.text};
  transform: rotate(90deg) translate(-50%, -50%);
  z-index:1;
`

const Blog = styled(NavLink)`
  cursor: pointer;
  color: ${props => props.theme.text};
  z-index:1;
`
const About = styled(NavLink)`
  color: ${props => props.click
    ? props.theme.body
    : props.theme.text};
  z-index:1;
  cursor: pointer;
`
const BottomBar = styled.div `
  position:absolute;
  bottom: 1rem;
  left:0;
  right:0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`
const rotate = keyframes `
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}
`
const Center = styled.button `
  position:absolute;
  top:${props => props.click
    ? '85%'
    : '50%'};
  left:${props => props.click
        ? '92%'
        : '50%'};;
  transform: translate(-50%, -50%);
  border:none;
  outline:none;
  background: transparent;
  cursor:pointer;

  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  &>:first-child{
    animation: ${rotate} infinite 2s linear;
  }

  &>:last-child{
    display: ${props => props.click
            ? "none"
            : "inline-block"};
    padding-top: 1rem;
  }
`

const DarkDiv = styled.div `
    position:absolute;
    top:0;
    bottom: 0;
    right: 50%;
    width: ${props => props.click
    ? '50%'
    : '0%'};
    height: ${props => props.click
        ? '100%'
        : '0%'};
    z-index:1;
    background:#000;
    transition: height 0.5s ease, width 1s ease-in 0.5s;
`

const Main = () => {
    const [click,
        setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
            <Container>
                <DarkDiv click={click}/>
                <LogoComponent
                    theme={click
                    ? 'dark'
                    : 'light'}/>
                <SocialIcons
                    theme={click
                    ? 'dark'
                    : 'light'}/>

                <Center click={click}>
                    <YinYang
                        onClick={() => handleClick()}
                        width={click
                        ? 120
                        : 200}
                        height={click
                        ? 120
                        : 200}
                        fill="currentColor"/>
                    <span>click here</span>
                </Center>

                <Contact
                    target="_blank"
                    to={{
                    pathname: "mailto:nataly.rudnitskaya@gmail.com"
                }}>
                    <motion.h3
                        whileHover={{
                        scale: 1.2
                    }}
                        whileTap={{
                        scale: 0.8
                    }}>Say hi..</motion.h3>
                </Contact>
                <Work to="/work" click={click}>
                    <motion.h3
                        whileHover={{
                        scale: 1.2
                    }}
                        whileTap={{
                        scale: 0.8
                    }}>Work</motion.h3>
                </Work>
                <MySkills to="/skills">
                    <motion.h3
                        whileHover={{
                        scale: 1.2
                    }}
                        whileTap={{
                        scale: 0.8
                    }}>Skills</motion.h3>
                </MySkills>
                <BottomBar>
                    <About to="/about" click={click}>
                        <motion.h3
                            whileHover={{
                            scale: 1.2
                        }}
                            whileTap={{
                            scale: 0.8
                        }}>About</motion.h3>
                    </About>
                    <Blog to="/blog">
                        <motion.h3
                            whileHover={{
                            scale: 1.2
                        }}
                            whileTap={{
                            scale: 0.8
                        }}>For Fun...</motion.h3>
                    </Blog>
                </BottomBar>
            </Container>

            {click
                ? <Intro click={click}/>
                : null}
        </MainContainer>
    )
}

export default Main