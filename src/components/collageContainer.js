import React from 'react'
import styled, { withTheme } from 'styled-components'
import result from '../data/azar'
import Text from './Text'
import Card from './Card'

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: ${(props) => props.theme.pageWidth.xxl}px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
`

const CardsContainer = styled.div`
    width: 70%;
    margin: 50px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const TextContainer = styled.div`

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