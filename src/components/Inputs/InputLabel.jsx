import React from "react";
import styled from "styled-components";

export const Label = styled.label`
  font-size: 0.9rem;
  margin: 0 0 5px;
`;

export const Input = styled.input`
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

const InputLabel = ({ label, type, value, onChange }) => {
  return (
    <div>
      <Label>{label}</Label>
      <Input type={type} defaultValue={value} onChange={onChange} />
    </div>
  );
};

export default InputLabel;
