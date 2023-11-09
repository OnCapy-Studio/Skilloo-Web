import React from "react";
import styled from "styled-components";
import * as C from "./style";

const SelectFilter = ({ name, options, unique, value, onChange }) => {
  return (
    <>
      <C.Label>{name[0].toUpperCase() + name.substring(1)}</C.Label>
      <C.SelectHorarios name={name} value={value} onChange={onChange}>
        <option value="">Selecione o {name}</option>
        {options
          ? options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.exib}
              </option>
            ))
          : null}

        {unique
          ? unique.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))
          : null}
      </C.SelectHorarios>
    </>
  );
};

export default SelectFilter;
