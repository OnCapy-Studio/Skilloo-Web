import React, { useEffect, useState } from "react";
import * as C from "../PopUpStyles";

import { IoClose } from "react-icons/io5";

import InputLabel from "../Inputs/InputLabel";
import axios from "axios";
import { BASE_URL } from "../../context/requests";
import { Navigate } from "react-router-dom";

const PopUpEdit = ({ memberData, onClose, reloadController, url, id }) => {
  // Criando um estado de objeto com as propriedades do membro
  const [formData, setFormData] = useState({ ...memberData });

  // Função para atualizar um valor específico no objeto de estado
  const handleChange = (property, value) => {
    setFormData({
      ...formData,
      [property]: value,
    });
  };

  const updateRequest = (url, id, dados) => {
    const token = localStorage.getItem("authToken");

    axios
      .put(`${BASE_URL}${url}/${id}`, dados, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        alert("Dados atualizados com sucesso!");
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
              value={formData[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              placeholder=""
            />
          ))}
        </C.Form>

        <C.BottomSection>
          <C.SubmitBtn
            onClick={() => {
              updateRequest(url, id, formData);
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

export default PopUpEdit;
