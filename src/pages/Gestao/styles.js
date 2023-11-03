import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 0.8em;
  color: #52488c;
`;

export const Subtitle = styled.p`
  color: #3f3f3f;
  margin-bottom: 1em;
`;

export const DivNavegation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 40px 10px 0px 10px;
`;

export const Button = styled.div`
  svg {
    font-size: 45px;
    color: #52488c;
    transition: all 0.5s;
  }

  svg:hover {
    transform: scale(1.15);
  }
`;
