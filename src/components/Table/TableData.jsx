import React, { useEffect, useState } from 'react';
import * as C from './styles';

import PopUpView from '../View/PopUpView';

import { HiMiniPencil } from 'react-icons/hi2';
import { IoMdTrash } from 'react-icons/io';
import axios from 'axios';
import { BASE_URL } from '../../context/requests';

const Table = ({ head, data, icon, url, reloadController }) => {
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
  const deleteRequest = (url, id) => {
    //busca o token do usuário
    const token = localStorage.getItem('authToken');

    axios
      .delete(`${BASE_URL}${url}/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        //caso de certo
        //alerta de sucesso
        alert('Item deletado');

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
              {head && head.map((item) => <C.Th key={item}>{item}</C.Th>)}
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
                        deleteRequest(url, item.id);
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
        <PopUpView
          memberData={viewMemberData}
          onClose={toggleView}
          url={url}
          id={idData}
          reloadController={reloadController}
        />
      )}
    </>
  );
};

export default Table;
