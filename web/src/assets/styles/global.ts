import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${ props => props.theme.colors.colorBackground }
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
    color: ${ props => props.theme.colors.colorTextBase };
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

  .switcher{
    position: absolute !important;
    top: 40px;
    right: 40px;
  }
`
