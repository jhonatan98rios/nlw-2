import { createGlobalStyle } from 'styled-components'
import styleOption from './style'

let isDark = true

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${ !isDark ? styleOption.style.colorBackground : styleOption.styleDark.colorBackground }; /* var(--color-background); */
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, button, textarea {
    /*  Instalar as fontes Archivo e Poppins  */
    /* font: 500 1.6rem Poppins; */
    font: 500 1.6rem Arial;
    color: ${ !isDark ? styleOption.style.colorTextBase : styleOption.styleDark.colorTextBase }; /* var(--color-text-base); */
  }

  .container {
    width: 90vw;
    max-width: 700px;
  }

  @media(min-width: 700px){
    :root {
      font-size: 62.5%;
    }
  }
`
