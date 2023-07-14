import React, { useContext } from 'react';
import { styled } from 'styled-components';
import { AuthContext } from '../../../contexts/AuthContext'

import logoRaia from '../../../assets/images/logo-raia.png'

const EtiquetaContainer = styled.div`
    width: 210px;
    border: 1px solid #000;
    border-radius: 2px;
    padding: 1.3px;
    display: flex;
    flex-direction: column;
    background: #fff;
    
    h2 {
        text-transform: uppercase;
        font-size: 1rem;
    }

    h3 {
        font-size: .7rem;
    }

    span {
        font-size: .7rem;
        margin: 3px;
        display: inline-block;
    }

    h2, h3 {
        background-color: #000;
        color: #fff;
        font-family: Poppins Bold;
        padding: 1px;
        text-align: center; 
    }

    p {
        font-size: .5rem;
    }
`

const ContainerInterno = styled.div`
    margin-top: 3px;
    width: 100%;
    border: 1px solid #000;
    border-radius: 2px 2px 12px 12px;
    padding: 1.3px;
    text-align: center;
`

const Rodape = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 90%;
    align-self: center;

    div {
        text-align: center;
    }
`

const LogoRaia = styled.img`
    height: 35px;
`


const PreviewEtiqueta = ({ referencia, posologia, horariosRecomendados }) => {

    const { filial } = useContext(AuthContext);

    const sugestoesHorarios = [
        '',
        'No horário que melhor se adaptar',
        '8:00h - 20:00h',
        '7:00h - 15:00h - 23:00h',
        '6:00h - 12:00h - 18:00h - 00:00h'
    ] 

    return (
        <EtiquetaContainer ref={referencia}>
            <h2>Posologia</h2>
            <ContainerInterno>
                <h3>Como utilizar?</h3>
                <span>{posologia}</span>
            </ContainerInterno>
            {   horariosRecomendados.horariosRecomendados &&
                (
                    <ContainerInterno>
                        <h3>Horários Recomendados</h3>
                        <span>{sugestoesHorarios[horariosRecomendados.frequencia]}</span>
                    </ContainerInterno>
                )
            }
            <Rodape>
                <LogoRaia src={logoRaia} />
                <div>
                    <p>{filial.endereco}</p>
                    <p>{filial.telefone}</p>
                </div>
            </Rodape>
        </EtiquetaContainer>
    )
}

export default PreviewEtiqueta