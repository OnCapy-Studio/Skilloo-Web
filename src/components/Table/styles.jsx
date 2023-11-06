import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  background-color: #fff;
  border-radius: 10px;
  border-collapse: collapse;
  table-layout: auto;
  width: 100%;

  th:last-child {
    display: flex;
    justify-content: flex-end;
  }

  td:first-child {
    width: 20px;
    padding: 1.5em;
    margin: auto;
  }

  tr:nth-child(odd) {
    background-color: #f7f8fc;
  }
`;

export const Th = styled.th`
  padding: 1.5em;
  color: #777777;
  background-color: #fff;
  border-bottom: 1px solid #d4d3d3;
  font-size: 0.9em;
  text-align: left;
  font-weight: 600;
`;

export const Td = styled.td`
  padding: 1.5em;
  border-bottom: 1px solid #d4d3d3;
  font-weight: 500;

  div {
    display: flex;
    align-items: center;
    gap: 1em;
    height: 100%;
  }

  svg {
    width: 24px;
    height: auto;
    color: #ff1f00;
    cursor: pointer;
  }

  svg:first-child {
    color: #666;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ScreenIcon = styled.span`
  background-color: transparent;
  color: #666;
`;
