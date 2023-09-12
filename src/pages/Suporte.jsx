import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../context/requests';
import Pagination from '../components/Pagination';

const Suporte = () => {
  const [pageNumber, setPageNumber] = useState(0);

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

  function handlePageChange(newPageNumber) {
    setPageNumber(newPageNumber);
  }

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    axios
      .get(`${BASE_URL}/suporte/allTickets?size=10&page=${pageNumber}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setTickets(response.data);
      });
  }, [pageNumber]);

  return (
    <>
      <div>Suporte</div>
      <table>
        {tickets.content.map((item) => (
          <tr key={item.id}>
            <td>{item.titulo}</td>
            <td>{item.lab}</td>
            <td>{item.descricao}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </table>

      <Pagination dados={tickets} onChange={handlePageChange} />
    </>
  );
};

export default Suporte;
