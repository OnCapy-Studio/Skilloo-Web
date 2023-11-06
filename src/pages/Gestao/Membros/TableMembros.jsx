import React, { useState } from "react";
import * as C from "../../../components/Table/styles";

import { HiMiniPencil } from "react-icons/hi2";
import { IoMdTrash } from "react-icons/io";
import axios from "axios";
import { BASE_URL } from "../../../context/requests";
import { BsPersonFill } from "react-icons/bs";
import EditMembro from "./Popup/Edit/EditMembro";

import InputLabel from "../../../components/Inputs/InputLabel";

const TableMembros = ({ data, reloadController }) => {
  const icon = <BsPersonFill />;
  //states para controlar a abertura do popup de ediçao
  const [openView, setOpenView] = useState(false);
  const [viewMemberData, setViewMemberData] = useState(null);

  //guardar o id do dado selecionado
  const [idData, setIdData] = useState(0);

  const toggleView = (member) => {
    setIdData(member.id);
    delete member.id;
    setViewMemberData(member);
    setOpenView(!openView);
  };

  // função para deletar dados
  const deleteRequest = (id) => {
    //busca o token do usuário
    const token = localStorage.getItem("authToken");

    axios
      .delete(`${BASE_URL}/professores/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        //caso de certo
        //alerta de sucesso
        alert("Item deletado");

        //atualiza os
        reloadController();
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <>
      <C.Container>
        <C.Table>
          <thead>
            <tr>
              <C.Th key={0}>{""}</C.Th>
              <C.Th key={1}>{"ID"}</C.Th>
              <C.Th key={2}>{"NOME"}</C.Th>
              <C.Th key={3}>{"EMAIL"}</C.Th>
              <C.Th key={4}>{"ÁREA"}</C.Th>
              <C.Th key={5}>{"PONTOS"}</C.Th>
              <C.Th key={6}>{"CONTRATO"}</C.Th>
              <C.Th key={7}>{"AÇÕES"}</C.Th>
            </tr>
          </thead>
          <tbody>
            {data.content.map((item, index) => (
              <tr key={index}>
                <C.Td>
                  <C.ScreenIcon>{icon}</C.ScreenIcon>
                </C.Td>

                {Object.keys(item).map((key) => (
                  <C.Td key={key}>{item[key]}</C.Td>
                ))}

                <C.Td>
                  <C.Actions>
                    <HiMiniPencil onClick={() => toggleView({ ...item })} />
                    <IoMdTrash
                      onClick={() => {
                        //quando clicar de deletar, chame a função deleteRequest
                        deleteRequest(item.id);
                      }}
                    />
                  </C.Actions>
                </C.Td>
              </tr>
            ))}
          </tbody>
        </C.Table>
      </C.Container>

      {openView && (
        <EditMembro
          memberData={viewMemberData}
          onClose={toggleView}
          id={idData}
          reloadController={reloadController}
        />
      )}
    </>
  );
};

export default TableMembros;
