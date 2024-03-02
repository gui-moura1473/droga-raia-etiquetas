import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CgCloseO } from "react-icons/cg";
import InputTextModalWrapper from "./InputTextModalWrapper";
import InputMask from "react-input-mask";
import { Botao } from "../../../componentes/NormalBtn";
import { useCadastrarServico } from "../../../hooks/useCadastrarServico";
import {
  deformatMoney,
  formatMoneyEditServico,
} from "../../../utils/formatMoney";
import { Toaster } from "react-hot-toast";
import { useEditarServico } from "../../../hooks/useEditarServico";

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

const ModalHeader = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 1.35rem;
  }

  svg {
    font-size: 1.8rem;
    cursor: pointer;
    color: #ff0000;
  }
`;

const ModalBody = styled.div`
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

const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #ccc;
  padding-top: 1rem;
  padding-inline: 1.5rem;
`;

const SubmitButton = styled(Botao)`
  width: 100%;
  height: 46px;
`;

const ModalNovoServico = ({
  handleCloseModal,
  valoresEditar,
  editar,
  setEditar,
}) => {
  const [novoServicoValue, setNovoServicoValue] = useState({
    name: "",
    price: undefined,
    ean: undefined,
  });

  useEffect(() => {
    if (editar) {
      setNovoServicoValue({
        _id: valoresEditar._id,
        name: valoresEditar.name,
        price: formatMoneyEditServico(valoresEditar?.price),
        ean: valoresEditar.ean,
      });
      return;
    }

    setNovoServicoValue({
      name: "",
      price: undefined,
      ean: undefined,
    });
  }, [editar]);

  const { mutate: cadastrarServico, isSuccess: sucessoCadastro } =
    useCadastrarServico();

  const { mutate: editarServico, isSuccess: sucucessoEdit } =
    useEditarServico();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editar) {
      const servico = {
        name: novoServicoValue.name,
        price:
          novoServicoValue.price !== undefined
            ? deformatMoney(novoServicoValue.price)
            : 0,
        ean: novoServicoValue.ean,
      };

      cadastrarServico(servico);
      return;
    }
    editarServico(novoServicoValue);
  };

  useEffect(() => {
    if (sucessoCadastro || sucucessoEdit) {
      handleCloseModal(false);
    }
  }, [sucessoCadastro, sucucessoEdit]);

  return (
    <BgModal>
      <ModalContainer onSubmit={handleSubmit}>
        <ModalHeader>
          <h2>Cadastrar/Editar Seviço</h2>
          <CgCloseO
            onClick={() => {
              handleCloseModal(false);
              setEditar(false);
            }}
          />
        </ModalHeader>
        <ModalBody>
          <div>
            <InputTextModalWrapper label="Nome do Serviço">
              <input
                type="text"
                value={novoServicoValue.name}
                onChange={(e) =>
                  setNovoServicoValue({
                    ...novoServicoValue,
                    name: e.target.value,
                  })
                }
              />
            </InputTextModalWrapper>
          </div>
          <div>
            <InputTextModalWrapper label="Código Interno/EAN">
              <input
                type="number"
                value={novoServicoValue.ean}
                onChange={(e) =>
                  setNovoServicoValue({
                    ...novoServicoValue,
                    ean: e.target.value,
                  })
                }
              />
            </InputTextModalWrapper>
            <InputTextModalWrapper label="Valor">
              <InputMask
                mask={"R$ 99,99"}
                maskoptions={{ permanents: [0, 1, 2] }}
                value={novoServicoValue.price}
                onChange={(e) => {
                  setNovoServicoValue({
                    ...novoServicoValue,
                    price: e.target.value,
                  });
                }}
              >
                {(inputProps) => (
                  <input {...inputProps} type="text" minLength="7" />
                )}
              </InputMask>
            </InputTextModalWrapper>
          </div>
        </ModalBody>
        <ModalFooter>
          <SubmitButton type="submit">Enviar</SubmitButton>
        </ModalFooter>
      </ModalContainer>
      <Toaster />
    </BgModal>
  );
};

export default ModalNovoServico;
