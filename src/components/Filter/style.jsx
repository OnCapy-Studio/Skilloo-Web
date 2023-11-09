import styled from "styled-components";

export const SelectHorarios = styled.select`
  outline: none;
  border: 1px solid #acacac;
  border-radius: 5px;
  width: 100%;
  height: 60px;
  font-size: 0.9rem;
  font-family: "Inter", sans-serif;
  color: #838383;
  background-color: #ffffff;
  font-weight: 600;
  margin: 5px 0px 20px 0px;

  &:focus {
    border: 2px solid #6a5fb6;
  }
`;

export const Label = styled.h1`
  font-size: 16px;
  font-weight: 600;
`;
