import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

const LinkNavegacao = styled(NavLink)`
    color: #fff;
    text-decoration: none;
    font-size: 1.15rem;

    &.active {
        color: #c7c7c7;
        text-decoration: underline;
    }
`

const MenuLink = ({ children, to }) => {
    return (
        <LinkNavegacao to={to}>
            {children}
        </LinkNavegacao>
    )
}

export default MenuLink