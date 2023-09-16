import { styled, createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #9a8bfb 2%, #6a5fae);
  padding-top: 5em;
  padding-bottom: 7em;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;

export const Titles = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 0 4em;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    padding-left: 2em;
    padding-right: 2em;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 2.5rem;
  letter-spacing: 1px;
  margin: 0 0 0.7em;
  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const Subtitle = styled.p`
  color: #fff;
`;

export const GroupCard = styled.div`
  gap: 2em;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  flex-direction: column;
  padding: 2em;
  background-color: #6a5fb6;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.25));
  gap: 2em;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.03);
  }

  h1 {
    width: 50%;
  }

  h2 {
    color: #fff;
    font-weight: 600;
    font-size: 1.75rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }

  li {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  img {
    width: 16px;
  }

  p {
    width: 100%;
    color: #fff;
    font-size: 1rem;
  }
`;
