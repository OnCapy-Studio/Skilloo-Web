import React, { useEffect, useState } from "react";
import * as C from "../styles";

import axios from "axios";
import { BASE_URL } from "../../../context/requests";
import { IoSchool } from "react-icons/io5";
import Pagination from "../../../components/NavegationData/Pagination/Pagination";
import TableTurmas from "./TableTurmas";
import { AiFillPlusCircle } from "react-icons/ai";
import AddTurma from "./Popup/Add/AddTurmas";

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
    const token = localStorage.getItem("authToken");

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

  const [openViewPost, setOpenViewPost] = useState(false);

  const toggleView = () => {
    setOpenViewPost(!openViewPost);
  };

  return (
    <C.Section>
      <C.Container>
        <C.Title>Turmas</C.Title>
        <C.Subtitle>
          Confira as turmas cadastradas na sua unidade escolar
        </C.Subtitle>
        <TableTurmas data={turmas} reloadController={onReload} />

        <C.DivNavegation>
          <Pagination dados={turmas} onChange={handlePageChange} />
          <C.Button>
            <AiFillPlusCircle onClick={toggleView} />
          </C.Button>

          {openViewPost && (
            <AddTurma onClose={toggleView} reloadController={onReload} />
          )}
        </C.DivNavegation>
      </C.Container>
    </C.Section>
  );
};

export default Turmas;
