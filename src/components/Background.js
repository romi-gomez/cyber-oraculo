import React from 'react';
import { result, getRandomNumber } from '../data/azar'
import styled, { withTheme, keyframes } from 'styled-components'

const MainContainer = styled.div`
    position: fixed;
    width: 150%;
    height: 100%;
    max-width: ${(props) => props.theme.pageWidth.xxl}px;
    z-index: -1;
    
    &::before{
        content:"-";
        display:block;
        position: absolute;
        width: ${getRandomNumber(100, 2000)}px;
        height: ${getRandomNumber(100, 2000)}px;
        top:-${getRandomNumber(100, 200)}px;
        left:-${getRandomNumber(100, 200)}px;
        transform: skew(${getRandomNumber(10, 50)}deg, ${getRandomNumber(10, 50)}deg);
        background-color: ${(props) => props.theme.colors[getRandomNumber(0, 3)]};
    }
    &::after{
        content:"-";
        display:block;
        position: absolute;
        width: ${getRandomNumber(100, 2000)}px;
        height: ${getRandomNumber(100, 2000)}px;
        bottom:-${getRandomNumber(100, 200)}px;
        right:-${getRandomNumber(100, 200)}px;
        transform: skew(${getRandomNumber(10, 50)}deg, ${getRandomNumber(10, 50)}deg);
        background-color: ${(props) => props.theme.colors[getRandomNumber(0, 3)]}

    }

    }
`

const BackgroundContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 100%);
    z-index: 10;
`
const BackgroundText = styled.p`
    position: fixed;
    top: ${(props) => props.top}%;
    left: ${(props) => props.left}%;
    font-size: ${(props) => props.fontSize}px;
    font-family: ${(props) => props.theme.fonts.display};
    color : ${(props) => props.theme.colors[getRandomNumber(0, 3)]};
    line-height: ${(props) => props.fontSize - props.fontSize / 2}px;
    z-index: 0;

`

const Background = (props) => {
    return (
        <MainContainer>
            <BackgroundContainer></BackgroundContainer>
            {result.map((card, i) => {
                let size = getRandomNumber(100, 500)
                let top = getRandomNumber(0, 50)
                let left = getRandomNumber(0, 50)
                return (
                    <BackgroundText fontSize={size} top={top} left={left} key={i}>{result !== [] ? card.selectedPhrase : " "}</BackgroundText>
                )
            })
            }
        </MainContainer>
    );
};

export default withTheme(Background);