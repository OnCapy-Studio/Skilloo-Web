import React, { useEffect, useState } from "react";
import * as C from "../../../../../components/View/PopUpStyles";

import { IoClose } from "react-icons/io5";

import InputLabel from "../../../../../components/Inputs/InputLabel";
import axios from "axios";
import { BASE_URL } from "../../../../../context/requests";
import InputSelect from "../../../../../components/Inputs/InputSelect";

const EditTurma = ({ memberData, onClose, reloadController, id }) => {
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
      .put(`${BASE_URL}/turmas/${id}`, dados, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        alert("Dados atualizados com sucesso!");
        reloadController();
      })
      .catch((e) => console.log(e));
  };

  console.log(formData);

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
          <InputSelect
            key={"periodo"}
            label={"Período"}
            options={["Manha", "Tarde", "Noite"]}
            selected={formData["periodo"]}
            funcao={handleChange}
            campo={"periodo"}
          />
          <InputSelect
            key={"inicio"}
            label={"Início"}
            options={["2021", "2022", "2023", "2024", "2025", "2026"]}
            selected={formData["inicio"]}
            funcao={handleChange}
            campo={"inicio"}
          />
          <InputSelect
            key={"formacao"}
            label={"Formação"}
            options={["2023", "2024", "2025", "2026", "2027", "2028"]}
            selected={formData["formacao"]}
            funcao={handleChange}
            campo={"formacao"}
          />
          <InputSelect
            key={"avaliacao"}
            label={"Avaliação"}
            selected={formData["avaliacao"]}
            options={["1", "2", "3", "4", "5"]}
            funcao={handleChange}
            campo={"avaliacao"}
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

export default EditTurma;
