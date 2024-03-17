import styled from "styled-components";
import Modal from "../../../componentes/Modal";
import InputWrapper from "../../../componentes/InputWrapper";
import { useEffect, useState } from "react";
import CheckboxGroup from "./CheckboxGroup";
import { useCadastraLoja } from "../../../hooks/useCadastraLoja";
import { useEditaLoja } from "../../../hooks/useEditaLoja";
import { phoneMask } from "../../../utils/inputMasks";

const RowWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const ModalCadastraLoja = ({
  handleCloseModal,
  lojaAtual,
  edita,
  setEdita,
}) => {
  const [novaLoja, setNovaLoja] = useState({
    name: "",
    filialNumber: "",
    address: "",
    phone: "",
    celphone: "",
    farmapop: false,
  });

  const { mutate: cadastrarLoja, isSuccess: createSuccess } = useCadastraLoja();
  const { mutate: editaLoja, isSuccess: editSuccess } = useEditaLoja();

  useEffect(() => {
    if (lojaAtual) {
      setNovaLoja({
        _id: lojaAtual._id,
        name: lojaAtual.name,
        filialNumber: lojaAtual.filialNumber,
        address: lojaAtual.address,
        phone: lojaAtual?.phone,
        celphone: lojaAtual?.celphone,
        farmapop: lojaAtual.farmapop,
      });
    } else {
      setNovaLoja({
        name: "",
        filialNumber: "",
        address: "",
        phone: "",
        celphone: "",
        farmapop: false,
      });
    }
    if (createSuccess || editSuccess) {
      handleCloseModal();
      setEdita(false);
    }
  }, [lojaAtual, createSuccess, editSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edita) {
      editaLoja(novaLoja);
      return;
    }
    cadastrarLoja(novaLoja);
  };

  return (
    <Modal.Root handleSubmit={handleSubmit}>
      <Modal.Header
        titulo="Cadatrar/Editar Loja"
        handleCloseModal={() => {
          handleCloseModal();
          setEdita(false);
        }}
      />
      <Modal.Body>
        <RowWrapper>
          <InputWrapper label="Nome Loja" flex="2">
            <input
              type="text"
              value={novaLoja.name}
              onChange={(e) =>
                setNovaLoja({ ...novaLoja, name: e.target.value })
              }
              placeholder="Exemplo: Birigui A"
            />
          </InputWrapper>
          <InputWrapper label="Filial" flex="1">
            <input
              type="number"
              value={novaLoja.filialNumber}
              onChange={(e) =>
                setNovaLoja({ ...novaLoja, filialNumber: e.target.value })
              }
              placeholder="Exemplo: 189"
            />
          </InputWrapper>
        </RowWrapper>
        <RowWrapper>
          <InputWrapper label="Endereço da Loja">
            <input
              type="text"
              value={novaLoja.address}
              onChange={(e) =>
                setNovaLoja({ ...novaLoja, address: e.target.value })
              }
              placeholder="Exemplo: Rua Barão do Rio Branco, 556 - Centro"
            />
          </InputWrapper>
        </RowWrapper>
        <RowWrapper>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: "1rem",
            }}
          >
            <InputWrapper label="Telefone Fixo">
              <input
                type="text"
                value={novaLoja.phone}
                onChange={(e) =>
                  setNovaLoja({ ...novaLoja, phone: phoneMask(e) })
                }
                minLength="14"
                maxLength="14"
                placeholder="(00) 0000-000"
              />
            </InputWrapper>
            <InputWrapper label="Telefone Celular">
              <input
                type="text"
                value={novaLoja.celphone}
                onChange={(e) =>
                  setNovaLoja({ ...novaLoja, celphone: phoneMask(e) })
                }
                minLength="15"
                maxLength="15"
                placeholder="(00) 00000-0000"
              />
            </InputWrapper>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: "1rem",
              textAlign: "justify",
            }}
          >
            <CheckboxGroup values={novaLoja} setValues={setNovaLoja} />
            <p style={{ fontSize: ".9rem", color: "rgba(0,0,0,0.7)" }}>
              Atenção ao preencher os dados já que serão estes a serem mostrados
              nas etiquetas.
            </p>
          </div>
        </RowWrapper>
      </Modal.Body>
      <Modal.Footer btnText="Enviar" />
    </Modal.Root>
  );
};

export default ModalCadastraLoja;
