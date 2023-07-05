import { styled } from "styled-components";
import MenuLink from "../../MenuLink";

const BarraNavegacao = styled.ul`
    display: flex;
    gap: 3rem;
    list-style: none;
`

const NavBar = () => {
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
        </BarraNavegacao>
    )
}

export default NavBar;