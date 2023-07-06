import { styled } from 'styled-components';

import logotipo from '../../assets/images/droga-raia-logo.png'
import BtnLogout from './BtnLogout';
import NavBar from './NavBar';
import IndentificadorLoja from './IdentificadorLoja';

export const CabecalhoContainer = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    z-index: 999;

    padding: .5rem 1.5rem;
    background-color: var(--azul-raia);
    box-shadow: 0px 0px 8px 3px rgb(125, 125, 125);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > div {
        display: flex;
        align-items: center;
    }
`

export const Logo = styled.img`
    padding: 5px 0;
    width: 150px;
    cursor: pointer;
`

const Header = () => {
    return (
        <CabecalhoContainer>
            <Logo
                src={logotipo}
            />
            <NavBar />
            <div>
                <IndentificadorLoja />
                <BtnLogout />
            </div>
        </CabecalhoContainer>
    )
}

export default Header;