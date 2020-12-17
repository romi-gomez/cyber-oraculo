import React from 'react';
import styled, { withTheme } from 'styled-components'
import { getRandomNumber } from '../data/azar'

const Input = styled.input`
    width: 70%;
    margin-top:25%;
    font-size: 30px;
    background: #000;
    padding:20px;
    border: none;
    box-shadow: none;
    border-bottom: 2px solid #FFF;
    font-family: ${(props) => props.theme.fonts.display};
    color: #FFF;
    border-radius: 7px;
    padding-left:50px;

    &::placeholder{
        color: #FFF;
    }

    &:focus{
        outline:transparent;
        border-bottom:2px solid ${(props) => props.theme.colors[getRandomNumber(0, 3)]};

        &::placeholder{
            color : ${(props) => props.theme.colors[getRandomNumber(0, 3)]};
        }
    }

    @media(max-width: 600px){
        width: 90%;
        margin-top:75%;
    }
`

const Intro = (props) => {
    return (
        <div>
            <Input placeholder="Escribí tu pregunta y apretá enter" onKeyPress={props.onKeyPressed}></Input>
        </div>
    );
};

export default withTheme(Intro);