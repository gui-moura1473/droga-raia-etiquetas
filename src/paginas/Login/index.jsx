import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"

import { styled } from "styled-components"
import { ContainerGeral } from "../../componentes/ContainerPrincipal"
import { CabecalhoContainer, Logo } from "../../componentes/Header"
import Footer from "../../componentes/Footer"
import SelectLoja from "./SelectLoja"
import NormalBtn from "../../componentes/NormalBtn"

import { lojas } from "../../data/lojas"
import logotipo from '../../assets/images/droga-raia-logo.png'
import fundoLogin from '../../assets/images/bg-login.jpg'

const Cabecalho = styled(CabecalhoContainer)`
    justify-content: center;
`

const ContainerLogin = styled(ContainerGeral)`
    background: url(${fundoLogin});
`

const ConteudoWrapper = styled.form`
    box-shadow: 0px 0px 9px 3px rgba(71, 68, 68, 0.1);
    background: #fff;
    border-radius: 25px;

    width: 35%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 54px;

    h2 {
        letter-spacing: 0.05rem;
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    button {
        margin-top: 1.5rem;
        width: 70%;
    }
`

const Login = () => {
    const [lojaSelecionada, setLojaSelecionada] = useState('');
    const navigate = useNavigate();

    const { filial, setFilial, authenticated } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        if (lojaSelecionada === '') {
            alert('Selecione sua loja pra prosseguir!')
            return
        }

        const loja = lojas.find((loja) => loja.filial === lojaSelecionada);
        setFilial(loja);
        navigate('/inicio');
    }

    return (
        <>
            <Cabecalho>
                <Logo src={logotipo} />
            </Cabecalho>
            <ContainerLogin>
                <ConteudoWrapper>
                    <h2>Entrar</h2>
                    <p>{String(authenticated)} {filial}</p>
                    <SelectLoja
                        options={lojas}
                        value={lojaSelecionada} 
                        handleChange={setLojaSelecionada} 
                    />
                    <NormalBtn onClick={handleLogin}>
                        Entrar
                    </NormalBtn>
                </ConteudoWrapper>
            </ContainerLogin>
            <Footer />
        </>


    )
}

export default Login