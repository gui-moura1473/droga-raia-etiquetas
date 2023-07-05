import { styled } from "styled-components";

import { HiOutlineUser } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";

const IdentificadorLojaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: flex-end;
    gap: .3rem;
    margin-right: 3rem;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
    }

    svg {
        color: #fff;
        font-size: 1.4rem;
    }

    span {
        font-weight: 700;
    }

    p {
        margin: 0;
        color: #e6e6e6;
        font-size: 1.1rem;
    }
`;

const IndentificadorLoja = () => {
    return (
        <IdentificadorLojaWrapper>
            <div>
                <HiOutlineUser />
                <p><span> Usuário: </span> Guilherme</p>
            </div>
            <div>
                <SlLocationPin />
                <p><span>Filial:</span> 189 - Birigui A</p>
            </div>
        </IdentificadorLojaWrapper>
    )
};

export default IndentificadorLoja;