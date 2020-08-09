import styled from 'styled-components';
import styleOption from '../../assets/styles/style.js'

let isDark = true

export const Container = styled.div`
  .select-block{
    position: relative;
  }

  .select-block + .select-block{
    margin-top: 1.4rem;
  }

  .select-block label{
    font-size: 1.4rem;
  }

  .select-block select{
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: ${ !isDark ? styleOption.style.colorInputBackground : styleOption.styleDark.colorInputBackground }; /* var(--color-input-background); */
    border: 1px solid ${ !isDark ? styleOption.style.colorLineInWhite : styleOption.styleDark.colorLineInWhite }; /* var(--color-line-in-white); */
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Arial;
  }

  .select-block:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: ${ !isDark ? styleOption.style.colorPrimaryLight : styleOption.styleDark.colorPrimaryLight }; /* var(--color-primary-light); */
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
`;
