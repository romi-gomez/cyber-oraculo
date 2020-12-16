import React from 'react'
import styled from 'styled-components'
import result from '../../data/azar'
import Text from '../collages/Text'
import Card from '../collages/Card'

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: black;
    color: yellow;
`

const CollageContainer = () => {


    return (
        <Container>
            <Text content={result !== [] ? result[0].order : " "}></Text>
            <Card src={"img" + result[0].order}></Card>
            <Text content={result !== [] ? result[1].selectedPhrase : " "}></Text>
            <Text content={result !== [] ? result[2].selectedPhrase : " "}></Text>
        </Container>
    );
};

export default CollageContainer;