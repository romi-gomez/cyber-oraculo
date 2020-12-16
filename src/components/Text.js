import React from 'react';
import styled, { withTheme } from 'styled-components'
import { getRandomNumber } from '../data/azar'


const Frase = styled.h1`
    font-family: ${(props) => props.theme.fonts.display};
    font-size: ${(props) => props.fontSize}px;
    color : ${(props) => props.theme.colors[getRandomNumber(0, 3)]};
`

const Text = (props) => {
    let size = getRandomNumber(20, 50)
    return (
        <div>
            <Frase fontSize={size}> {props.content} </Frase>
        </div>
    );
};

export default withTheme(Text);