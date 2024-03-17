import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { styled } from "styled-components";
import { ContainerGeral } from "../../componentes/ContainerPrincipal";
import { CabecalhoContainer, Logo } from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import SelectLoja from "./SelectLoja";
import NormalBtn from "../../componentes/NormalBtn";

import logotipo from "../../assets/images/droga-raia-logo.png";
import fundoLogin from "../../assets/images/bg-login.jpg";
import ModalCadastraLoja from "./ModalCadastraLoja";
import { useGetLojas } from "../../hooks/useGetLojas";
import { Toaster } from "react-hot-toast";

const Cabecalho = styled(CabecalhoContainer)`
  justify-content: center;
`;

const ContainerLogin = styled(ContainerGeral)`
  background: url(${fundoLogin});
`;

const ConteudoWrapper = styled.form`
  box-shadow: 0px 0px 9px 3px rgba(71, 68, 68, 0.1);
  background: #fff;
  border-radius: 25px;

  width: 35%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 54px;

  h2 {
    letter-spacing: 0.05rem;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  button {
    margin-top: 1.5rem;
    width: 70%;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 1.2rem;
`;

const LinkCadastrar = styled.button`
  background: none;
  width: fit-content !important;
  color: var(--azul-raia);
  outline: none;
  border: none;
  margin-top: 0 !important;
  padding: 0.3rem;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    color: var(--azul-botao);
    text-decoration: underline;
  }
`;

const Login = () => {
  const [lojaSelecionada, setLojaSelecionada] = useState("");
  const [modalCadastraLojaIsOpen, setModalCadastraLojaIsOpen] = useState(false);
  const [editaLoja, setEditaLoja] = useState(false);
  const navigate = useNavigate();

  const { setFilial } = useContext(AuthContext);

  const { data: lojas, isLoading, isError } = useGetLojas();

  const handleLogin = (event) => {
    event.preventDefault();
    if (lojaSelecionada === "") {
      alert("Selecione sua loja pra prosseguir!");
      return;
    }

    const loja = selecionaDadosLojaAtual(lojas);
    window.localStorage.setItem("loja", JSON.stringify(loja));
    setFilial(loja);
    navigate("/");
  };

  const handleToggleModalLoja = () => {
    setModalCadastraLojaIsOpen((prev) => !prev);
  };

  const selecionaDadosLojaAtual = (lojas) => {
    const loja = lojas.find(
      (loja) => loja.filialNumber === parseInt(lojaSelecionada)
    );
    return loja;
  };

  return (
    <>
      <Cabecalho>
        <Logo src={logotipo} />
      </Cabecalho>
      <ContainerLogin>
        <ConteudoWrapper>
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
                Carregando lojas disponíveis...
              </p>
            </div>
          )}
          {!isLoading && !isError && (
            <>
              <h2>Entrar</h2>
              <SelectLoja
                options={lojas}
                value={lojaSelecionada}
                handleChange={setLojaSelecionada}
              />
              <NormalBtn onClick={handleLogin}>Entrar</NormalBtn>
              <LinksWrapper>
                <LinkCadastrar
                  type="button"
                  onClick={() => {
                    handleToggleModalLoja();
                    setEditaLoja(true);
                  }}
                >
                  Altere as informações de sua loja
                </LinkCadastrar>
                <LinkCadastrar
                  type="button"
                  onClick={() => {
                    setLojaSelecionada("");
                    handleToggleModalLoja();
                  }}
                >
                  Cadastre já aqui sua loja
                </LinkCadastrar>
              </LinksWrapper>
            </>
          )}
        </ConteudoWrapper>
      </ContainerLogin>
      <Toaster />
      {modalCadastraLojaIsOpen && (
        <ModalCadastraLoja
          handleCloseModal={handleToggleModalLoja}
          lojaAtual={
            lojaSelecionada === "" ? "" : selecionaDadosLojaAtual(lojas)
          }
          edita={editaLoja}
          setEdita={setEditaLoja}
        />
      )}
      <Footer />
    </>
  );
};

export default Login;
