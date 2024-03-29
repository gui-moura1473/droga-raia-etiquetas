import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

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

  input {
    padding: 4px 12px 4px;
    border: 1px solid #ced4da;
    border-radius: 0 0.5rem 0.5rem 0;
    outline: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    font-size: 1.1rem;
    flex-grow: 1;
    height: 3.5rem;
  }

  input:focus {
    border: 1px solid #a4b1ff;
    box-shadow: 0px 0px 1px 3px #bed8ff;
  }
`;

const InputGroupNome = ({ label, value, setValue, width }) => {
  return (
    <InputContainer>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value.toUpperCase())}
        width={width}
      />
    </InputContainer>
  );
};

export default InputGroupNome;
