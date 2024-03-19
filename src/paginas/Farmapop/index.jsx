import React, { useContext, useRef } from "react";
import ContainerPrincipal from "../../componentes/ContainerPrincipal";
import logoRaia from "../../assets/images/logo-raia.png";
import { styled } from "styled-components";
import { AuthContext } from "../../contexts/AuthContext";
import NormalBtn from "../../componentes/NormalBtn";
import { useReactToPrint } from "react-to-print";
import { TituloPrincipal } from "../Posologia";
import { mountPhones } from "../../utils/mountPhones";

const TabelaFarmapop = styled.table`
  border: 2px solid #000;
  height: 210px;
  border-collapse: collapse;
  margin-bottom: 1.5rem;

  thead {
    height: 80px;
    border: 2px solid #000;
  }

  th {
    line-height: 12px;
  }

  th:last-child {
    border-right: 2px solid #000;
  }

  td {
    border: 1px solid #000;
    height: 25px;
    text-align: center;
    font-size: 14px;
  }
`;

const TableHeader = styled.th`
  background-color: #000;
  height: 23px;
  color: #fff;
  width: ${(props) => props.width};
  font-family: Poppins Bold;
  border-right: 2px solid #fff;
`;

const Farmapop = () => {
  const { filial } = useContext(AuthContext);

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
      <TituloPrincipal>Etiqueta Farmácia Popular</TituloPrincipal>
      <TabelaFarmapop ref={componentRef} className="farmapop">
        <thead>
          <tr>
            <th rowSpan="2">
              <img src={logoRaia} width="50px" />
            </th>
            <th colSpan="3">{filial.address || filial.endereco}</th>
          </tr>
          <tr>
            <th colSpan="3">{mountPhones() || filial.telefone}</th>
          </tr>
          <tr>
            <TableHeader width="80px">ATEND.</TableHeader>
            <TableHeader width="80px">VISTO</TableHeader>
            <TableHeader width="100px">RETIRADA</TableHeader>
            <TableHeader width="100px">PRÓX.</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>/</td>
            <td>/</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>/</td>
            <td>/</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>/</td>
            <td>/</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>/</td>
            <td>/</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>/</td>
            <td>/</td>
          </tr>
        </tbody>
      </TabelaFarmapop>
      <NormalBtn onClick={handlePrintEvent}>Imprimir</NormalBtn>
    </ContainerPrincipal>
  );
};

export default Farmapop;
