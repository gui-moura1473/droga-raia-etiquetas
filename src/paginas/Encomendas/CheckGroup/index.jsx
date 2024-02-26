import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  input {
    width: 15px;
    height: 15px;
  }

  label {
    font-size: 1.1rem;
  }
`;

function CheckGroup({ label, value, setValue }) {
  return (
    <CheckboxContainer>
      <input
        type="checkbox"
        checked={value}
        onChange={() => setValue((prevValue) => !prevValue)}
      />
      <label>{label}</label>
    </CheckboxContainer>
  );
}

export default CheckGroup;
