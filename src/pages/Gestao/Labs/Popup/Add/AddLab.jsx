import React, { useState } from "react";
import * as C from "../../../../../components/PopUpStyles";

import { IoClose } from "react-icons/io5";

import InputLabel from "../../../../../components/Inputs/InputLabel";
import axios from "axios";
import { BASE_URL } from "../../../../../context/requests";
import InputLabelLong from "../../../../../components/Inputs/InputLabelLong";
import InputBig from "../../../../../components/Inputs/InputBig";
import { PiDesktopTowerFill } from "react-icons/pi";

const AddLab = ({ onClose, reloadController }) => {
  const icon = <PiDesktopTowerFill />;
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
      .catch((e) => alert("Error: " + e));
  };

  return (
    <C.Container>
      <C.Frame>
        <C.TopSection>
          <C.TitleSection>
            <C.Icon>{icon}</C.Icon>
            <div>
              <C.Title>Adicionar Laboratório</C.Title>
              <C.Subtitle>Insira os dados do novo laboratório</C.Subtitle>
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
          <InputBig
            key={"descricao"}
            label={"Descrição"}
            type="text"
            onChange={(e) => handleChange("descricao", e.target.value)}
          />
        </C.Form>

        <C.BottomSection>
          <C.CancelBtn onClick={onClose}>Cancelar</C.CancelBtn>
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
