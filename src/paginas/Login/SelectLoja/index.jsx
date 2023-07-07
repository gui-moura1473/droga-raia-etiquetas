import { styled } from "styled-components";
import downArrow from '../../../assets/images/down-icon.svg'

const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 70%;
    font-size: 1.2rem;

    label {
        color: #006c7f;
        margin-bottom: .5rem;
    }

    select {
        border: none;
        border-bottom: 3px solid #006c7f;
        outline: none;
        font-size: inherit;
        padding: 0.5rem;
        cursor: pointer;

        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        background-image: url(${downArrow});
        background-repeat: no-repeat;
        background-position: right 0.75rem center;
        background-size: 16px 12px;
    }
`

const SelectLoja = ({ options, value, handleChange }) => {
    return (
        <SelectWrapper>
            <label>Selecione a sua filial</label>
            <select name="loja" value={value} onChange={loja => handleChange(loja.target.value)}>
                <option value=""></option>
                {options.map((option) => (
                    <option
                        key={option.filial}
                        value={option.filial}
                    >
                        {option.filial} - {option.loja}
                    </option>
                ))}
            </select>
        </SelectWrapper>

    )
}

export default SelectLoja