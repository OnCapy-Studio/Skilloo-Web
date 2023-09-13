import React, { useEffect, useState } from 'react';
import * as C from './styles';

import InputLabel from '../../../components/InputLabel';
import MembrosData from './MembrosData';
import axios from 'axios';
import { BASE_URL } from '../../../context/requests';
import Pagination from '../../../components/Pagination';

const Membros = () => {
  const [search, setSearch] = React.useState('');

  const toogle = (membro) => {
    console.log(membro);
  };

  const [pageNumber, setPageNumber] = useState(0);

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

  function handlePageChange(newPageNumber) {
    setPageNumber(newPageNumber);
  }

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    axios
      .get(`${BASE_URL}/professores?size=5&page=${pageNumber}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setProfessores(response.data);
      });
  }, [pageNumber]);

  return (
    <C.Container>
      <h1>Membros</h1>
      <C.Filter>
        <InputLabel
          label=""
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filtrar membros"
        />
      </C.Filter>
      <C.Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Membros</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {professores.content.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>
                <C.Hour className="material-symbols-outlined">schedule</C.Hour>

                <C.Edit
                  className="material-symbols-outlined"
                  onClick={toogle(item)}
                >
                  edit
                </C.Edit>
              </td>
            </tr>
          ))}
        </tbody>
      </C.Table>
      <Pagination dados={professores} onChange={handlePageChange} />
    </C.Container>
  );
};

export default Membros;
