import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import { FaPlus } from "react-icons/fa";

import { TituloPrincipal } from "../Posologia";
import ContainerPrincipal from "../../componentes/ContainerPrincipal";
import InputGroup from "./InputGroup";
import SelectGroup from "./SelectGroup";

import logoRaia from "../../assets/images/droga-raia-logo2.png";
import NormalBtn from "../../componentes/NormalBtn";
import { useReactToPrint } from "react-to-print";

import { formatMoney } from "../../utils/formatMoney";
import { useServicos } from "../../hooks/useServicos";
import { Toaster } from "react-hot-toast";
import ModalNovoServico from "./ModalNovoServico";

const InputsWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

const AdicionarBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  padding: 6px 12px;

  background: var(--azul-botao);
  color: #fff;
  font-family: inherit;
  font-size: 1.15rem;
  font-weight: 400;

  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: var(--azul-botao-hover);
  }
`;

const Servicos = () => {
  const { data: servicos, isLoading, isError } = useServicos();

  const [adicionaModalIsOpen, setadicionaModalIsOpen] = useState(false);
  const [servicoSelecionado, setServicoSelecionado] = useState(0);

  const handleChangeServico = (value) => {
    setServicoSelecionado(value);
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrintEvent = (event) => {
    event.preventDefault();
    handlePrint();
  };

  const handleBtnAdiciona = (event) => {
    event.preventDefault();
    setadicionaModalIsOpen(true);
  };

  return (
    <ContainerPrincipal>
      <TituloPrincipal>Serviços Farmacêuticos</TituloPrincipal>
      {isLoading && <p> Carregando </p>}
      {!isLoading && !isError && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <InputsWrapper>
            <SelectGroup
              handleChange={handleChangeServico}
              value={servicoSelecionado}
              servicos={servicos}
            />
            <InputGroup
              label="Código"
              value={servicos[servicoSelecionado].ean}
            />
            <InputGroup
              label="Preço"
              value={formatMoney(servicos[servicoSelecionado].price)}
            />
            <AdicionarBtn onClick={handleBtnAdiciona}>
              <FaPlus />
            </AdicionarBtn>
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
                  <td>{servicos[servicoSelecionado].name}</td>
                  <td>{servicos[servicoSelecionado].ean}</td>
                  <td>{formatMoney(servicos[servicoSelecionado].price)}</td>
                </tr>
              </tbody>
            </table>
            <img
              src={servicos[servicoSelecionado].eanDataImgStr}
              style={{ width: "158px", height: "62px" }}
            />
            <span>{servicos[servicoSelecionado].ean}</span>
          </EtiquetaServico>
          <NormalBtn onClick={handlePrintEvent}>Imprimir</NormalBtn>
          {adicionaModalIsOpen && (
            <ModalNovoServico handleCloseModal={setadicionaModalIsOpen} />
          )}
        </div>
      )}

      <Toaster />
    </ContainerPrincipal>
  );
};

export default Servicos;
