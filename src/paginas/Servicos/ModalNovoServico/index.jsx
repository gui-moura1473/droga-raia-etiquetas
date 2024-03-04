import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { Toaster } from "react-hot-toast";
import Modal from "../../../componentes/Modal";
import InputTextModalWrapper from "./InputTextModalWrapper";
import InputMoney from "./InputMoney";

import { useCadastrarServico } from "../../../hooks/useCadastrarServico";
import { useEditarServico } from "../../../hooks/useEditarServico";

import {
  deformatMoney,
  formatMoneyEditServico,
} from "../../../utils/formatValues";
import { currencyMask } from "../../../utils/inputMasks";

const ModalNovoServico = ({ handleCloseModal, valoresEditar, editar }) => {
  const [novoServicoValue, setNovoServicoValue] = useState({
    name: "",
    price: 0,
    ean: 0,
  });

  const { mutate: cadastrarServico, isSuccess: sucessoCadastro } =
    useCadastrarServico();

  const { mutate: editarServico, isSuccess: sucessoEdit } = useEditarServico();

  useEffect(() => {
    if (editar) {
      setNovoServicoValue({
        _id: valoresEditar._id,
        name: valoresEditar.name,
        price: formatMoneyEditServico(valoresEditar.price),
        ean: valoresEditar.ean,
      });

      if (sucessoEdit) handleCloseModal();
      return;
    }

    if (sucessoCadastro) handleCloseModal();
    return () =>
      setNovoServicoValue({
        name: "",
        price: 0,
        ean: 0,
      });
  }, [setNovoServicoValue, sucessoCadastro, sucessoEdit]);

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

  const handleChangeInputsValues = (e) => {
    setNovoServicoValue({
      ...novoServicoValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal.Root handleSubmit={handleSubmit}>
      <Modal.Header
        titulo="Cadastrar/Editar Seviço"
        handleCloseModal={handleCloseModal}
      />
      <Modal.Body>
        <div>
          <InputTextModalWrapper label="Nome do Serviço">
            <input
              name="name"
              type="text"
              value={novoServicoValue.name}
              onChange={(e) => handleChangeInputsValues(e)}
            />
          </InputTextModalWrapper>
        </div>
        <div>
          <InputTextModalWrapper label="Código Interno/EAN">
            <input
              name="ean"
              type="number"
              value={novoServicoValue.ean}
              onChange={(e) => handleChangeInputsValues(e)}
              onClick={(e) => e.target.select()}
            />
          </InputTextModalWrapper>
          <InputTextModalWrapper label="Valor">
            <InputMoney
              name="price"
              value={novoServicoValue.price}
              onChange={(e) => handleChangeInputsValues(currencyMask(e))}
              onClick={(e) => e.target.select()}
            />
          </InputTextModalWrapper>
        </div>
      </Modal.Body>
      <Modal.Footer btnText="Enviar" />
      <Toaster />
    </Modal.Root>
  );
};

export default ModalNovoServico;
