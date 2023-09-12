import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';
import { BASE_URL } from '../../context/requests';

const Materias = () => {
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

  function handlePageChange(newPageNumber) {
    setPageNumber(newPageNumber);
  }

  useEffect(() => {
    axios
      .get(`${BASE_URL}/materias?size=5&page=${pageNumber}`, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJza2lsbG9vLWFwaSIsInN1YiI6ImV0ZWNkZWl0YXF1ZXJhQGV0ZWMuc3AuZ292LmJyIiwiSWQiOjF9.uRw8BhPDNORi0ET7Vnd3914eyZ39FvK2iwLBEc4KkHg',
        },
      })
      .then((response) => {
        setMaterias(response.data);
      });
  }, [pageNumber]);

  return (
    <>
      <div>Materias</div>
      <table>
        {materias.content.map((item) => (
          <tr key={item.id}>
            <td>{item.nome}</td>
            <td>{item.area}</td>
          </tr>
        ))}
      </table>

      <Pagination dados={materias} onChange={handlePageChange} />
    </>
  );
};

export default Materias;
