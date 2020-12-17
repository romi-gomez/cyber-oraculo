import React from 'react'
import CollageContainer from './CollageContainer'
import Background from './Background'
import Intro from './Intro'

const Content = (props) => {

    if (props.preguntar == false) {
        return (
            <div >
                <Background ></Background>
                <Intro></Intro>
            </div >
        );
    }
    else {
        return (
            <div >
                <Background></Background>
                <CollageContainer> </CollageContainer>
            </div >
        );
    }
};

export default Content;