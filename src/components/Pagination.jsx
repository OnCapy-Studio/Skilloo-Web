import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  background-color: #6a5fb6;
  color: white;
  font-size: 15px;
  font-weight: 700;
  border: none;
`;

const Text = styled.p`
  font-size: 16px;
  margin: 0px 10px 0px 10px;
  color: #000000;
`;

function Pagination({ dados, onChange }) {
  return (
    <>
      <Container>
        <Button
          disabled={dados.first}
          onClick={() => onChange(dados.number - 1)}
        >
          &lt;
        </Button>
        <Text>{`${dados.number + 1} de ${dados.totalPages}`}</Text>
        <Button
          disabled={dados.last}
          onClick={() => onChange(dados.number + 1)}
        >
          &gt;
        </Button>
      </Container>
    </>
  );
}

export default Pagination;
