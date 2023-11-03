import React from "react";
import styled from "styled-components";

export const Label = styled.label`
  font-size: 0.9rem;
  margin: 0 0 5px;
`;

export const Select = styled.select`
  outline: none;
  border: 0;
  border-radius: 10px;
  width: 100%;
  height: 50px;
  padding: 1em;
  font-size: 0.9rem;
  font-family: "Inter", sans-serif;
  color: #3f3f3f;
  background-color: #cfd7fe;
`;

const InputSelect = ({ label, options, selected, funcao, campo }) => {
  return (
    <div>
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
    </div>
  );
};

export default InputSelect;
