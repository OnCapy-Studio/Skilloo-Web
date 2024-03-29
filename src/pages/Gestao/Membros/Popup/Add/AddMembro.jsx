import React, { useState } from "react";
import * as C from "../../../../../components/PopUpStyles";

import { IoClose } from "react-icons/io5";

import InputLabel from "../../../../../components/Inputs/InputLabel";
import axios from "axios";
import { BASE_URL } from "../../../../../context/requests";
import InputSelect from "../../../../../components/Inputs/InputSelect";
import InputLabelLong from "../../../../../components/Inputs/InputLabelLong";
import { BsPersonFill } from "react-icons/bs";

const AddMembro = ({ onClose, reloadController }) => {
  // Criando um estado de objeto com as propriedades do membro
  const icon = <BsPersonFill />;
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    area: "Base_Comum",
    pontuacao: "",
    contrato: "CLT",
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
      .post(`${BASE_URL}/auth/signup`, dados, {
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
          <C.TitleSection>
            <C.Icon>{icon}</C.Icon>
            <div>
              <C.Title>Adicionar Professor</C.Title>
              <C.Subtitle>Insira os dados do novo professor</C.Subtitle>
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
          <InputLabelLong
            key={"email"}
            label={"Email"}
            type="text"
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <InputLabel
            key={"senha"}
            label={"Senha"}
            type="password"
            onChange={(e) => handleChange("senha", e.target.value)}
          />
          <InputSelect
            key={"area"}
            label={"Area"}
            options={["Base_Comum", "ADM", "DS", "Contabilidade"]}
            selected={"Base_Comum"}
            funcao={handleChange}
            campo={"area"}
          />
          <InputLabel
            key={"pontos"}
            label={"Pontos"}
            type="text"
            onChange={(e) => handleChange("pontuacao", e.target.value)}
          />
          <InputSelect
            key={"contrato"}
            label={"Contrato"}
            options={["CLT", "Estadual"]}
            selected={"CLT"}
            funcao={handleChange}
            campo={"contrato"}
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

export default AddMembro;
