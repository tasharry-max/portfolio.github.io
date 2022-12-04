import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {Facebook, Github, Twitter} from '../components/AllSvgs'
import {darkTheme, lightTheme} from "../components/Themes"

const Icons = styled.div `
    display:flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index:3;

    &>*:not(:last-child){
        margin:0.3rem 0;
    }
`
const Line = styled.span `
    width:1px;
    height:7rem;
    background: ${props => props.color === 'dark'
    ? darkTheme.text
    : lightTheme.text};
`

const SocialIcons = (props) => {
    return (
        <Icons>
            <div>
                <NavLink
                    style={{
                    color: 'inherit'
                }}
                    target="_blank"
                    to={{
                    pathname: ""
                }}>
                    <Github
                        width={25}
                        height={25}
                        fill={props.theme === "dark"
                        ? darkTheme.text
                        : darkTheme.body}/>
                </NavLink>
            </div>
            <div>
                <NavLink
                    style={{
                    color: 'inherit'
                }}
                    target="_blank"
                    to={{
                    pathname: ""
                }}>
                    <Twitter
                        width={25}
                        height={25}
                        fill={props.theme === "dark"
                        ? darkTheme.text
                        : darkTheme.body}/>
                </NavLink>
            </div>
            <div>
                <NavLink
                    style={{
                    color: 'inherit'
                }}
                    target="_blank"
                    to={{
                    pathname: ""
                }}>
                    <Facebook
                        width={25}
                        height={25}
                        fill={props.theme === "dark"
                        ? darkTheme.text
                        : darkTheme.body}/>
                </NavLink>
            </div>
            <Line color={props.theme}/>
        </Icons>
    )
}

export default SocialIcons