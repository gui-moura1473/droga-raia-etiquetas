import React from "react";
import styled from "styled-components";

const BgModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.form`
  width: 30%;
  padding: 16px;
  background-color: #f2f2f2;
  border-radius: 8px;
`;

const ModalRoot = ({ children, handleSubmit }) => {
  return (
    <BgModal>
      <ModalContainer onSubmit={handleSubmit}>{children}</ModalContainer>
    </BgModal>
  );
};

export default ModalRoot;
