import React, { useEffect, useState } from 'react';
import * as C from '../styles';

import axios from 'axios';
import { BASE_URL } from '../../../context/requests';

import Pagination from '../../../components/NavegationData/Pagination/Pagination';
import TableData from '../../../components/Table/TableData';
import { MdComputer } from 'react-icons/md';
import BtPost from '../../../components/NavegationData/BtPost/BtPost';

const Labs = () => {
  const iconTag = <MdComputer />;
  const [reload, setReload] = useState(false);

  const onReload = () => {
    setReload(!reload);
  };

  const [labs, setLabs] = useState({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  const [pageNumber, setPageNumber] = useState(0);
  const handlePageChange = (newPageNumber) => setPageNumber(newPageNumber);

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    axios
      .get(`${BASE_URL}/labs?size=5&page=${pageNumber}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setLabs(response.data);
      });
  }, [pageNumber, reload]);

  return (
    <C.Section>
      <C.Container>
        <C.Title>Laboratórios</C.Title>
        <C.Subtitle>
          Confira os labs cadastrados na sua unidade escolar
        </C.Subtitle>
        <TableData
          head={['', 'Id', 'Labs', 'Ações']}
          data={labs}
          icon={iconTag}
          url={'/labs'}
          reloadController={onReload}
        />

        <C.DivNavegation>
          <Pagination dados={labs} onChange={handlePageChange} />
          <BtPost url={'/labs'} onReload={onReload} fields={{ nome: '' }} />
        </C.DivNavegation>
      </C.Container>
    </C.Section>
  );
};

export default Labs;
