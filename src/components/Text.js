import React from 'react';
import styled, { withTheme } from 'styled-components'


const Frase = styled.h1`
    font-family: ${(props) => props.theme.fonts.display};
    font-size: ${(props) => props.fontSize}px;
    color : ${(props) => props.theme.colors[Math.floor(Math.random() * 3)]}
`

const Text = (props) => {
    let fontSize = (min, max) => {
        return Math.random() * (max - min) + min;
    }
    return (
        <div>
            <Frase fontSize={fontSize(20, 50)}> {props.content} </Frase>
        </div>
    );
};

export default withTheme(Text);