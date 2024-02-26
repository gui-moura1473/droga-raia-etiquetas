import React from "react";
import ContainerPrincipal from "../../../componentes/ContainerPrincipal";
import { TituloPrincipal } from "../../Posologia";
import NormalBtn from "../../../componentes/NormalBtn";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { configuracoes } from "../../../data/tutoriais";

import { Swiper, SwiperSlide } from "swiper/react";

const TutorialImage = styled.img`
  height: 500px;
  display: flex;
`;

const ContainerSlider = styled.div`
  display: flex;
  width: 100%;
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

const PainelControle = () => {
  const navigate = useNavigate();

  const handleClickVoltar = (e) => {
    e.preventDefault();

    navigate(-1);
  };

  return (
    <ContainerPrincipal>
      <TituloPrincipal>Painel de Controle</TituloPrincipal>
      <ContainerSlider>
        <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
          {configuracoes.map((item) => (
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

export default PainelControle;
