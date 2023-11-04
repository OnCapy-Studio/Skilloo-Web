import React, { useState } from "react";
import * as C from "../../../../../components/PopUpStyles";

import { IoClose } from "react-icons/io5";

import axios from "axios";
import { BASE_URL } from "../../../../../context/requests";
import InputSelect from "../../../../../components/Inputs/InputSelect";
import InputLabelLong from "../../../../../components/Inputs/InputLabelLong";
import { CiEdit } from "react-icons/ci";

const EditTurma = ({ memberData, onClose, reloadController, id }) => {
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
      .put(`${BASE_URL}/turmas/${id}`, dados, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        alert("Dados atualizados com sucesso!");
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
              <C.Title>Atualizar Turma</C.Title>
              <C.Subtitle>Insira os novos dados da turma</C.Subtitle>
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
            key={"periodo"}
            label={"Período"}
            options={["Manha", "Tarde", "Noite"]}
            selected={formData["periodo"]}
            funcao={handleChange}
            campo={"periodo"}
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

export default EditTurma;
