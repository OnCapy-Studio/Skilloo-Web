import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 8px;
  background-color: #52488c;
  color: white;
  font-size: 15px;
  font-weight: 700;
  border: none;
  transition: all 1s;

  &:hover {
    background-color: #fff;
    border: 2px solid #52488c;
    color: #52488c;
  }
`;

const Text = styled.p`
  font-size: 16px;
  margin: 0px 10px 0px 10px;
  color: #000000;
`;

function Pagination({ dados, onChange }) {
  return (
    <Container>
      <Button disabled={dados.first} onClick={() => onChange(dados.number - 1)}>
        &lt;
      </Button>

      <Text>{`${dados.number + 1} de ${dados.totalPages}`}</Text>

      <Button disabled={dados.last} onClick={() => onChange(dados.number + 1)}>
        &gt;
      </Button>
    </Container>
  );
}

export default Pagination;
