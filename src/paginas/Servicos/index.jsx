import { useEffect, useState } from "react";
import { styled } from "styled-components";
import useServicoAtual from "../../zustand/useServicoAtual";
import { useServicos } from "../../hooks/useServicos";

import { FaPlus } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { TituloPrincipal } from "../Posologia";
import ContainerPrincipal from "../../componentes/ContainerPrincipal";
import InputGroup from "./InputGroup";
import SelectGroup from "./SelectGroup";
import ModalNovoServico from "./ModalNovoServico";
import { Toaster } from "react-hot-toast";
import EtiquetaServico from "./EtiquetaServico";

import { formatMoney } from "../../utils/formatValues";
import ModalDeletaServico from "./ModalDeletaServico";

const InputsWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const BtnServicos = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  padding: 6px 12px;

  background: ${(props) => props.$corbtn};
  color: #fff;
  font-family: inherit;
  font-size: 1.15rem;
  font-weight: 400;

  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: ${(props) => props.$corbtnhover};
  }
`;

const Servicos = () => {
  const { data: servicos, isLoading, isError } = useServicos();
  const { servicoAtual, setServicoAtual } = useServicoAtual();

  const [modalAdicionaEditaIsOpen, setModalAdicionaEditaIsOpen] =
    useState(false);
  const [modalDeletaIsOpen, setModalDeletaIsOpen] = useState(false);
  const [servicoSelecionado, setServicoSelecionado] = useState(0);
  const [editar, setEditar] = useState(false);

  useEffect(() => {
    if (servicos?.length > 0) setServicoAtual(servicos[servicoSelecionado]);
  }, [servicos]);

  const handleChangeServico = (value) => {
    setServicoSelecionado(value);
    setServicoAtual(servicos[value]);
  };

  const handleModalAdicionaEdita = () => {
    setModalAdicionaEditaIsOpen((prev) => !prev);
  };

  const handleModalDeleta = () => {
    setModalDeletaIsOpen((prev) => !prev);
  };

  const handleButtons = (event, tipoBtn) => {
    event.preventDefault();
    switch (tipoBtn) {
      case "adiciona":
        setEditar(false);
        handleModalAdicionaEdita();
        break;

      case "edita":
        setEditar(true);
        handleModalAdicionaEdita();
        break;

      case "deleta":
        handleModalDeleta();
        break;
    }
    return;
  };

  const ordenarAlfabetico = (lista) => {
    const resultado = lista.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    return resultado;
  };

  return (
    <ContainerPrincipal>
      <TituloPrincipal>Serviços Farmacêuticos</TituloPrincipal>
      {isLoading && (
        <div
          style={{
            height: "300px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="loader-circle"></p>
          <p style={{ marginTop: "2rem", fontSize: "1.3rem" }}>
            Carregando serviços...
          </p>
        </div>
      )}
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
              servicos={ordenarAlfabetico(servicos)}
            />
            <InputGroup
              label="Código"
              value={servicos[servicoSelecionado].ean}
            />
            <InputGroup
              label="Preço"
              value={formatMoney(servicos[servicoSelecionado].price)}
            />
            <div style={{ display: "flex", gap: ".5rem" }}>
              <BtnServicos
                onClick={(e) => handleButtons(e, "adiciona")}
                $corbtn="var(--azul-botao)"
                $corbtnhover="var(--azul-botao-hover)"
              >
                <FaPlus />
              </BtnServicos>
              <BtnServicos
                onClick={(e) => handleButtons(e, "edita")}
                $corbtn="#0fb300"
                $corbtnhover="#0c9100"
              >
                <MdModeEdit />
              </BtnServicos>
              <BtnServicos
                onClick={(e) => handleButtons(e, "deleta")}
                $corbtn="var(--vermelho-botao)"
                $corbtnhover="var(--vermelho-botao-hover)"
              >
                <MdDelete />
              </BtnServicos>
            </div>
          </InputsWrapper>
          <EtiquetaServico servico={servicos[servicoSelecionado]} />
          {modalAdicionaEditaIsOpen && (
            <ModalNovoServico
              handleCloseModal={handleModalAdicionaEdita}
              valoresEditar={servicoAtual}
              editar={editar}
            />
          )}
          {modalDeletaIsOpen && (
            <ModalDeletaServico
              handleClose={handleModalDeleta}
              servicoAtual={servicoAtual}
              setServicoAtual={setServicoSelecionado}
            />
          )}
        </div>
      )}
      <Toaster />
    </ContainerPrincipal>
  );
};

export default Servicos;
