import React, { useEffect, useState } from 'react';
import * as C from '../styles';

import axios from 'axios';
import { BASE_URL } from '../../../context/requests';
import TableData from '../../../components/Table/TableData';
import { IoSchool } from 'react-icons/io5';
import BtPost from '../../../components/NavegationData/BtPost/BtPost';
import Pagination from '../../../components/NavegationData/Pagination/Pagination';

const Turmas = () => {
  const iconTag = <IoSchool />;
  const [reload, setReload] = useState(false);

  const onReload = () => {
    setReload(!reload);
  };

  const [turmas, setTurmas] = useState({
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
      .get(`${BASE_URL}/turmas?size=5&page=${pageNumber}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setTurmas(response.data);
      });
  }, [pageNumber, reload]);

  return (
    <C.Section>
      <C.Container>
        <C.Title>Turmas</C.Title>
        <C.Subtitle>
          Confira as turmas cadastradas na sua unidade escolar
        </C.Subtitle>
        <TableData
          head={['', 'Id', 'Turmas', 'Periodo', 'Ações']}
          data={turmas}
          icon={iconTag}
          url={'/turmas'}
          reloadController={onReload}
        />

        <C.DivNavegation>
          <Pagination dados={turmas} onChange={handlePageChange} />
          <BtPost
            url={'/turmas'}
            onReload={onReload}
            fields={{ nome: '', periodo: '' }}
          />
        </C.DivNavegation>
      </C.Container>
    </C.Section>
  );
};

export default Turmas;
