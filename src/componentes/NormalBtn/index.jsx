import { styled } from 'styled-components'

export const Botao = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 38px;
    width: 112px;
    padding: 6px 12px;    

    background: var(--azul-botao);
    color: #fff;
    font-family: inherit;
    font-size: 1.15rem;
    font-weight: 400;
        
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: .5s;

    &:hover{
        background: var(--azul-botao-hover);
    }
`

const NormalBtn = ({ children, onClick }) => {

    return (
        <Botao onClick={(event) => onClick(event)}>
            {children}
        </Botao>
    )
}

export default NormalBtn