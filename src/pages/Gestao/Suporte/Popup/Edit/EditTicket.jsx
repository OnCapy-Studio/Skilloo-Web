import React, { useState } from "react";
import * as C from "../../../../../components/PopUpStyles";

import { IoClose } from "react-icons/io5";

import axios from "axios";
import { BASE_URL } from "../../../../../context/requests";
import InputSelect from "../../../../../components/Inputs/InputSelect";
import InputLabelLong from "../../../../../components/Inputs/InputLabelLong";
import InputBig from "../../../../../components/Inputs/InputBig";
import { CiEdit } from "react-icons/ci";

const EditTicket = ({ memberData, onClose, reloadController, id }) => {
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
      .put(`${BASE_URL}/suporte/${id}`, dados, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        alert("Dados atualizados com sucesso!");
        reloadController();
      })
      .catch((e) => alert("Error : " + e));
  };

  return (
    <C.Container>
      <C.Frame>
        <C.TopSection>
          <C.TitleSection>
            <C.Icon>{icon}</C.Icon>
            <div>
              <C.Title>Editar Problema</C.Title>
              <C.Subtitle>Insira os novos dados do relato</C.Subtitle>
            </div>
          </C.TitleSection>

          <C.IconClose>
            <IoClose onClick={onClose} />
          </C.IconClose>
        </C.TopSection>

        <C.Form>
          <InputLabelLong
            key={"titulo"}
            label={"Título"}
            type="text"
            value={formData["titulo"]}
            onChange={(e) => handleChange("titulo", e.target.value)}
          />
          <InputSelect
            key={"lab"}
            label={"Lab"}
            options={["Lab 1", "Lab 2", "Lab 3", "Lab Audiovisual"]}
            selected={formData["lab"]}
            funcao={handleChange}
            campo={"lab"}
          />
          <InputSelect
            key={"status"}
            label={"Status"}
            options={["Para_Resolver", "Em_Andamento", "Resolvido"]}
            selected={formData["status"]}
            funcao={handleChange}
            campo={"status"}
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

export default EditTicket;
