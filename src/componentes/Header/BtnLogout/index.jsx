import { styled } from "styled-components"
import { Botao } from "../../NormalBtn"
import { HiOutlineLogout } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../../contexts/AuthContext"

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

const BtnLogout = () => {
    const navigate = useNavigate();
    const { setFilial } = useContext(AuthContext);

    const handleLogout = () => {
        setFilial('');
    }

    return (
        <ButtonLogout onClick={handleLogout} >
            <HiOutlineLogout />
            Sair
        </ButtonLogout>
    )
}

export default BtnLogout