import React, { useState } from "react";
import * as C from "../../../../../components/PopUpStyles";

import { IoClose } from "react-icons/io5";

import InputLabel from "../../../../../components/Inputs/InputLabel";
import axios from "axios";
import { BASE_URL } from "../../../../../context/requests";
import InputLabelLong from "../../../../../components/Inputs/InputLabelLong";
import InputBig from "../../../../../components/Inputs/InputBig";
import { CiEdit } from "react-icons/ci";

const EditLab = ({ memberData, onClose, reloadController, id }) => {
  const icon = <CiEdit />;
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
          <C.TitleSection>
            <C.Icon>{icon}</C.Icon>
            <div>
              <C.Title>Editar Laboratório</C.Title>
              <C.Subtitle>Insira os novos dados do laboratório</C.Subtitle>
            </div>
          </C.TitleSection>

          <C.IconClose>
            <IoClose onClick={onClose} />
          </C.IconClose>
        </C.TopSection>
        <C.Form>
          <InputLabelLong
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
          <InputBig
            key={"descricao"}
            label={"Descrição"}
            type="text"
            value={formData["descricao"]}
            onChange={(e) => handleChange("descricao", e.target.value)}
          />
        </C.Form>

        <C.BottomSection>
          <C.CancelBtn onClick={onClose}>Cancelar</C.CancelBtn>
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
