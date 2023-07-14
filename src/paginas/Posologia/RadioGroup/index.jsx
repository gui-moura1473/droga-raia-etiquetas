import React, { useState } from 'react'
import { styled } from 'styled-components'
import SwitchBtn from './SwitchBtn'

const RadioContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`

const RadioGroup = ({ setRadios, values }) => {

  const [radiosDisabled, setRadiosDisabled] = useState(false);

  const [isHorariosChecked, setIsHorariosChecked] = useState(false);
  const [isContinuoChecked, setIsContinuoChecked] = useState(false);
  const [isSintomasChecked, setIsSintomasChecked] = useState(false);
  const [isPersonalizadoChecked, setIsPersonalizadoChecked] = useState(false);

  const handlePersonalizar = () => {

    if (isHorariosChecked) setRadios.setHorariosRecomendados(prevValue => !prevValue);
    if (isContinuoChecked) setRadios.setUsoContinuo(prevValue => !prevValue);
    if (isSintomasChecked) setRadios.setInputSintomasDisabled(prevValue => !prevValue);

    setRadios.setPosologiaPersonalizada(prevValue => !prevValue);
    setRadiosDisabled(prevValue => !prevValue);

    if (!isPersonalizadoChecked) {
      setIsHorariosChecked(false);
      setIsContinuoChecked(false);
      setIsSintomasChecked(false);
      setIsPersonalizadoChecked(true);
      setRadios.setQuantidade('');
      setRadios.setDuracao('');
      return
    }

    setIsPersonalizadoChecked(false);

  }

  const handleHorarios = () => {
    setRadios.setHorariosRecomendados(prevValue => !prevValue);
    setIsHorariosChecked(prevValue => !prevValue);
  }

  const handleUsoContinuo = () => {
    setRadios.setUsoContinuo(prevValue => !prevValue);
    setIsContinuoChecked(prevValue => !prevValue);
    if (values.usoContinuo) {
      setRadios.setDuracao("");
      return;
    }
    setRadios.setDuracao('uso contínuo');

  }

  const handleSintomas = () => {
    setRadios.setInputSintomasDisabled(prevValue => !prevValue);
    setIsSintomasChecked(prevValue => !prevValue);
    setRadios.setSintomas('');
  }

  return (
    <>
      <RadioContainer>
        <SwitchBtn
          label="Horários Recomendados"
          handleChange={handleHorarios}
          disabled={radiosDisabled}
          checked={isHorariosChecked}
        />
        <SwitchBtn
          label="Uso Contínuo"
          handleChange={handleUsoContinuo}
          disabled={radiosDisabled}
          checked={isContinuoChecked}
        />
      </RadioContainer>
      <RadioContainer>
        <SwitchBtn
          label="Em caso de Sintomas"
          handleChange={handleSintomas}
          disabled={radiosDisabled}
          checked={isSintomasChecked}
        />
        <SwitchBtn
          label="Personalizar Horários"
          handleChange={handlePersonalizar}
          checked={isPersonalizadoChecked}
        />
      </RadioContainer>
    </>

  )
}

export default RadioGroup