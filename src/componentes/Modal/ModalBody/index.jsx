import React from "react";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 2rem;
  width: 100%;
  gap: 1rem;

  > div {
    display: flex;
    align-items: center;
    padding-inline: 1.5rem;
    gap: 1rem;
  }
`;

const ModalBody = ({ children }) => {
  return <Body>{children}</Body>;
};

export default ModalBody;
