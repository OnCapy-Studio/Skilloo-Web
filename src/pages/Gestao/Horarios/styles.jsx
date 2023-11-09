import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6em;
`;

export const FilterField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Frame = styled.div`
  border: 1px solid #000;
  width: 250px;
  height: 400px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;
