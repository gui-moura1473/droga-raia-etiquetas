import { AiFillGithub } from 'react-icons/ai';
import { styled } from 'styled-components';

const Rodape = styled.footer`
    width: 100%;
    height: 45px;
    padding-block: .5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--azul-raia);
    color: #fff;

    a {
        color: #fff;
    }

    svg {
        font-size: 25px;
        margin-left: 8px;
        cursor: pointer;
    }

`

const Footer = () => {
    return (
        <Rodape>
            Desenvolvido por Guilherme Moura em 2023. Todos os direitos reservados.
            <a
                href='https://github.com/gui-moura1473'
                title='Venha conhecer mais dos meus trabalhos!'
            >
                <AiFillGithub />
            </a>
        </Rodape>
    )
}

export default Footer