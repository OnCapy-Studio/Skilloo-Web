import React, { useEffect, useState } from 'react';
import * as C from '../styles';

import axios from 'axios';
import { BASE_URL } from '../../../context/requests';

import Pagination from '../../../components/NavegationData/Pagination/Pagination';
import TableData from '../../../components/Table/TableData';
import { TbGridDots } from 'react-icons/tb';
import BtPost from '../../../components/NavegationData/BtPost/BtPost';

const Materias = () => {
  const iconTag = <TbGridDots />;
  const [reload, setReload] = useState(false);

  const onReload = () => {
    setReload(!reload);
  };

  const [materias, setMaterias] = useState({
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
      .get(`${BASE_URL}/materias?size=5&page=${pageNumber}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setMaterias(response.data);
      });
  }, [pageNumber, reload]);

  return (
    <C.Section>
      <C.Container>
        <C.Title>Matérias</C.Title>
        <C.Subtitle>
          Confira as matérias cadastradas na sua unidade escolar
        </C.Subtitle>
        <TableData
          head={['', 'Id', 'Materias', 'Area', 'Ações']}
          data={materias}
          icon={iconTag}
          url={'/materias'}
          reloadController={onReload}
        />

        <C.DivNavegation>
          <Pagination dados={materias} onChange={handlePageChange} />
          <BtPost
            url={'/materias'}
            onReload={onReload}
            fields={{ nome: '', area: '' }}
          />
        </C.DivNavegation>
      </C.Container>
    </C.Section>
  );
};

export default Materias;
