import React, { useEffect, useState } from 'react';
import * as C from './styles';

import { IoClose } from 'react-icons/io5';

import InputLabel from '../InputLabel';
import axios from 'axios';
import { BASE_URL } from '../../context/requests';
import { Navigate } from 'react-router-dom';

const PopUpPost = ({ fields, onClose, reloadController, url }) => {
  // Criando um estado de objeto com as propriedades do membro
  const [formData, setFormData] = useState({ ...fields });

  // Função para atualizar um valor específico no objeto de estado
  const handleChange = (property, value) => {
    setFormData({
      ...formData,
      [property]: value,
    });
  };

  const postRequest = (url, dados) => {
    const token = localStorage.getItem('authToken');

    axios
      .post(`${BASE_URL}${url}`, dados, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        alert('Dados inseridos com sucesso!');
        reloadController();
      })
      .catch((e) => alert(e));
  };

  return (
    <C.Container>
      <C.Frame>
        <C.TopSection>
          <C.Title>Dados:</C.Title>
          <IoClose onClick={onClose} />
        </C.TopSection>

        <C.Form>
          {Object.keys(formData).map((key) => (
            <InputLabel
              key={key}
              label={key}
              type="text"
              onChange={(e) => handleChange(key, e.target.value)}
              placeholder=""
            />
          ))}
        </C.Form>

        <C.BottomSection>
          <C.SubmitBtn
            onClick={() => {
              postRequest(url, formData);
              onClose(formData);
            }}
          >
            Enviar
          </C.SubmitBtn>
        </C.BottomSection>
      </C.Frame>
    </C.Container>
  );
};

export default PopUpPost;
