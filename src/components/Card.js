import React from 'react'
import styled, { withTheme } from 'styled-components'


let Container = styled.div`
    width: 90%;
    margin: 0 auto;
    transition: all ease-in-out 1s;

    &:hover{
        width: 100%;
    }
`

let CardImg = styled.img`
    width: 100%;
`


const Card = (props) => {

    const imgSource = require(`../data/img/${props.src}.png`).default

    return (
        <Container>
            <CardImg src={imgSource} alt=""></CardImg>
        </Container>
    );
};

export default withTheme(Card);