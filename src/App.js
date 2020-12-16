import './App.css';
import { ThemeProvider } from "styled-components";
import CollageContainer from './components/CollageContainer'

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

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CollageContainer></CollageContainer>
      </ThemeProvider>
    </div>
  );
}

export default App;
