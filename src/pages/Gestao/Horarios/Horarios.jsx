import React, { useState } from "react";
import FilterSchedule from "../../../components/Filter/FilterSchedule";
import ShowSchedule from "../../../components/Filter/ShowSchedule";
import * as C from "./styles";

const Horarios = () => {
  const [filteredData, setFilteredData] = useState([]); // Estado para armazenar os dados filtrados

  const handleDataFiltered = (data) => {
    setFilteredData(data);
  };

  return (
    <C.Container>
      <FilterSchedule onDataFiltered={handleDataFiltered} />
      <ShowSchedule filteredData={filteredData} />
    </C.Container>
  );
};

export default Horarios;
