import styled from 'styled-components';
import styleOption from '../../assets/styles/style.js'

let isDark = true

export const Container = styled.div`
  .teacher-item{
    background: ${ !isDark ? styleOption.style.colorBoxBase : styleOption.styleDark.colorBoxBase }; /* var(--color-box-base); */
    border: 1px solid ${ !isDark ? styleOption.style.colorLineInWhite : styleOption.styleDark.colorLineInWhite }; /* var(--color-line-in-white); */
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    overflow: hidden;
  }

  .teacher-item header{
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;
  }

  .teacher-item header img{
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  .teacher-item header div{
    margin-left: 2.4rem;
  }

  .teacher-item header div strong{
    font: 700 2.4rem Arial;
    display: block;
    color: ${ !isDark ? styleOption.style.colorTextTitle : styleOption.styleDark.colorTextTitle }; /* var(--color-text-title); */
  }

  .teacher-item header div span{
    font: 1.6rem;
    display: block;
    margin-top: 0.4rem;
  }

  .teacher-item > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
  }

  .teacher-item footer{
    padding: 3.2rem 2rem;
    background: ${ !isDark ? styleOption.style.colorBoxFooter : styleOption.styleDark.colorBoxFooter }; /* var(--color-box-footer); */
    border-top: 1px solid ${ !isDark ? styleOption.style.colorLineInWhite : styleOption.styleDark.colorLineInWhite }; /* var(--color-line-in-white); */
    margin-top: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .teacher-item footer p strong{
    color: ${ !isDark ? styleOption.style.colorPrimary : styleOption.styleDark.colorPrimary }; /* var(--color-primary); */
    font-size: 1.6rem;
    display: block;
  }

  .teacher-item footer a{
    width: 20rem;
    height: 5.6rem;
    background: ${ !isDark ? styleOption.style.colorSecondary : styleOption.styleDark.colorSecondary }; /* var(--color-secondary); */
    color: ${ !isDark ? styleOption.style.colorButtonText : styleOption.styleDark.colorButtonText }; /* var(--color-button-text); */
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.4rem Arial;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transition: all 0.2s;
    text-decoration: none;
  }

  .teacher-item footer a:hover{
    background: ${ !isDark ? styleOption.style.colorSecondaryDark : styleOption.styleDark.colorSecondaryDark }; /* var(--color-secondary-dark); */
  }

  @media(min-width: 700px){
    .teacher-item header, .teacher-item footer {
      padding: 3.2rem;
    }

    .teacher-item > p{
      padding: 0 3.2rem;
    }

    .teacher-item footer p strong {
      display: initial;
      margin-left: 1.6rem;
    }

    .teacher-item footer button{
      width: 24.5rem;
      font-size: 1.6rem;
      justify-content: center;
    }

    .teacher-item footer button img {
      margin-right: 1.6rem;
    }
  }
`;
