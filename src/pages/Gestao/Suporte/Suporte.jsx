import React, { useEffect, useState } from 'react';
import * as C from '../styles';
import axios from 'axios';
import { BASE_URL } from '../../../context/requests';
import TableData from '../../../components/Table/TableData';
import Pagination from '../../../components/NavegationData/Pagination/Pagination';
import { MdOutlineReportProblem } from 'react-icons/md';
import BtPost from '../../../components/NavegationData/BtPost/BtPost';

const Suporte = () => {
  const iconTag = <MdOutlineReportProblem />;

  const [reload, setReload] = useState(false);

  const onReload = () => {
    setReload(!reload);
  };

  const [tickets, setTickets] = useState({
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
      .get(`${BASE_URL}/suporte/allTickets?size=5&page=${pageNumber}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setTickets(response.data);
      });
  }, [pageNumber, reload]);

  return (
    <C.Section>
      <C.Container>
        <C.Title>Suporte</C.Title>
        <C.Subtitle>
          Confira os problemas a serem resolvidos na sua unidade escolar
        </C.Subtitle>
        <TableData
          head={['', 'Id', 'Titulo', 'Lab', 'Descriçao', 'Status', 'Autor']}
          data={tickets}
          icon={iconTag}
          url={'/suporte'}
          reloadController={onReload}
        />
        <C.DivNavegation>
          <Pagination dados={tickets} onChange={handlePageChange} />
          <BtPost
            url={'/suporte'}
            onReload={onReload}
            fields={{ titulo: '', lab: '', descricao: '', status: '' }}
          />
        </C.DivNavegation>
      </C.Container>
    </C.Section>
  );
};

export default Suporte;
