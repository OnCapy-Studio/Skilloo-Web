import { styled } from 'styled-components';

export const Section = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  padding-top: 5em;
  padding-bottom: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5em;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 5em;
    padding-right: 5em;
    gap: 1em;
  }
`;

export const Img = styled.img`
  width: 400px;

  @media (max-width: 768px) {
    width: 250px;
  }
`;

export const DivTitles = styled.div`
  width: 400px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: #52488c;
  margin-bottom: 0.6em;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #3f3f3f;
  font-weight: 500;
  width: 400px;
  margin-bottom: 3.5em;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2em;
  }
`;

export const ButtonSignIn = styled.button`
  width: 150px;
  padding: 1em;
  background-color: #52488c;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  transition: all 0.5s;

  p {
    color: #fff;
  }

  &:hover {
    background-color: #fff;
    color: #52488c;
    border: 1px #52488c solid;

    p {
      color: #52488c;
    }
  }
`;

export const PlaystoreBt = styled.div`
  img {
    width: 150px;
    transition: all 0.5s;
  }

  img:hover {
    transform: scale(1.1);
  }
`;

export const ImgIphone = styled.img`
  width: 220px;

  @media (max-width: 768px) {
    display: none;
  }
`;
