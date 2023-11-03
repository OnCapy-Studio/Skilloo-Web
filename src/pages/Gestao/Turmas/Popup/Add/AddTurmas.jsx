import React, { useEffect, useState } from "react";
import * as C from "../../../../../components/View/PopUpStyles";

import { IoClose } from "react-icons/io5";

import InputLabel from "../../../../../components/Inputs/InputLabel";
import axios from "axios";
import { BASE_URL } from "../../../../../context/requests";
import InputSelect from "../../../../../components/Inputs/InputSelect";

const AddTurma = ({ onClose, reloadController }) => {
  // Criando um estado de objeto com as propriedades do membro
  const [formData, setFormData] = useState({
    nome: "",
    periodo: "Manha",
    inicio: "2023",
    formacao: "2025",
    avaliacao: "5.0",
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
      .post(`${BASE_URL}/turmas`, dados, {
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
          <InputSelect
            key={"periodo"}
            label={"Período"}
            options={["Manha", "Tarde", "Noite"]}
            selected={"Manha"}
            funcao={handleChange}
            campo={"periodo"}
          />
          <InputSelect
            key={"inicio"}
            label={"Início"}
            options={["2021", "2022", "2023", "2024", "2025", "2026"]}
            selected={"2023"}
            funcao={handleChange}
            campo={"inicio"}
          />
          <InputSelect
            key={"formacao"}
            label={"Formação"}
            options={["2023", "2024", "2025", "2026", "2027", "2028"]}
            selected={"2025"}
            funcao={handleChange}
            campo={"formacao"}
          />
          <InputSelect
            key={"avaliacao"}
            label={"Avaliação"}
            options={["1", "2", "3", "4", "5"]}
            selected={"5"}
            funcao={handleChange}
            campo={"avaliacao"}
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

export default AddTurma;
