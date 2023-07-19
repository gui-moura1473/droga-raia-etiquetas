import { styled } from "styled-components";
import MenuLink from "../../MenuLink";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

const BarraNavegacao = styled.ul`
    display: flex;
    gap: 3rem;
    list-style: none;
`

const NavBar = () => {
    const { filial } = useContext(AuthContext);
    return (
        <BarraNavegacao>
            <li>
                <MenuLink to='/'>
                    Início
                </MenuLink>
            </li>
            <li>
                <MenuLink to='/posologia'>
                    Posologia
                </MenuLink>
            </li>
            <li>
                <MenuLink to='/servicos'>
                    Serviços
                </MenuLink>
            </li>
            <li>
                <MenuLink to='/encomendas'>
                    Encomendas
                </MenuLink>
            </li>
            { filial.farmapop && 
            (
            <li>
                <MenuLink to='/farmapop'>
                    Farmácia Popular
                </MenuLink>
            </li>
            )
            }
            <li>
                <MenuLink to='/tutorial'>
                    Como utilizar?
                </MenuLink>
            </li>
        </BarraNavegacao>
    )
}

export default NavBar;