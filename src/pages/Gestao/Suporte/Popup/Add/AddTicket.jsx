import React, { useState } from "react";
import * as C from "../../../../../components/PopUpStyles";

import { IoClose } from "react-icons/io5";

import axios from "axios";
import { BASE_URL } from "../../../../../context/requests";
import InputSelect from "../../../../../components/Inputs/InputSelect";
import InputLabelLong from "../../../../../components/Inputs/InputLabelLong";
import InputBig from "../../../../../components/Inputs/InputBig";
import { MdReportProblem } from "react-icons/md";

const AddTicket = ({ onClose, reloadController }) => {
  const icon = <MdReportProblem />;
  // Criando um estado de objeto com as propriedades do membro
  const [formData, setFormData] = useState({
    titulo: "",
    lab: "Lab 1",
    descricao: "",
    status: "Para_Resolver",
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
      .post(`${BASE_URL}/suporte`, dados, {
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
              <C.Title>Reportar problema</C.Title>
              <C.Subtitle>Descreva o problema encontrado na unidade</C.Subtitle>
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
            onChange={(e) => handleChange("titulo", e.target.value)}
          />

          <InputSelect
            key={"lab"}
            label={"Lab"}
            options={["Lab 1", "Lab 2", "Lab 3", "Lab Audiovisual"]}
            selected={"Laboratório 1"}
            funcao={handleChange}
            campo={"lab"}
          />

          <InputSelect
            key={"status"}
            label={"Status"}
            options={["Para_Resolver", "Em_Andamento", "Resolvido"]}
            selected={"Para_Resolver"}
            funcao={handleChange}
            campo={"status"}
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

export default AddTicket;
