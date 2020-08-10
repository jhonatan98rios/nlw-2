import styled from 'styled-components';

export const Container = styled.div`
  .input-block{
    position: relative;
  }

  .input-block + .input-block{
    margin-top: 1.4rem;
  }

  .input-block label{
    font-size: 1.4rem;
  }

  .input-block input{
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: ${ props => props.theme.colors.colorInputBackground }; /* var(--color-input-background); */
    border: 1px solid ${ props => props.theme.colors.colorLineInWhite }; /* var(--color-line-in-white); */
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Arial;
  }

  .input-block:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: ${ props => props.theme.colors.colorPrimaryLight }; /* var(--color-primary-light); */
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
`;