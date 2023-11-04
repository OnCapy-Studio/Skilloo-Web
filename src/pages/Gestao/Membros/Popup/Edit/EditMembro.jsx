import React, { useState } from "react";
import * as C from "../../../../../components/PopUpStyles";

import { IoClose } from "react-icons/io5";

import InputLabel from "../../../../../components/Inputs/InputLabel";
import axios from "axios";
import { BASE_URL } from "../../../../../context/requests";
import InputSelect from "../../../../../components/Inputs/InputSelect";
import InputLabelLong from "../../../../../components/Inputs/InputLabelLong";
import { CiEdit } from "react-icons/ci";

const EditMembro = ({ memberData, onClose, reloadController, id }) => {
  // Criando um estado de objeto com as propriedades do membro
  const [formData, setFormData] = useState({ ...memberData });
  const icon = <CiEdit />;

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
      .put(`${BASE_URL}/professores/${id}`, dados, {
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
              <C.Title>Editar Professor</C.Title>
              <C.Subtitle>Insira os novos dados do professor</C.Subtitle>
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
          <InputLabelLong
            key={"email"}
            label={"Email"}
            type="text"
            value={formData["email"]}
            onChange={(e) => handleChange("email", e.target.value)}
          />

          <InputSelect
            key={"area"}
            label={"Area"}
            options={["Base_Comum", "ADM", "DS", "Contabilidade"]}
            selected={formData["area"]}
            funcao={handleChange}
            campo={"area"}
          />
          <InputLabel
            key={"pontos"}
            label={"Pontos"}
            type="text"
            value={formData["pontuacao"]}
            onChange={(e) => handleChange("pontuacao", e.target.value)}
          />

          <InputSelect
            key={"contrato"}
            label={"Contrato"}
            options={["CLT", "Estadual"]}
            selected={formData["contrato"]}
            funcao={handleChange}
            campo={"contrato"}
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

export default EditMembro;
