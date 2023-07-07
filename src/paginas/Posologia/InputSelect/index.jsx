import React from 'react'
import { styled } from 'styled-components'
import downArrow from '../../../assets/images/down-icon.svg'

const Wrapper = styled.div`
    position: relative;
    font-size: 1.2rem;
    flex: 1;

    label {
        position: absolute;
        left: 12px;
        top: 2px;
        color: #006c7f;
    }

    select {
        padding: 28px 12px 6px;
        border: 1px solid #ced4da;
        border-radius: .375rem;
        outline: none;
        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        background-image: url(${downArrow});
        background-repeat: no-repeat;
        background-position: right 0.75rem center;
        background-size: 16px 12px;
        font-size: 1.1rem;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 100%;
        height: 4rem;
    }

    select:focus {
        border: 1px solid #a4b1ff;
        box-shadow: 0px 0px 1px 3px #bed8ff;
    }
`

const InputSelect = ({ value, setValue }) => {
    return (
        <Wrapper>
            <label>Frequência</label>
            <select value={value} onChange={event => setValue(event.target.value)}>
                <option value="0"></option>
                <option value="1">uma vez ao dia</option>
                <option value="2">a cada 12 horas</option>
                <option value="3">a cada 8 horas</option>
                <option value="4">a cada 6 horas</option>
                <option value="5">a cada 4 horas</option>
            </select>
        </Wrapper>
    )
}

export default InputSelect