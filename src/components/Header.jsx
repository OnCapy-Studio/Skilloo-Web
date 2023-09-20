import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Head from './Head';
import UserHeader from './UserHeader';

const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 2em 3em;
  background-color: #524994;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10em;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
`;

const Header = () => {
  const params = useParams();

  const firstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);
  const formattedId = firstLetter(params['*']);

  return (
    <Container>
      <Head title={formattedId} />
      <Section>
        <Title>{formattedId}</Title>
        <UserHeader></UserHeader>
      </Section>
    </Container>
  );
};

export default Header;
