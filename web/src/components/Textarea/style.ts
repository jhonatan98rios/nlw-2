import styled from 'styled-components';

export const Container = styled.div`
  .textarea-block{
    position: relative;
  }

  .textarea-block + .textarea-block{
    margin-top: 1.4rem;
  }

  .textarea-block label{
    font-size: 1.4rem;
  }

  .textarea-block textarea{
    width: 100%;
    height: 16rem;
    min-height: 8rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: ${ props => props.theme.colors.colorInputBackground }; /* var(--color-textarea-background); */
    border: 1px solid ${ props => props.theme.colors.colorLineInWhite }; /* var(--color-line-in-white); */
    outline: 0;
    resize: vertical;
    padding: 1.2rem 1.6rem;
    font: 1.6rem Arial;
  }

  .textarea-block:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: ${ props => props.theme.colors.colorPrimaryLight }; /* var(--color-primary-light); */
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 7px;
  }
`;