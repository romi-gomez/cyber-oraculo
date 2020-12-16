import React from 'react';
import styled from 'styled-components';


const Frase = styled.h1`
    font-size= 100px;
`

const Text = (props) => {
    return (
        <div>
            <Frase> {props.content} </Frase>
        </div>
    );
};

export default Text;