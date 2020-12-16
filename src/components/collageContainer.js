import React from 'react'
import styled from 'styled-components'
import result from '../data/azar'
import Text from './Text'
import Card from './Card'

const MainContainer = styled.div`

`

const CardsContainer = styled.div`

`

const TextContainer = styled.div`

`


const CollageContainer = () => {

    return (
        <MainContainer>
            {result.map((card, i) => {
                return (
                    <CardsContainer>
                        <Card src={result !== [] ? card.order : " "}></Card>
                    </CardsContainer>
                )
            })}
            {result.map((card, i) => {
                return (
                    <TextContainer>
                        <Text content={result !== [] ? card.selectedPhrase : " "}></Text>
                    </TextContainer>
                )
            })
            }
        </MainContainer>
    );

}

export default CollageContainer;