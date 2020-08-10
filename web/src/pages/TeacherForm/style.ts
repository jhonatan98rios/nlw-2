import styled from 'styled-components';

export const Container = styled.div`
  
  #page-teacher-form{
    width: 100vw;
    height: 100vh;
  }

  #page-teacher-form .page-header .header-content{
    margin-bottom: 6.4rem;
  }

  #page-teacher-form main {
    background-color: ${ props => props.theme.colors.colorBoxBase }; /* var(--color-box-base); */
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2rem;
    padding-top: 6.4rem;
    overflow: hidden;
  }

  #page-teacher-form main fieldset {
    border: 0;
    padding: 0 2.4rem;
  }

  #page-teacher-form main fieldset + fieldset {
    margin-top: 6.4rem;
  }

  #page-teacher-form main fieldset legend {
    font: 700 2.4rem Arial;
    color: ${ props => props.theme.colors.colorTextTitle }; /* var(--color-text-title); */
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid ${ props => props.theme.colors.colorLineInWhite }; /* var(--color-line-in-white); */
  }

  #page-teacher-form main fieldset legend button {
    background: none;
    border: 0;
    color: ${ props => props.theme.colors.colorPrimary }; /* var(--color-primary); */
    font: 700 1.6rem;
    cursor: pointer;
    transition: color 0.2s;
  }

  #page-teacher-form main fieldset legend button:hover{
    color: ${ props => props.theme.colors.colorPrimaryDark }; /* var(--color-primary-dark) */
  }

  #page-teacher-form main fieldset .input-block + .textarea-block,
  #page-teacher-form main fieldset .select-block + .input-block {
    margin-top: 2.4rem;
  }

  #page-teacher-form main label {
    color: ${ props => props.theme.colors.colorTextComplement }; /* var(--color-text-complement); */
  }

  #page-teacher-form main footer {
    padding: 4rem 2.4rem;
    background: ${ props => props.theme.colors.colorBoxFooter }; /* var(--color-box-footer); */
    border-top: 1px solid ${ props => props.theme.colors.colorLineInWhite }; /* var(--color-line-in-white); */
    margin-top: 6.4rem;
  }

  #page-teacher-form main footer p{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${ props => props.theme.colors.colorTextComplement }; /* var(--color-text-complement) */
  }

  #page-teacher-form main footer p img{
    margin-right: 2rem;
  }

  #page-teacher-form main footer button {
    width: 100%;
    height: 5.6rem;
    background: ${ props => props.theme.colors.colorSecondary }; /* var(--color-secondary); */
    color: ${ props => props.theme.colors.colorButtonText }; /* var(--color-button-text); */
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Arial;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.2s;
    margin-top: 3.2rem;
  }

  #page-teacher-form main footer button:hover {
    background: ${ props => props.theme.colors.colorSecondaryDark }; /* var(--color-secondary-dark); */
  }

  @media(min-width: 700px){
    #page-teacher-form {
      max-width: 100vw;
    }

    #page-teacher-form .page-header .header-content {
      margin-bottom: 0;
    }

    #page-teacher-form main fieldset {
      padding: 0 6.4rem;
    }

    #page-teacher-form main .schedule-item{
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      column-gap: 1.6rem;
    }

    #page-teacher-form main .schedule-item .input-block {
      margin-top: 0 !important;
    }

    #page-teacher-form main footer {
      padding: 4.0rem 6.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    #page-teacher-form main footer p{
      justify-content: space-between;
    }

    #page-teacher-form main footer button {
      width: 20rem;
      margin-top: 0;
    }
  }
`;