import React from 'react'
import styled, { withTheme } from 'styled-components'
import { result, getRandomNumber } from '../data/azar'
import Text from './Text'
import Card from './Card'

const MainContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`

const CardsContainer = styled.div`
    margin: 50px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    z-index: ${getRandomNumber(99, 100)};
`

const TextContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    z-index: ${getRandomNumber(99, 100)};
    position: fixed;
    bottom:50px;
`


const CollageContainer = () => {

    return (
        <MainContainer>
            <CardsContainer>
                {result.map((card, i) => {
                    return (
                        <Card src={result !== [] ? card.order : " "}></Card>
                    )
                })
                }
            </CardsContainer>
            <TextContainer>
                {result.map((card, i) => {
                    return (
                        <Text content={result !== [] ? card.selectedPhrase : " "}></Text>
                    )
                })
                }
            </TextContainer>
        </MainContainer>
    );

}

export default withTheme(CollageContainer);