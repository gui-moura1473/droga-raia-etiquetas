import { styled } from "styled-components"
import { Botao } from "../../NormalBtn"
import { HiOutlineLogout } from "react-icons/hi"

const ButtonLogout = styled(Botao)`
    background: var(--vermelho-botao);

    &:hover{
        background: var(--vermelho-botao-hover);
    }

    svg {
        margin-right: .2rem;
        font-size: 1.3rem;
    }
`

const BtnLogout = ({ children, onClick }) => {

    return (
        <ButtonLogout onClick={onClick} >
            <HiOutlineLogout />
            {children}
        </ButtonLogout>
    )
}

export default BtnLogout