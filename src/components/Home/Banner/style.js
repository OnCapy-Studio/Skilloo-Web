import { styled, keyframes } from 'styled-components';

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  padding-bottom: 6em;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;

  .container {
    display: flex;
    flex-direction: row;
  }
`;

export const Section = styled.section`
  padding-top: 1em;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    section {
      display: flex;
      justify-content: center;
    }
  }
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 2em 3em;
`;

export const Notebook = styled.img`
  width: 550px;

  @media (max-width: 1000px) {
    width: 350px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1em;

  a {
    font-size: 1.25rem;
    font-weight: 500;
    color: #000000;
    transition: all 0.5s;
  }

  a:hover {
    border: none;
    border-bottom: 1px solid #fff;
    padding: 0 0 3px 0;
  }
`;

export const LogOutBtn = styled.button`
  outline: none;
  border: none;
  padding: 7px 25px;
  color: #fff;
  font-size: 1em;
  font-weight: 900;
  background-color: #6a5fb6;
  border-radius: 10px;
  margin: 0 1em;
  transition: all 0.5s;

  &:hover {
    background-color: #fff;
    color: red;
    transform: scale(1.1);
  }
`;

export const GroupTitleButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3em;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
  color: #584f9b;
  width: 300px;
  font-weight: 700;
  font-size: 2.5rem;
  letter-spacing: 1px;
  margin: 0 0 0.5em 0;

  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }

  @media (max-width: 850px) {
    font-size: 1.75rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 100%;
  }
`;

export const Subtitle = styled.h2`
  color: #3f3f3f;
  font-size: 1.25rem;
  letter-spacing: 1px;
  font-weight: 400;

  @media (max-width: 1000px) {
    font-size: 1.15rem;
  }

  @media (max-width: 850px) {
    font-size: 0.9rem;
  }
`;

export const shakeAnimation = keyframes`
    0% {
        transform: rotate(-10deg);
    }
    50% {
        transform: rotate(20deg);
    }
    100% {
        transform: rotate(-10deg);
    }
`;

export const Icon = styled.img`
  width: 30px;
  transition: transform 0.3s ease-in-out;
`;

export const ContainerButtons = styled.div`
  display: flex;
`;

export const StartNow = styled.button`
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 0.8em 0.1em;
  margin: 0 1em 0 0;
  width: 150px;
  background-color: #584f9b;
  font-size: 1rem;
  font-weight: 700;
  transition: all 0.5s;

  a {
    display: flex;
    justify-content: space-around;
    color: #fff;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const AboutUsBtn = styled.button`
  border: 1px solid #584f9b;
  border-radius: 10px;
  padding: 0.8em 1em;
  width: 170px;
  background-color: #fff;
  font-size: 1rem;
  font-weight: 700;
  transition: all 0.5s;

  a {
    display: flex;
    justify-content: space-around;
    color: #584f9b;
  }

  img {
    transition: transform 1s;
  }

  &:hover {
    transform: scale(1.1);

    img {
      animation: ${shakeAnimation} 1s ease-in-out infinite;
    }
  }
`;
