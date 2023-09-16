import { styled, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100%;
        height: 100%;
        background-color: #FFF;
    }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
  width: 100%;
  max-width: 1200px;
  padding-top: 5em;
  padding-bottom: 7em;
`;

export const Section = styled.section`
  width: 100%;

  div {
    display: flex;
    width: 100%;
  }

  aside {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  li {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  i {
    font-size: 2rem;
  }
`;

export const Title = styled.h1`
  color: #584f9b;
  font-weight: 700;
  font-size: 2.5rem;
  letter-spacing: 1px;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }

  @media (max-width: 850px) {
    font-size: 1.75rem;
    margin-bottom: 1em;
  }
`;

export const Esquilo = styled.img`
  width: 200px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Brasil = styled.img`
  width: 32px;
`;
