import React from 'react'
import { styled } from 'styled-components'

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

    input {
        padding: 28px 12px 6px;
        border: 1px solid #ced4da;
        border-radius: .375rem;
        outline: none;
        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        font-size: 1.1rem;
        width: 100%;
        height: 4rem;
    }

    input:focus {
        border: 1px solid #a4b1ff;
        box-shadow: 0px 0px 1px 3px #bed8ff;
    }
`

const InputText = ({ label, value, setValue }) => {
  return (
    <Wrapper>
        <label>{label}</label>
        <input 
            type='text'
            value={value}
            onChange={event => setValue(event.target.value)}
        />
    </Wrapper>
  )
}

export default InputText