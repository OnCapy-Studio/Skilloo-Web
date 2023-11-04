import React from "react";
import styled from "styled-components";

export const Label = styled.label`
  font-size: 0.9rem;
  margin: 0 0 5px;
  font-weight: 600;
`;

export const Input = styled.textarea`
  outline: none;
  border: 1px solid #acacac;
  border-radius: 5px;
  width: 100%;
  height: 100px;
  padding: 1em;
  font-size: 0.9rem;
  font-family: "Inter", sans-serif;
  color: #838383;
  background-color: #ffffff;
  font-weight: 600;
  margin-top: 5px;
  resize: none;

  &:focus {
    border: 2px solid #6a5fb6;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const InputBig = ({ label, value, onChange }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input defaultValue={value} onChange={onChange} />
    </Container>
  );
};

export default InputBig;
