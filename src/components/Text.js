import React from 'react';
import styled, { withTheme } from 'styled-components'


const Frase = styled.h1`
    font-family: ${(props) => props.theme.fonts.display};
    font-size: 70px;
    color : ${(props) => props.theme.colors[Math.floor(Math.random() * 3)]}
`

const Text = (props) => {
    return (
        <div>
            <Frase> {props.content} </Frase>
        </div>
    );
};

export default withTheme(Text);