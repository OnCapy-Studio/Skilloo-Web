import React, { useState } from "react";
import * as C from "../../../../../components/PopUpStyles";

import { IoClose } from "react-icons/io5";

import axios from "axios";
import { BASE_URL } from "../../../../../context/requests";
import InputSelect from "../../../../../components/Inputs/InputSelect";
import InputLabelLong from "../../../../../components/Inputs/InputLabelLong";

import { BiSolidBook } from "react-icons/bi";
import PopUpSuccess from "../../../../../components/PopUpResponses/PopUpSuccess/PopUpSuccess";

const AddMateria = ({ onClose, reloadController }) => {
  const icon = <BiSolidBook />;

  // Criando um estado de objeto com as propriedades do membro
  const [formData, setFormData] = useState({
    nome: "",
    area: "Base_Comum",
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
      .post(`${BASE_URL}/materias`, dados, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        alert("Dados Inseridos com Sucesso!");
        reloadController();
      })
      .catch((e) => alert("Erro: " + e));
  };

  return (
    <C.Container>
      <C.Frame>
        <C.TopSection>
          <C.TitleSection>
            <C.Icon>{icon}</C.Icon>
            <div>
              <C.Title>Adicionar Matéria</C.Title>
              <C.Subtitle>Insira os dados da nova matéria</C.Subtitle>
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
          <InputSelect
            key={"area"}
            label={"Area"}
            options={["Base_Comum", "ADM", "DS", "Contabilidade"]}
            selected={"Base_Comum"}
            funcao={handleChange}
            campo={"area"}
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

export default AddMateria;
