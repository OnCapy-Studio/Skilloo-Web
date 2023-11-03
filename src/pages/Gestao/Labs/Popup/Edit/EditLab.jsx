import React, { useEffect, useState } from "react";
import * as C from "../../../../../components/View/PopUpStyles";

import { IoClose } from "react-icons/io5";

import InputLabel from "../../../../../components/Inputs/InputLabel";
import axios from "axios";
import { BASE_URL } from "../../../../../context/requests";
import InputSelect from "../../../../../components/Inputs/InputSelect";

const EditLab = ({ memberData, onClose, reloadController, id }) => {
  // Criando um estado de objeto com as propriedades do membro
  const [formData, setFormData] = useState({ ...memberData });

  // Função para atualizar um valor específico no objeto de estado
  const handleChange = (property, value) => {
    setFormData({
      ...formData,
      [property]: value,
    });
  };

  const updateRequest = (id, dados) => {
    const token = localStorage.getItem("authToken");

    axios
      .put(`${BASE_URL}/labs/${id}`, dados, {
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
          <InputLabel
            key={"nome"}
            label={"Nome"}
            type="text"
            value={formData["nome"]}
            onChange={(e) => handleChange("nome", e.target.value)}
          />
          <InputLabel
            key={"capacidade"}
            label={"Capacidade"}
            type="number"
            value={formData["capacidade"]}
            onChange={(e) => handleChange("capacidade", e.target.value)}
          />
          <InputLabel
            key={"maquinas"}
            label={"Máquinas"}
            type="number"
            value={formData["maquinas"]}
            onChange={(e) => handleChange("maquinas", e.target.value)}
          />
          <InputLabel
            key={"descricao"}
            label={"Descrição"}
            type="text"
            value={formData["descricao"]}
            onChange={(e) => handleChange("descricao", e.target.value)}
          />
        </C.Form>

        <C.BottomSection>
          <C.SubmitBtn
            onClick={() => {
              console.log(formData);
              updateRequest(id, formData);
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

export default EditLab;
