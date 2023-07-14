import React from 'react'
import { styled } from 'styled-components'

const SwitchWrapper = styled.div`
    display: flex;
    flex: 1;
    margin-bottom: 0.5rem;
    align-items: center;

    input {
        all: unset;
        outline: none;
        position: relative;
        z-index: 1;
        margin: 2px;
        padding: 0;
        cursor: pointer;
        width: 48px;
        height: 24px;
    }

    input::before, input::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        transition: left .20s cubic-bezier(.25, .8, .25, .1),
                    transform .30s ease-in;
    }

    input::before {
        background-color: #fff;
        border: 2px solid #bdbdbd;
        width: 100%;
        height: 100%;
        border-radius: 28px;
    }

    input::after {
        margin: 2px 0 0 2px;
        top: 2px;
        left: 2px;
        background: #bdbdbd;
        width: 20px;
        height: 20px;
        border-radius: 100%;
    }

    input:checked::before {
        background-color: #2b00ff;
        border: 2px solid #2b00ff;
    }

    input:checked::after {
        left: 25px;
        background-color: #fff;
    }

    input:disabled::before {
        background-color: #dbdddf !important;
    }

    input:disabled::after {
        background-color: #f5f2f2 !important;
    }

    p {
        display: inline-block;
        text-indent: 15px;
        line-height: 2rem;
    }

`

const SwitchBtn = ({ label, handleChange, disabled, checked }) => {
    return (
        <SwitchWrapper>
            <input type="checkbox" disabled={disabled} onChange={handleChange} checked={checked} />
            <p>{label}</p>
        </SwitchWrapper>

    )
}

export default SwitchBtn