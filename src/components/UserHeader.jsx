import React from 'react';
import styled from 'styled-components';
import { BiSolidUserCircle } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;

  svg {
    font-size: 50px;
    color: #fff;
  }
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`;

const Settings = styled.div`
  svg {
    font-size: 20px;
  }
`;

function UserHeader() {
  const user = localStorage.getItem('userName');

  return (
    <>
      <Container>
        <Title>{user}</Title>
        <BiSolidUserCircle />
        <Settings>
          <FiSettings />
        </Settings>
      </Container>
    </>
  );
}

export default UserHeader;
