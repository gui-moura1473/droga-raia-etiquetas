import React from 'react'
import { Botao } from '../../../componentes/NormalBtn';

const BtnPrint = ({ handleClick }) => {
    return (
        <Botao onClick={
            (e) => {
                e.preventDefault();
                handleClick();
            }
        }>
            Imprimir
        </Botao>
    )
}

export default BtnPrint