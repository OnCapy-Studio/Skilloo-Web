import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  padding: 2em;
  height: 100%;
  background-color: #f1f1f1;
`;

export const Filter = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
`;

export const Table = styled.table`
  background-color: #fff;
  border-radius: 15px;
  border-collapse: separate;
  padding: 0 1em;
  width: 100%;
  min-width: 620px;
  max-width: 1000px;

  th {
    padding: 1.5em;
    border-bottom: 1px solid #d4d3d3;
    color: #777777;
  }

  td {
    text-align: center;
    vertical-align: middle;
    padding: 1em;
    gap: 1em;
  }

  td div {
    display: flex;
    align-items: center;
    gap: 1em;
    height: 100%;
  }
`;

export const Hour = styled.button`
  border: 0;
  outline: none;
  color: #fff;
  background-color: #6a5fb6;
  border-radius: 100px;
  padding: 7px;
`;

export const Edit = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
  color: #666;
  margin: 0 0 0 1em;
`;

export const Tags = styled.div``;
