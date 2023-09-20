import React, { useEffect, useState } from 'react';
import * as C from '../styles';

import axios from 'axios';
import { BASE_URL } from '../../../context/requests';

import { BsPersonFill } from 'react-icons/bs';
import Pagination from '../../../components/NavegationData/Pagination/Pagination';
import TableData from '../../../components/Table/TableData';
import BtPost from '../../../components/NavegationData/BtPost/BtPost';

const Membros = () => {
  const iconTag = <BsPersonFill />;
  //state para recarregar pagina para delete e update
  const [reload, setReload] = useState(false);

  const onReload = () => {
    setReload(!reload);
  };

  const [professores, setProfessores] = useState({
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
      .get(`${BASE_URL}/professores?size=6&page=${pageNumber}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setProfessores(response.data);
      });
  }, [pageNumber, reload]);

  return (
    <C.Section>
      <C.Container>
        <C.Title>Membros</C.Title>
        <C.Subtitle>
          Confira os membros cadastrados na sua unidade escolar
        </C.Subtitle>
        <TableData
          head={[
            '',
            'Id',
            'Nome',
            'Email',
            'Area',
            'Pontos',
            'Contrato',
            'Ações',
          ]}
          data={professores}
          icon={iconTag}
          url={'/professores'}
          reloadController={onReload}
        />

        <C.DivNavegation>
          <Pagination dados={professores} onChange={handlePageChange} />
          <BtPost
            url={'/auth/signup'}
            onReload={onReload}
            fields={{
              nome: '',
              email: '',
              senha: '',
              area: '',
              pontuacao: '',
              contrato: '',
            }}
          />
        </C.DivNavegation>
      </C.Container>
    </C.Section>
  );
};

export default Membros;
