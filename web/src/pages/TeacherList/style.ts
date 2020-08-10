import styled from 'styled-components';

export const Container = styled.div`
  #page-teacher-list{
    width: 100vw;
    height: 100vh;
  }

  #search-teachers{
    margin-top: 3.2rem;
  }

  #search-teachers label{
    color: ${ props => props.theme.colors.colorTextInPrimary };  /* var(--color-text-in-primary); */
  }

  #search-teachers button {
    width: 100%;
    height: 5.6rem;
    background: ${ props => props.theme.colors.colorSecondary };  /* var(--color-secondary); */
    color: ${ props => props.theme.colors.colorButtonText };  /* var(--color-button-text); */
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Arial;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.2s;
    /* margin-top: 3.2rem; */
    margin-top: 2.6rem;
  }

  #search-teachers button:hover {
    background: ${ props => props.theme.colors.colorSecondaryDark };  /* var(--color-secondary-dark); */
  }

  #page-teacher-list main{
    margin: 3.2rem auto;
    width: 90%;
  }

  @media(min-width: 700px){
    #page-teacher-list{
      max-width: 100%;
    }

    #search-teachers {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 16px;
      position: absolute;
      bottom: -28px;
    }

    #search-teachers .input-block + .input-block,
    #search-teachers .select-block + .select-block {
      margin-top: 0;
    }

    #page-teacher-list main{
      padding: 3.2rem 0;
      max-width: 740px;
      margin: 0 auto;
    }
  }
`;