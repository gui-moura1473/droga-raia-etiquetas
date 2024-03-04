import React from "react";
import styled from "styled-components";
import { Botao } from "../../NormalBtn";

const Footer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #ccc;
  padding-top: 1rem;
  padding-inline: 1.5rem;
`;

const SubmitButton = styled(Botao)`
  width: 100%;
  height: 46px;
`;

const ModalFooter = ({ btnText }) => {
  return (
    <Footer>
      <SubmitButton type="submit">{btnText}</SubmitButton>
    </Footer>
  );
};

export default ModalFooter;
