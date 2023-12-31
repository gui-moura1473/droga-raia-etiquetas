import React, { useRef, useState } from "react";
import { styled } from "styled-components";

import { TituloPrincipal } from "../Posologia";
import ContainerPrincipal from "../../componentes/ContainerPrincipal";
import InputGroup from "./InputGroup";
import SelectGroup from "./SelectGroup";
import { servicos } from "../../data/lojas";

import logoRaia from "../../assets/images/droga-raia-logo2.png";
import NormalBtn from "../../componentes/NormalBtn";
import { useReactToPrint } from "react-to-print";

const InputsWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
`;

const EtiquetaServico = styled.div`
  width: 320px;
  border: 2px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 1rem;

  h3 {
    background-color: #000;
    border: 1px solid #000;
    color: #fff;
    padding: 1rem 4rem;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    text-align: center;
    width: 100%;
  }

  table {
    margin: 0.5rem;
    text-align: center;
    border: 1px solid #000;
    width: 95%;
    border-collapse: collapse;
  }

  th:first-child {
    width: 50%;
  }

  th {
    background-color: #000;
    color: #fff;
    font-weight: 500;
    padding-block: 0.3rem;
    width: 25%;
    font-size: 1.1rem;
  }

  td {
    padding-block: 0.7rem;
    padding-inline: 0.2rem;
    font-size: 1.1rem;
  }

  span {
    margin-bottom: 0.7rem;
  }
`;

const Servicos = () => {
  const [servicoSelecionado, setServicoSelecionado] = useState(0);
  const [codigoServico, setCodigoServico] = useState(servicos[0].codigo);
  const [precoServico, setPrecoServico] = useState(servicos[0].preco);

  const handleChangeServico = (value) => {
    setServicoSelecionado(value);
    setCodigoServico(servicos[value].codigo);
    setPrecoServico(servicos[value].preco);
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrintEvent = (event) => {
    event.preventDefault();
    handlePrint();
  };

  return (
    <ContainerPrincipal>
      <TituloPrincipal>Serviços Farmacêuticos</TituloPrincipal>
      <InputsWrapper>
        <SelectGroup
          handleChange={handleChangeServico}
          value={servicoSelecionado}
          servicos={servicos}
        />
        <InputGroup label="Código" value={codigoServico} />
        <InputGroup label="Preço" value={precoServico} />
      </InputsWrapper>
      <EtiquetaServico ref={componentRef} className="servico">
        <h3>AUTORIZAÇÃO DE SERVIÇOS</h3>
        <img src={logoRaia} width="100px" />
        <table>
          <thead>
            <tr>
              <th>SERVIÇO</th>
              <th>CÓDIGO</th>
              <th>VALOR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{servicos[servicoSelecionado].servico}</td>
              <td>{codigoServico}</td>
              <td>{precoServico}</td>
            </tr>
          </tbody>
        </table>
        <img src={`./assets/ean/${codigoServico}.png`} />
        <span>{codigoServico}</span>
      </EtiquetaServico>
      <NormalBtn onClick={handlePrintEvent}>Imprimir</NormalBtn>
    </ContainerPrincipal>
  );
};

export default Servicos;
