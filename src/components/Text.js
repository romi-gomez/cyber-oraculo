import React from 'react';
import styled, { keyframes, withTheme } from 'styled-components'
import { getRandomNumber } from '../data/azar'

const appear = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1;}
`;

const Frase = styled.h1`
    font-family: ${(props) => props.theme.fonts.display};
    font-size: ${(props) => props.fontSize}px;
    color : ${(props) => props.theme.colors[getRandomNumber(0, 3)]};
    text-shadow: 7px 0 0 #000, -7px 0 0 #000, 0 7px 0 #000, 0 -7px 0 #000, 7px 7px #000, -7px -7px 0 #000, 7px -7px 0 #000, -7px 7px 0 #000;
    transition: all ease-in-out 1s;
    animation: ${appear} 7s ease-in-out alternate initial;

    &:hover{
        color: #FFF;
    }

    @media(max-width: 600px){
       font-size: ${(props) => props.fontSize * 0.6}px;
    }
`

const Text = (props) => {
    let size = getRandomNumber(35, 70)
    return (
        <div>
            <Frase fontSize={size}> {props.content} </Frase>
        </div>
    );
};

export default withTheme(Text);