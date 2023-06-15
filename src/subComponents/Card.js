import React from 'react'
import styled from 'styled-components';

const CardStyle = styled.div `
  background: white;
  box-shadow: 0 0 25px rgba(0,0,0,.2);
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
    color:black;
  }
  h5{
    font-size: calc(0.5em + 0.5vw);
    padding-right: 0.2rem;
    color:black;
  }
  h4 {
    padding-bottom: 1rem;
    display: block;
    color:black;
  }
  &:hover{
    background: white;
    color: black;
    cursor: pointer;
    box-shadow: 0 0 145px white;
    transition: 0.2s all ease-in;
  }
`;

const Card = ({data}) => {

    const {
        id,
        name,
        company,
        date,
        description,
        tags
    } = data;
    return (
      /* eslint-disable */
        <CardStyle key={id}> 
            <div>
                <h4>{name}{name}</h4>
                <h4>{company}</h4>
            </div>
            <ul>
                {description.map(d => <li>{d}</li>)}
            </ul>

            <div>
                {tags.map(t => <h5>{`#${t}`}</h5>)}
            </div>
            <h4>{date}</h4>
        </CardStyle>
        /* eslint-enable */
    )
}

export default Card