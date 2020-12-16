import './App.css';
import styled, { ThemeProvider } from "styled-components";
import CollageContainer from './components/CollageContainer'
import { getRandomNumber } from './data/azar'
const theme = {
  colors: [
    "#fe0095",
    "#5f4687",
    "#70bafb"
  ]
  ,
  fonts: {
    display: 'Roboto Mono'
  },
  pageWidth: {
    xxl: 1366,
    xl: 1200,
    l: 992,
    m: 768,
    s: 576,
  },
  maxWidth: 1366,
}

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: ${(props) => props.theme.pageWidth.xxl}px;
    
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
`

const BackgroundContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    heigth: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%);;
    z-index:102;
`

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MainContainer>
          <BackgroundContainer>
            <CollageContainer></CollageContainer>
          </BackgroundContainer>
        </MainContainer>
      </ThemeProvider>
    </div>
  );
}

export default App;
