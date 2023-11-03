import React, { useEffect, useState } from "react";
import * as C from "../../../../../components/View/PopUpStyles";

import { IoClose } from "react-icons/io5";

import InputLabel from "../../../../../components/Inputs/InputLabel";
import axios from "axios";
import { BASE_URL } from "../../../../../context/requests";
import InputSelect from "../../../../../components/Inputs/InputSelect";

const AddLab = ({ onClose, reloadController }) => {
  // Criando um estado de objeto com as propriedades do membro
  const [formData, setFormData] = useState({
    nome: "",
    capacidade: "",
    maquinas: "",
    descricao: "",
  });

  // Função para atualizar um valor específico no objeto de estado
  const handleChange = (property, value) => {
    setFormData({
      ...formData,
      [property]: value,
    });
  };

  const postRequest = (dados) => {
    const token = localStorage.getItem("authToken");

    console.log(dados);
    axios
      .post(`${BASE_URL}/labs`, dados, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        alert("Dados inseridos com sucesso!");
        reloadController();
      })
      .catch((e) => console.log(e));
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
            onChange={(e) => handleChange("nome", e.target.value)}
          />
          <InputLabel
            key={"capacidade"}
            label={"Capacidade"}
            type="number"
            onChange={(e) => handleChange("capacidade", e.target.value)}
          />
          <InputLabel
            key={"maquinas"}
            label={"Máquinas"}
            type="number"
            onChange={(e) => handleChange("maquinas", e.target.value)}
          />
          <InputLabel
            key={"descricao"}
            label={"Descrição"}
            type="text"
            onChange={(e) => handleChange("descricao", e.target.value)}
          />
        </C.Form>

        <C.BottomSection>
          <C.SubmitBtn
            onClick={() => {
              postRequest(formData);
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

export default AddLab;
