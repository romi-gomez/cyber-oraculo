import React from 'react'
import styled, { withTheme } from 'styled-components'
import { result } from '../data/azar'
import Text from './Text'
import Card from './Card'

const MainContainer = styled.div`
    width: 60%;
    margin: 0 auto;
    z-index:9999999;
`

const CardsContainer = styled.div`
    width: 100%;
    margin: 50px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media(max-width: 600px){
        grid-template-columns: 1fr;
    }
`

const TextContainer = styled.div`
    width: 70%;
    position: fixed;
    bottom:50px;
    left:15%;
`


const CollageContainer = () => {

    return (
        <MainContainer>
            <CardsContainer>
                {result.map((card, i) => {
                    return (
                        <Card key={i} src={result !== [] ? card.order : " "}></Card>
                    )
                })
                }
            </CardsContainer>
            <TextContainer>
                {result.map((card, i) => {
                    return (
                        <Text key={i} content={result !== [] ? card.selectedPhrase : " "}></Text>
                    )
                })
                }
            </TextContainer>
        </MainContainer>
    );

}

export default withTheme(CollageContainer);