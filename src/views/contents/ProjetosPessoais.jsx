import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import './contents.css'

const ProjetosPessoais = props => {
  return (
    <div className='contents'>
      <h2>Projetos de Iniciativa Pessoal</h2>
      <ProjectCard
        title='IMC, IAC e Peso Ideal' tec='js html css'
        description='Calcula o IMC, IAC e o peso ideal para o usuário'
        path='https://github.com/Gonzagadavid/IMC-IAC-ideal-weight'
      />
      <ProjectCard
        title='Cálculo de Juros' tec='js html css'
        description='Calcula o juros simples e o juros composto de forma detalhada ou simplificada'
        path='https://github.com/Gonzagadavid/interest-calculation'
      />
      <ProjectCard
        title='Linear Gradiente CSS' tec='js html css'
        description='Auxilia na escolha da cores do linear gradiente para usar no css, disponibilizando o código'
        path='https://github.com/Gonzagadavid/linear-gradient-CSS'
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
