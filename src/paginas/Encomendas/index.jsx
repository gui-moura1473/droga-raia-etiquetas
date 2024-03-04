import React, { useEffect, useRef, useState } from "react";
import ContainerPrincipal from "../../componentes/ContainerPrincipal";
import styled from "styled-components";
import { TituloPrincipal } from "../Posologia";
import InputGroupNome from "./InputGroupNome";
import InputGroupTelefone from "./InputGroupTelefone";
import InputText from "./InputText";
import logoRaia from "../../assets/images/droga-raia-logo2.png";
import { FaUser } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import InputCpf from "./InputCPF";
import { formatedActualDate } from "../../utils/formatValues";
import { useReactToPrint } from "react-to-print";
import NormalBtn from "../../componentes/NormalBtn";

const FormEncomendas = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  width: 80%;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

const BtnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  width: 100%;

  padding-top: 1.2rem;
  border-top: 1px solid #ccc;
`;

const EtiquetaEncomendas = styled.div`
  width: 320px;
  border: 2px solid #000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-block: 1rem;
  font-size: 1.1rem;

  img {
    align-self: center;
    margin: 0.5rem;
  }

  h3 {
    background-color: #000;
    border: 1px solid #000;
    color: #fff;
    padding: 0.3rem 4rem;
    font-size: 1.3rem;
    text-align: center;
    width: 100%;
  }

  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .divider-box {
    padding: 1rem;
    border-block: 1px solid #000;
    width: 100%;

    .divisor {
      background-color: #000000;
      justify-content: self;
      margin-block: 1rem;
      margin-inline: auto;
      height: 2px;
      width: 95%;
      align-self: center;
    }

    .dados-footer {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }

    .comentarios {
      text-align: justify;
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }
  }

  .dados-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    svg {
      transform: scale(1.5);
    }
  }
`;

const Encomendas = () => {
  const [nomeCliente, setNomeCliente] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    setData(formatedActualDate());
  }, []);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrintEvent = (event) => {
    event.preventDefault();
    handlePrint();
    setNomeCliente("");
    setTelefone("");
    setCpf("");
    setDescricao("");
  };

  return (
    <ContainerPrincipal>
      <TituloPrincipal>Etiquetas de Encomendas</TituloPrincipal>
      <FormEncomendas>
        <RowWrapper>
          <InputGroupNome
            label="Nome Cliente"
            value={nomeCliente}
            setValue={setNomeCliente}
          />
          <InputCpf label="CPF" value={cpf} setValue={setCpf} />
          <InputGroupTelefone
            label="Telefone"
            value={telefone}
            setValue={setTelefone}
          />
        </RowWrapper>
        <RowWrapper>
          <InputText
            label="Contato/Descrição"
            value={descricao}
            setValue={setDescricao}
          />
        </RowWrapper>
        <BtnsContainer>
          <EtiquetaEncomendas ref={componentRef} className="servico">
            <h3>ENCOMENDA/RESERVA</h3>
            <div className="divider-box">
              <h4>Dados do cliente:</h4>
              <div className="dados-wrapper">
                <FaUser />
                <div className="dados-col">
                  <p style={{ fontSize: "1.2rem" }}>
                    {nomeCliente.toUpperCase()}
                  </p>
                  <p>CPF: {cpf}</p>
                  <p>{telefone}</p>
                </div>
              </div>
              <div className="divisor"></div>
              <h4>Cometários/Descrição:</h4>
              <p className="comentarios">{descricao}</p>
              <div className="divisor"></div>
              <div className="dados-footer">
                <FaRegCalendarCheck />
                <p>Reservado em {data}</p>
              </div>
            </div>
          </EtiquetaEncomendas>
        </BtnsContainer>
        <NormalBtn onClick={handlePrintEvent}>Imprimir</NormalBtn>
      </FormEncomendas>
    </ContainerPrincipal>
  );
};

export default Encomendas;
