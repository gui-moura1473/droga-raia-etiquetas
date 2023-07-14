import { styled } from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import ContainerPrincipal from '../../componentes/ContainerPrincipal'
import InputText from './InputText'
import InputSelect from './InputSelect'
import RadioGroup from './RadioGroup'
import NormalBtn from '../../componentes/NormalBtn'
import PreviewEtiqueta from './PreviewEtiqueta'
import BtnPrint from './BtnPrint'

const TituloPrincipal = styled.h2`
  padding-bottom: 1.2rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ccc;
  width: 100%;

  letter-spacing: 1px;
  text-align: center;
`

const BtnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  width: 100%;

  padding-top: 1.2rem;
  border-top: 1px solid #ccc;
`

const FormPosologia = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  width: 70%;
`

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
`

const Posologia = () => {
  const [quantidade, setQuantidade] = useState('');
  const [duracao, setDuracao] = useState('');
  const [frequencia, setFrequencia] = useState(0);
  const [sintomas, setSintomas] = useState('');
  const [posologia, setPosologia] = useState('');

  const [posologiaCompleta, setPosologiaCompleta] = useState('');

  useEffect(() => {

    if (!posologiaPersonalizada) {

      const frequenciaPorEstenso = [
        '',
        'uma vez ao dia',
        'a cada 12 horas',
        'a cada 8 horas',
        'a cada 6 horas',
      ]

      if(inputSintomasDisabled) {
        setPosologiaCompleta(`${quantidade}, ${frequenciaPorEstenso[frequencia]}, caso ${sintomas}, ${duracao}.`);
        return
      }

      setPosologiaCompleta(`${quantidade}, ${frequenciaPorEstenso[frequencia]}, ${duracao}.`);
      return
    }
    
    setPosologiaCompleta(`${posologia}.`)

  },[quantidade, duracao, frequencia, sintomas, posologia])

  const [posologiaPersonalizada, setPosologiaPersonalizada] = useState(false);
  const [horariosRecomendados, setHorariosRecomendados] = useState(false);
  const [usoContinuo, setUsoContinuo] = useState(false);
  const [inputSintomasDisabled, setInputSintomasDisabled] = useState(false);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrintEvent = (event) => {
    event.preventDefault();
    if(quantidade === '' && frequencia === '' && duracao === '' || posologia === '') {
      alert('Você precisa preencher a posologia antes de imprimir!');
      return;
    }

    handlePrint();
  }

  return (
    <ContainerPrincipal>
      <TituloPrincipal>Etiquetas de Posologia</TituloPrincipal>
      <FormPosologia>
        {
          !posologiaPersonalizada && (
            <RowWrapper>
              <InputText
                label="Quantidade"
                value={quantidade}
                setValue={setQuantidade}
              />
              <InputSelect
                value={frequencia}
                setValue={setFrequencia}
              />
              <InputText
                label="Duração"
                value={duracao}
                setValue={setDuracao}
                disabled={usoContinuo}
              />
            </RowWrapper>
          )
        }

        {
          posologiaPersonalizada && (
            <RowWrapper>
              <InputText
                label="Descreva a posologia Personalizada"
                value={posologia}
                setValue={setPosologia}
              />
            </RowWrapper>
          )
        }
        <RowWrapper>
          <RadioGroup
            setRadios={{
              setPosologiaPersonalizada,
              setHorariosRecomendados,
              setUsoContinuo,
              setDuracao,
              setSintomas,
              setQuantidade,
              setInputSintomasDisabled
            }}
            values={{
              usoContinuo,
              posologiaPersonalizada
            }}
          />
          {
            inputSintomasDisabled && (
              <InputText
              label="Sintomas"
              value={sintomas}
              setValue={setSintomas}
            />
            )
            
          }
        </RowWrapper>
        <BtnsContainer>
          <PreviewEtiqueta 
            posologia={posologiaCompleta}
            horariosRecomendados={{horariosRecomendados, frequencia}}
            referencia={componentRef} 
          />
          <NormalBtn onClick={handlePrintEvent}>Imprimir</NormalBtn>
        </BtnsContainer>

      </FormPosologia>

    </ContainerPrincipal >
  )
}

export default Posologia