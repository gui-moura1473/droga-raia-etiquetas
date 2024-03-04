import React from "react";
import ContainerPrincipal from "../../componentes/ContainerPrincipal";
import { TituloPrincipal } from "../Posologia";
import { styled } from "styled-components";

import painelControle from "../../assets/images/tutoriais/passo3.jpg";
import configImpressora from "../../assets/images/tutoriais/config1.jpg";
import NormalBtn from "../../componentes/NormalBtn";
import { useNavigate } from "react-router-dom";

import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

register();

const SectionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  gap: 8rem;
  width: 80%;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    align-items: flex-start;
  }

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 1rem;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    text-align: justify;
  }

  img {
    width: 400px;
    height: 200px;
    border-radius: 1rem;
    object-fit: cover;
    margin-bottom: 0.8rem;
  }
`;

const Tutorial = () => {
  const navigate = useNavigate();

  const handleClickPainel = (e) => {
    e.preventDefault();

    navigate("/tutorial/painelcontrole");
  };

  const handleClickConfig = (e) => {
    e.preventDefault();

    navigate("/tutorial/configimpressora");
  };

  return (
    <ContainerPrincipal>
      <TituloPrincipal>Configurações do Sistema de Etiquetas</TituloPrincipal>
      <SectionWrapper>
        <div>
          <aside>
            <h3>Passo 1: Alcançar as configurações</h3>
            <p>
              Clique abaixo para saber como partir da área de trabalho do
              computador até o painel de controle, onde você conseguirá
              encontrar as configurações da impressora.
            </p>
            <img src={painelControle} />
            <NormalBtn onClick={handleClickPainel}>Leia mais</NormalBtn>
          </aside>
        </div>
        <div>
          <aside>
            <h3>Passo 2: Configurar a impressora</h3>
            <p>
              Clique abaixo para saber de que maneira você deve deixar as
              configurações de sua impressora para que as etiquetas saiam
              adequadamente e não prejudique as etiquetas de controlados.
            </p>
            <img src={configImpressora} />
            <NormalBtn onClick={handleClickConfig}>Leia mais</NormalBtn>
          </aside>
        </div>
      </SectionWrapper>
    </ContainerPrincipal>
  );
};

export default Tutorial;
