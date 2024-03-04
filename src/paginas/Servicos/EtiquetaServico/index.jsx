import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import styled from "styled-components";
import NormalBtn from "../../../componentes/NormalBtn";
import { formatMoney } from "../../../utils/formatValues";
import logoRaia from "../../../assets/images/droga-raia-logo2.png";

const Etiqueta = styled.div`
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

const EtiquetaServico = ({ servico }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrintEvent = (event) => {
    event.preventDefault();
    handlePrint();
  };
  return (
    <>
      <Etiqueta ref={componentRef} className="servico">
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
              <td>{servico.name}</td>
              <td>{servico.ean}</td>
              <td>{formatMoney(servico.price)}</td>
            </tr>
          </tbody>
        </table>
        <img
          src={servico.eanDataImgStr}
          style={{ width: "158px", height: "62px" }}
        />
        <span>{servico.ean}</span>
      </Etiqueta>
      <NormalBtn onClick={handlePrintEvent}>Imprimir</NormalBtn>
    </>
  );
};

export default EtiquetaServico;
