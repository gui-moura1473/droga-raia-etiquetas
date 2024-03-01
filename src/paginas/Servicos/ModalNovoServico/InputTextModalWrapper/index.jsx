import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  font-size: 1.15rem;
  flex: 1;

  label {
    position: absolute;
    left: 12px;
    top: 2px;
    color: #006c7f;
  }

  input {
    padding: 28px 12px 6px;
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
    outline: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    font-size: 1.1rem;
    width: 100%;
    height: 4rem;
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input:focus {
    border: 1px solid #a4b1ff;
    box-shadow: 0px 0px 1px 3px #bed8ff;
  }
`;

const InputTextModalWrapper = ({ label, children }) => {
  return (
    <Wrapper>
      <label>{label}</label>
      {children}
    </Wrapper>
  );
};

export default InputTextModalWrapper;
