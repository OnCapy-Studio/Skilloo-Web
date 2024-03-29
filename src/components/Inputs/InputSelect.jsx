import React from "react";
import styled from "styled-components";

export const Label = styled.label`
  font-size: 0.9rem;
  margin: 0 0 5px;
  font-weight: 600;
`;

export const Select = styled.select`
  outline: none;
  border: 1px solid #acacac;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  font-size: 0.9rem;
  font-family: "Inter", sans-serif;
  color: #838383;
  background-color: #ffffff;
  font-weight: 600;
  margin-top: 5px;

  &:focus {
    border: 2px solid #6a5fb6;
  }
`;

export const Container = styled.div`
  width: 48%;
  margin-bottom: 10px;
`;

const InputSelect = ({ label, options, selected, funcao, campo }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Select
        name={label}
        defaultValue={"DEFAULT"}
        onChange={(e) => funcao(campo, e.target.value)}
      >
        {options.map((option) =>
          option == selected ? (
            <option key={option} value={"DEFAULT"}>
              {option}
            </option>
          ) : (
            <option key={option} value={option}>
              {option}
            </option>
          )
        )}
      </Select>
    </Container>
  );
};

export default InputSelect;
