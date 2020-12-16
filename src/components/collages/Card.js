import React from 'react';
import styled from 'styled-components'
import img0 from '../../data/img/0.png'
import img1 from '../../data/img/1.png'
import img2 from '../../data/img/2.png'
import img3 from '../../data/img/3.png'
import img4 from '../../data/img/4.png'
import img5 from '../../data/img/5.png'
import img6 from '../../data/img/6.png'
import img7 from '../../data/img/7.png'
import img8 from '../../data/img/8.png'
import img9 from '../../data/img/9.png'
import img10 from '../../data/img/10.png'
import img11 from '../../data/img/11.png'
import img12 from '../../data/img/12.png'
import img13 from '../../data/img/13.png'
import img14 from '../../data/img/14.png'
import img15 from '../../data/img/15.png'
import img16 from '../../data/img/16.png'
import img17 from '../../data/img/17.png'
import img18 from '../../data/img/18.png'
import img19 from '../../data/img/19.png'
import img20 from '../../data/img/20.png'
import img21 from '../../data/img/21.png'

let Container = styled.div`
    width: 100%;
`

let CardImg = styled.img`
    width: 100%;
`


const Card = (props) => {

    let imgSource = img0

    return (
        <Container>
            <CardImg src={imgSource} alt=""></CardImg>
        </Container>
    );
};

export default Card;