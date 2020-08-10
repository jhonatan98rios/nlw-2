import styled from 'styled-components';

export const Container = styled.div`
  .page-header {
    display: flex;
    flex-direction: column;
    background-color: ${ props => props.theme.colors.colorPrimary }; /* var(--color-primary); */
  }

  .page-header .top-bar-container{
    width: 90%;
    margin:  0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${ props => props.theme.colors.colorTextInPrimary }; /* var(--color-text-in-primary); */
    padding: 1.6rem 0;
  }

  .page-header .top-bar-container a {
    height: 3.2rem;
    transition: opacity 0.2;
  }

  .page-header .top-bar-container a:hover {
    opacity: 0.6;
  }

  .page-header .top-bar-container > img{
    height: 1.6rem;
  }

  .page-header .header-content{
    width: 90%;
    margin: 0 auto;
    position: relative;
    margin: 3.2rem auto;
  }

  .page-header .header-content strong {
    font: 500 3.6rem arial;
    line-height: 4.2rem;
    color: ${ props => props.theme.colors.colorTitleInPrimary }; /* var(--color-title-in-primary) */
  }

  .page-header .header-content p {
    max-width: 30rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: ${ props => props.theme.colors.colorTextInPrimary }; /* var(--color-text-in-primary); */
    margin-top: 2.4rem;
  }

  @media(min-width: 700px){
    .page-header{
      height: 340px;
    }

    .page-header .top-bar-container{
      max-width: 1100px;
    }

    .page-header .header-content{
      flex: 1;
      max-width: 740px;
      margin: 0 auto;
      padding-bottom: 48px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    .page-header .header-content strong {
      max-width: 350px;
    }
  }
`;