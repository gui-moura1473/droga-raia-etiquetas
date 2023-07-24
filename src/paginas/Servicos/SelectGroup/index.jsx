import React from "react";
import { styled } from "styled-components";
import downArrow from "../../../assets/images/down-icon.svg";

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;

  label {
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    background-color: #006c7f;
    color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.5rem 0 0 0.5rem;
    font-weight: 400;
  }

  select {
    padding: 4px 12px 4px;
    border: 1px solid #ced4da;
    border-radius: 0 0.5rem 0.5rem 0;
    outline: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    background-image: url(${downArrow});
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    font-size: 1rem;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 380px;
    height: 3.5rem;
  }

  select:focus {
    border: 1px solid #a4b1ff;
    box-shadow: 0px 0px 1px 3px #bed8ff;
  }
`;

const SelectGroup = ({ handleChange, value, servicos }) => {
  return (
    <InputContainer>
      <label>Serviços</label>
      <select value={value} onChange={(e) => handleChange(e.target.value)}>
        {servicos.map((servico, index) => (
          <option value={index} key={servico.codigo}>
            {servico.servico}
          </option>
        ))}
      </select>
    </InputContainer>
  );
};

export default SelectGroup;
