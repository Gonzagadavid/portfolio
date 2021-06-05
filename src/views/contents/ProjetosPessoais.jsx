import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import './contents.css'

const ProjetosPessoais = props => {
  return (
    <div className='contents'>
      <h2>Projetos de Iniciativa Pessoal</h2>
      <ProjectCard
        title='Memory Card Game' tec='js html css'
        description='O usuário tem que encontrar os pares das cartas, o tempo é cronometrado e os movimentos contados, o recorde que é salvo no localStorage do navegador'
        path='https://github.com/Gonzagadavid/memory-card-game'
      />
      <ProjectCard
        title='JavaScript Matrix' tec='js html css'
        description='Nesse projeto de iniciativa pessoal, busquei desenvolver praticamente tudo usando JavaScript, inclusive tamanho das fontes e a divisão da tela'
        path='https://gonzagadavid.github.io/JavaScript-Matrix/'
      />
      <ProjectCard
        title='Portfólio com React JS (esta página)' tec='react js css'
        description='Meu portfólio com React JS, contruindo componentes e os utilizando da maneira mais proveitosa possível'
        path='https://github.com/Gonzagadavid/portfolio'
      />
      <ProjectCard
        title='Linear Gradiente CSS' tec='js html css'
        description='Este projeto auxilia na escolha da cores do linear gradiente para usar no css, disponibilizando o código'
        path='https://gonzagadavid.github.io/linear-gradient-CSS/'
      />
       <ProjectCard
        title='Cálculo de Juros' tec='js html css'
        description='Calcula o juros simples e o juros composto de forma detalhada ou simplificada'
        path='https://github.com/Gonzagadavid/interest-calculation'
      />
      <ProjectCard
        title='IMC, IAC e Peso Ideal' tec='js html css'
        description='Calcula o IMC, IAC e o peso ideal para o usuário'
        path='https://github.com/Gonzagadavid/IMC-IAC-ideal-weight'
      />
      <ProjectCard
        title='Calculadora Simples' tec='js html css'
        description='Calculadora para calculos simples'
        path='https://github.com/Gonzagadavid/simple-calculator-2'
      />
      <ProjectCard
        title='Contagem Regressiva para seu Aniverssário' tec='js html css'
        description='Exibe a contagem regressiva da data atual até a data do aniverssário do usuário'
        path='https://github.com/Gonzagadavid/birthday-countdown'
      />
      <ProjectCard
        title='Mostrar Tabuada' tec='js html css'
        description='Exibe a tabuada de 0 a 99 de numeros de 0 a 199 conforme a escolha do usuário'
        path='https://github.com/Gonzagadavid/mostrarTabuada'
      />
      <ProjectCard
        title='Calculo do IMC' tec='js html css'
        description='Calcula o índice de massa corporal do usuário do usuário'
        path='https://github.com/Gonzagadavid/calculo-IMC'
      />
    </div>
  )
}

export default ProjetosPessoais
