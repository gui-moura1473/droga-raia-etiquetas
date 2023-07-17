import React, { useRef, useState } from 'react'
import ContainerPrincipal from '../../componentes/ContainerPrincipal'
import InputContato from './InputContato'
import TextAreaContato from './TextAreaContato'
import NormalBtn from '../../componentes/NormalBtn'
import { styled } from 'styled-components'
import emailjs from '@emailjs/browser'



const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  align-items: center;
  gap:1rem;

  > div {
    flex: 1;
  }

  > div p {
    text-indent: 50px;
    text-align: justify;
    margin-bottom: .5rem;
  }

  h3, h4 {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
`

const TituloPrincipal = styled.h2`
  margin-bottom: 1rem;
  text-transform: uppercase;
`

const ContainerContato = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InputsWrapper = styled.div`
  width: 80%;
  gap: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const Inicio = () => {
  const [nome, setNome] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const form = useRef();

  const handleMessageSubmit = (event) => { 
    event.preventDefault();

    if(nome === '' || assunto === '' || mensagem === '') {
      alert('Você precisa preencher todos os campos pra se contatar comigo!')
      return
    }
    
    emailjs.sendForm('service_fkbw5qr', 'template_2kp6og4', form.current, 'J5McQqsLC5u0e5mk2')
      .then((result) => {
          alert('Mensagem enviada com sucesso!');
      }, (error) => {
          alert(error.message);
      });


    setNome('');
    setAssunto('');
    setMensagem('');
  }

  return (
    <ContainerPrincipal>
      <TituloPrincipal>Bem vindo ao sistema de utilidades v1.0!</TituloPrincipal>
      <SectionWrapper>
        <div>
          <p>
            Você está se perguntando do que se trata? Bom, o sistema de utilidades nada mais é do que uma solução pensada para algumas dificuldades
            encontradas no cotidiano de trabalho nas lojas da RD que ainda não tiveram ferramentas oficiais implementadas no sistema (ou quando já, não da maneira mais prática e acessível o possível).
          </p>
          <p>
            O sistema irá passar por diversas atualizações de qualidade de vida, que podem vir a acrescentar novas ferramentas também, conforme sugestões e
            novas percepções de dificuldades. E caso você esteja com dúvida de como <strong>configurar</strong> ou <strong>utilizar</strong> o sistema da maneira correta, basta clicar sobre a aba de configurações logo acima, ali na
            barra de navegação que você será direcionado a alguns tutoriais de configurações das impressoras e de parâmetros de impressão.
          </p>
          <p>
            Peço que façam uso e avaliem o sistema da menor maneira possível, pois estou aberto a toda e qualquer sugestão que possa trazer melhorias.
            Para deixar qualquer sugestão/ideia basta preencher e enviar os dados nos campos logo abaixo. Um bom atendimento e ótimo dia de trabalho a todos vocês usuários!
          </p>
        </div>
        <ContainerContato ref={form} onSubmit={handleMessageSubmit}>
          <h3>Faça contato já</h3>
          <InputsWrapper>
            <InputContato
              label='Nome'
              id='nome'
              placeholder='Digite o seu nome'
              type='text'
              name='user_nome'
              value={nome}
              setValue={setNome}
            />
            <InputContato
              label='Assunto'
              id='assunto'
              placeholder='Digite aqui o assunto'
              type='assunto'
              name='user_assunto'
              value={assunto}
              setValue={setAssunto}
            />
          </InputsWrapper>
          <TextAreaContato
            label='Mensagem'
            id='mensagem'
            name='user_mensagem'
            value={mensagem}
            setValue={setMensagem}
          />
          <button>
            Enviar
          </button>
        </ContainerContato>
      </SectionWrapper>
    </ContainerPrincipal>
  )
}

export default Inicio