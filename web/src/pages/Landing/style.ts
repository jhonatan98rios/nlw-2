import styled from 'styled-components';
import styleOption from '../../assets/styles/style.js'

let isDark = true

export const Container = styled.div`

  #page-landing {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${ !isDark ? styleOption.style.colorTextInPrimary : styleOption.styleDark.colorTextInPrimary };
    background: ${ !isDark ? styleOption.style.colorPrimary : styleOption.styleDark.colorPrimary };
  }

  .logo-container img {
    height: 10rem;
  }

  .hero-image {
    width: 100%;
  }

  .logo-container {
    text-align: center;
    margin-bottom: 3.2rem;
  }

  .logo-container h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  .buttons-container{
    display: flex;
    justify-content: center;
    margin: 3.2rem 0;
  }

  .buttons-container a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: ${ isDark ? styleOption.style.colorButtonText : styleOption.styleDark.colorButtonText };

    transition: all 0.2s;
  }

  .buttons-container a:first-child {
    margin-right: 1.6rem;
  }

  .buttons-container a img {
    width: 4rem;
    margin-right: 2.4rem;
  }

  .buttons-container a.study {
    background: ${ isDark ? styleOption.style.colorPrimaryLight : styleOption.styleDark.colorPrimaryLight };
  }

  .buttons-container a.give-classes {
    background: ${ isDark ? styleOption.style.colorSecondary : styleOption.styleDark.colorSecondary };
  }

  .buttons-container a.study:hover {
    background: ${ isDark ? styleOption.style.colorPrimaryLighter : styleOption.styleDark.colorPrimaryLighter };
  }

  .buttons-container a.give-classes:hover {
    background: ${ isDark ? styleOption.style.colorSecondaryDark : styleOption.styleDark.colorSecondaryDark };
  }

  .total-connections {
    font-size: 1.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .total-connections img {
    margin-left: 0.8rem;
  }

  @media(min-width: 1100px){

    #page-landing-content {
      max-width: 1100px;

      display: grid;
      grid-template-rows: 350px 1fr;
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-areas: "logo hero hero" "buttons buttons total";
    }

    .logo-container {
      grid-area: logo;
      align-self: center;
      text-align: left;
      margin: 0;
    }

    .logo-container h2 {
      text-align: initial;
      font-size: 3.6rem;
    }

    .logo-container img{
      height: 100%;
    }

    .hero-image {
      grid-area: hero;
      justify-self: end;
    }

    .buttons-container {
      grid-area: buttons;
      justify-content: flex-start;
    }

    .buttons-container a {
      font-size: 2.4rem;
    }

    .total-connections{
      grid-area: total;
      justify-self: end;
    }

  }
`;