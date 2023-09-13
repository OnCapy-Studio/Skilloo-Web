import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';
import { BASE_URL } from '../../context/requests';

const Labs = () => {
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

  function handlePageChange(newPageNumber) {
    setPageNumber(newPageNumber);
  }

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
  }, [pageNumber]);

  return (
    <>
      <div>Labs</div>
      <table>
        {labs.content.map((item) => (
          <tr key={item.id}>
            <td>{item.nome}</td>
          </tr>
        ))}
      </table>
      <Pagination dados={labs} onChange={handlePageChange} />
    </>
  );
};

export default Labs;
