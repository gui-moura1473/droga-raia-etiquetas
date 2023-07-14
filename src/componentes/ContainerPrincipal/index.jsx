import React from 'react'
import { styled } from 'styled-components'

export const ContainerGeral = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  margin-top: 80px;
  min-height: calc(100vh - 125px);
`
const ConteudoWrapper = styled.div`
  box-shadow: 0px 0px 9px 3px rgba(71, 68, 68, 0.1);
  border-radius: 5px;

  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 54px;
`

const ContainerPrincipal = ({ children }) => {
  return (
    <ContainerGeral>
        <ConteudoWrapper>
            { children }
        </ConteudoWrapper>
    </ContainerGeral>
  )
}

export default ContainerPrincipal