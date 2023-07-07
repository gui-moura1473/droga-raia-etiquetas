import { styled } from 'styled-components'
import React, { useState } from 'react'
import ContainerPrincipal from '../../componentes/ContainerPrincipal'
import InputText from './InputText'
import InputSelect from './InputSelect'

const TituloPrincipal = styled.h2`
  padding-bottom: 1.2rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ccc;
  width: 100%;

  letter-spacing: 1px;
  text-align: center;
`
const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  gap: 2rem;
`

const Posologia = () => {
  const [quantidade, setQuantidade] = useState('');
  const [duracao, setDuracao] = useState('');
  const [frequencia, setFrequencia] = useState(0);


  return (
    <ContainerPrincipal>
      <TituloPrincipal>Etiquetas de Posologia</TituloPrincipal>
      <InputsWrapper>
        <InputText label="Quantidade" value={quantidade} setValue={setQuantidade}/>
        <InputSelect value={frequencia} setValue={setFrequencia} />
        <InputText label="Duração" value={duracao} setValue={setDuracao}/>
      </InputsWrapper>
    </ContainerPrincipal>
  )
}

export default Posologia