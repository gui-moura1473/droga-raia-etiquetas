import React from "react";
import styled from "styled-components";

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

  textarea {
    padding: 28px 12px 6px;
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
    outline: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    font-size: 1.1rem;
    width: 100%;
    resize: vertical;
  }

  textarea:focus {
    border: 1px solid #a4b1ff;
    box-shadow: 0px 0px 1px 3px #bed8ff;
  }
`;

const InputText = ({ label, value, setValue }) => {
  return (
    <Wrapper>
      <label>{label}</label>
      <textarea
        rows="2"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </Wrapper>
  );
};

export default InputText;
