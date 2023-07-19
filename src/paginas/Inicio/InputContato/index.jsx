import React from 'react'
import { styled } from 'styled-components'

const InputsWrapper = styled.div`
  display: flex;
  position: relative;
  flex: 1;

  label {
    position: absolute;
    left: .5rem;
    cursor: pointer;
  }

  label:hover {
    color: rgb(155, 155, 155);
  }

  input {
    padding: 1.6rem .5rem .3rem .5rem;
    outline: none;
    font-family: inherit;
    border-radius: 4px;
    border: none;
    width: 100%;
    box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, .1);
    color: rgb(107, 107, 107);
  }
`

function InputContato({ label, placeholder, type , id, value, setValue, name }) {
  return (
    <InputsWrapper>
        <label htmlFor={id}>
            {label}
        </label>
        <input 
            type='text'
            value={value}
            name={name}
            onChange={(event) => setValue(event.target.value)}
            placeholder={placeholder}
            id={id}
        />
    </InputsWrapper>
  )
}

export default InputContato