import { useEffect } from "react";
import { useDeletarServico } from "../../../hooks/useDeletarServico";
import Modal from "../../../componentes/Modal";

const ModalDeletaServico = ({ handleClose, servicoAtual, setServicoAtual }) => {
  const { mutate, isSuccess } = useDeletarServico();

  const handleSubmitDeletaServico = (e) => {
    e.preventDefault();
    mutate(servicoAtual?._id);
    setServicoAtual(0);
    if (isSuccess) handleClose();
    return;
  };

  useEffect(() => {
    if (isSuccess) handleClose();
  }, [isSuccess]);

  return (
    <Modal.Root handleSubmit={handleSubmitDeletaServico}>
      <Modal.Header titulo="Deletar serviço" handleCloseModal={handleClose} />
      <Modal.Body>
        <div>
          <p>Você tem certeza que deseja deletar este serviço?</p>
        </div>
      </Modal.Body>
      <Modal.Footer btnText="Apagar" />
    </Modal.Root>
  );
};

export default ModalDeletaServico;
