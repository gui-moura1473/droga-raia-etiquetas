import React from "react";
import styled from "styled-components";
import { CgCloseO } from "react-icons/cg";

const Header = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 1.35rem;
  }

  svg {
    font-size: 1.8rem;
    cursor: pointer;
    color: #ff0000;
  }
`;

const ModalHeader = ({ titulo, handleCloseModal }) => {
  return (
    <Header>
      <h2>{titulo}</h2>
      <CgCloseO onClick={handleCloseModal} />
    </Header>
  );
};

export default ModalHeader;
