
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    border: 0;
    color: #E3DFF1;
    vertical-align: baseline;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    position: relative;
    display: block;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    }
  
`

export { GlobalStyle };