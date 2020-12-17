import React, { useState } from 'react'
import './App.css';
import { ThemeProvider } from "styled-components";
import Content from './components/Content'

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
  const [preguntar, setPreguntar] = useState(false);

  return (
    <div className="App" onKeyDown={(event) => event.key === 'Enter' ? setPreguntar(preguntar ? false : true) : event.key === "Backspace" ? setPreguntar(preguntar ? true : false) : true} >
      <ThemeProvider theme={theme}>
        <Content preguntar={preguntar}></Content>
      </ThemeProvider>
    </div>
  );
}

export default App;
