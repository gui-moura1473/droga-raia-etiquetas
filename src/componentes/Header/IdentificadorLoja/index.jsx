import { styled } from "styled-components";

import { SlLocationPin } from "react-icons/sl";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

const IdentificadorLojaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  margin-right: 3rem;

  svg {
    color: #fff;
    font-size: 1.4rem;
  }

  span {
    font-weight: 700;
  }

  p {
    margin: 0;
    color: #e6e6e6;
    font-size: 1.1rem;
  }
`;

const IndentificadorLoja = () => {
  const { filial } = useContext(AuthContext);

  return (
    <IdentificadorLojaWrapper>
      <SlLocationPin />
      <p>
        <span>Filial:</span> {filial.filialNumber || filial.filial} -{" "}
        {filial.name || filial.loja}
      </p>
    </IdentificadorLojaWrapper>
  );
};

export default IndentificadorLoja;
