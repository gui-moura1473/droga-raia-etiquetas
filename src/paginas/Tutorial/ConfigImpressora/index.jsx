import React from "react";
import ContainerPrincipal from "../../../componentes/ContainerPrincipal";
import { TituloPrincipal } from "../../Posologia";
import { useNavigate } from "react-router-dom";
import NormalBtn from "../../../componentes/NormalBtn";
import styled from "styled-components";
import { impressoras } from "../../../data/tutoriais";

import { Swiper, SwiperSlide } from "swiper/react";

const TutorialImage = styled.img`
  height: 600px;
  display: flex;
`;

const ContainerSlider = styled.div`
  display: flex;
  width: 100%;
  cursor: grab;
`;

const ContainerSlide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-inline: 10%;
  margin-bottom: 15px;

  p {
    padding-left: 40px;
    width: 50%;
    text-align: justify;
  }
`;

const ConfigImpressora = () => {
  const navigate = useNavigate();

  const handleClickVoltar = (e) => {
    e.preventDefault();

    navigate(-1);
  };

  return (
    <ContainerPrincipal>
      <TituloPrincipal>Configurações da Impressora</TituloPrincipal>
      <ContainerSlider>
        <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
          {impressoras.map((item) => (
            <SwiperSlide key={item.id}>
              <ContainerSlide>
                <TutorialImage src={item.image} alt="Slider" />
                <p>{item.descricao}</p>
              </ContainerSlide>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerSlider>
      <NormalBtn onClick={handleClickVoltar}>Voltar</NormalBtn>
    </ContainerPrincipal>
  );
};

export default ConfigImpressora;
