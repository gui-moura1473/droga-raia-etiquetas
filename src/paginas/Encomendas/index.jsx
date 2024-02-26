import React, { useState } from "react";
import ContainerPrincipal from "../../componentes/ContainerPrincipal";
import styled from "styled-components";
import { TituloPrincipal } from "../Posologia";
import InputGroupNome from "./InputGroupNome";
import InputGroupTelefone from "./InputGroupTelefone";
import CheckGroup from "./CheckGroup";
import InputText from "./InputText";

const FormEncomendas = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  width: 70%;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  height: 320px;
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

const Encomendas = () => {
  const [nomeCliente, setNomeCliente] = useState("");
  const [telefone, setTelefone] = useState("");
  const [ehResidencial, setEhResidencial] = useState(true);
  const [descricao, setDescricao] = useState("");

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
          <InputGroupTelefone
            label="Telefone"
            value={telefone}
            setValue={setTelefone}
            tipoTelefone={ehResidencial}
          />
          <CheckGroup
            label="Residencial"
            value={ehResidencial}
            setValue={setEhResidencial}
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
          <EtiquetaEncomendas>
            <h3>ENCOMENDA/RESERVA</h3>
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
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
            <span>5</span>
          </EtiquetaEncomendas>
        </BtnsContainer>
      </FormEncomendas>
    </ContainerPrincipal>
  );
};

export default Encomendas;
