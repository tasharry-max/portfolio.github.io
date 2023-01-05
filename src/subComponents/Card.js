import React from 'react'
import styled from 'styled-components';

const CardStyle = styled.div `
  border: 1px solid white;
  padding: 1.5rem 2rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20vw;
  height: 25vw;
  font-size: calc(0.5em + 1vw);
  li {
    font-size: calc(0.5em + 0.3vw);
  }
  h5{
    font-size: calc(0.5em + 0.5vw);
    padding-right: 0.2rem;
  }
  h4 {
    padding-bottom: 1rem;
    display: block;
  }
  &:hover{
    background: white;
    color: black;
    cursor: pointer;
    transition: 0.4s all ease-in;
  }
`;

const Card = ({data}) => {

    const {id, name, company, description, tags} = data;
    return (
        <CardStyle key={id}>
            <div>
            <h4>{name}</h4>
            <h4>{company}</h4>
            </div>
            <ul>
                {description.map(d => 
                 <li>{d}</li>
                )}
            </ul>

            <div> 
            {tags.map(t => <h5>{`#${t}`}</h5>)}
            </div> 
        </CardStyle>
    )
}

export default Card