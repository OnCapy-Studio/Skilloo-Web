import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../context/requests";
import SelectFilter from "./SelectFilter";
import styled from "styled-components";

const FilterSchedule = ({ onDataFiltered }) => {
  const dias = [
    { value: "MONDAY", exib: "Segunda-Feira" },
    { value: "TUESDAY", exib: "Terça-Feira" },
    { value: "WEDNESDAY", exib: "Quarta-Feira" },
    { value: "THURSDAY", exib: "Quinta-Feira" },
    { value: "FRIDAY", exib: "Sexta-Feira" },
  ];

  const [filterApplied, setFilterApplied] = useState(false);

  const [filter, setFilter] = useState({
    dia: "",
    periodo: "",
    turma: "",
  });

  const applyFilter = () => {
    if (filter.dia && filter.periodo && filter.turma) {
      const filteredData = apiResponse.content.filter((item) => {
        return (
          item.dia === filter.dia &&
          item.turma.periodo === filter.periodo &&
          item.turma.nome === filter.turma
        );
      });
      onDataFiltered(filteredData);
      setFilterApplied(true);
    } else {
      alert("Por favor, preencha todos os campos de filtro.");
    }
  };

  const clearFilter = () => {
    setFilter({
      dia: "",
      periodo: "",
      turma: "",
    });

    setApiResponse({ content: [] });
    setFilterApplied(false);
  };

  const [weekDay, setWeekDay] = useState();
  const [apiResponse, setApiResponse] = useState({ content: [] });

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (weekDay) {
      axios
        .get(`${BASE_URL}/horario/9/${weekDay}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setApiResponse(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar dados da API", error);
        });
    }
  }, [weekDay]);

  const getUniquePeriodos = () => {
    const uniquePeriods = new Set();
    apiResponse.content.forEach((item) => {
      uniquePeriods.add(item.turma.periodo);
    });
    return Array.from(uniquePeriods);
  };

  const getUniqueTurmas = () => {
    const uniqueTurmas = new Set();
    apiResponse.content.forEach((item) => {
      uniqueTurmas.add(item.turma.nome);
    });
    return Array.from(uniqueTurmas);
  };

  const Container = styled.div`
    width: 500px;
    height: 600px;
  `;

  const Title = styled.h1`
    font-size: 28px;
    font-weight: 700;
    color: #6a5fb6;
  `;

  const Subtitle = styled.p`
    font-size: 16px;
    font-weight: 400;
    margin: 10px 0px 30px 0px;
    color: #838383;
  `;

  const BtFilter = styled.button`
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: #6a5fb6;
    color: #fff;
    font-size: 0.9em;
    width: 150px;
    height: 40px;
    font-weight: 600;
    cursor: pointer;
    transition: all 1s;
    margin: 20px 20px 0px 0px;

    &:hover {
      background-color: #ac9fff;
      transform: scale(1.025);
    }
  `;

  const BtClear = styled.button`
    border-radius: 5px;
    border: 1px solid #6a5fb6;
    outline: none;
    background-color: #fff;
    color: #6a5fb6;
    font-size: 0.9em;
    width: 150px;
    height: 40px;
    font-weight: 600;
    cursor: pointer;
    transition: all 1s;

    &:hover {
      color: red;
      border: 1px solid red;
      transform: scale(1.025);
    }
  `;

  return (
    <Container>
      <div>
        <Title>Grade de Horários</Title>
        <Subtitle>
          Selecione o dia, o período e a turma para visualizar o horário de
          aulas.
        </Subtitle>
      </div>
      <div>
        <SelectFilter
          name="dia"
          options={dias}
          value={filter.dia}
          onChange={(e) => {
            setFilter({ ...filter, dia: e.target.value });
            setWeekDay(e.target.value);
          }}
        />

        <SelectFilter
          name="periodo"
          unique={getUniquePeriodos()}
          value={filter.periodo}
          onChange={(e) => {
            setFilter({ ...filter, periodo: e.target.value });
          }}
        />

        <SelectFilter
          name="turma"
          unique={getUniqueTurmas()}
          value={filter.turma}
          onChange={(e) => {
            setFilter({ ...filter, turma: e.target.value });
          }}
        />
      </div>

      <div>
        <BtFilter onClick={applyFilter}>Aplicar Filtro</BtFilter>
        <BtClear onClick={clearFilter}>Limpar Filtro</BtClear>
      </div>
    </Container>
  );
};

export default FilterSchedule;
