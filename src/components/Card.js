import React from 'react'
import styled, { keyframes, withTheme } from 'styled-components'
import { getRandomNumber } from '../data/azar';

const float = keyframes`
    0% { transform: translate3d(0,15px,0); }
    100% { transform: translate3d(0,-15px,0); }
`;

const CardContainer = styled.div`
 animation: ${float} 4s ease-in-out alternate infinite;
`

const Container = styled.div`
    width: ${(props) => props.size}%;
    margin: 0 auto;
    transition: all ease-in-out 1s;
    transform: rotate3d(1, 2.0, 3.0, ${(props) => props.rotate}deg);

    &:hover{
        width: ${(props) => props.size * 1.5}%;
        transform: rotate3d(1, 2.0, 3.0, ${(props) => props.rotate - props.rotate * 2}deg);
    }
`

const CardImg = styled.img`
    width: 100%;
`


const Card = (props) => {

    const imgSource = require(`../data/img/${props.src}.png`).default
    let size = getRandomNumber(60, 120)
    let rotate = getRandomNumber(-20, 20)

    return (
        <CardContainer>
            <Container size={size} rotate={rotate}>
                <CardImg src={imgSource} alt=""></CardImg>
            </Container>
        </CardContainer>
    );
};

export default withTheme(Card);