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
  gap: 5rem;
  margin-bottom: 2rem;

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
    width: 400px;
    margin-left: 1rem;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  img {
    object-fit: cover;
    width: 250px;
    height: 250px;
    border-radius: 10px;
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
          <img src={painelControle} />
          <aside>
            <h3>Como chegar nas configurações da impressora?</h3>
            <p>
              Clique abaixo para saber como partir da área de trabalho do
              computador até o painel de controle, onde você conseguirá
              encontrar as configurações da impressora.
            </p>
            <NormalBtn onClick={handleClickPainel}>Leia mais</NormalBtn>
          </aside>
        </div>
        <div>
          <img src={configImpressora} />
          <aside>
            <h3>Como configurar a impressora?</h3>
            <p>
              Clique abaixo para saber de que maneira você deve deixar as
              configurações de sua impressora para que as etiquetas saiam
              adequadamente e não prejudique as etiquetas de controlados.
            </p>
            <NormalBtn onClick={handleClickConfig}>Leia mais</NormalBtn>
          </aside>
        </div>
      </SectionWrapper>
    </ContainerPrincipal>
  );
};

export default Tutorial;
