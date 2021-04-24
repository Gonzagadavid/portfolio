import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import './contents.css'

const OutrosProjetos = props => {
  return (
    <div className='contents'>
      <h2>Outros Projetos</h2>
      <ProjectCard
        title='Terminal Chat' tec='node js'
        description='Neste projeto foi criado um diretório para executar como servidor e outro para funcionar como cliente (aplicação). Renderiza informações, mensagens e atividades como quem saiu e entrou na sala, desenvolvido durante a semana de JSExpert com Erik Wendel'
        path='https://github.com/Gonzagadavid/Terminal-chat'
      />
      <ProjectCard
        title='Batalha espacial' tec='js html css'
        description='Projeto de jogo em JavaScript e HTML, feito através do tutorial encontrado no canal do youtube do desenvolvedor Gustavo Silveira'
        path='https://github.com/Gonzagadavid/space-battle'
      />
      <ProjectCard
        title='calculadora simples' tec='js html css'
        description='Projeto iniciado como exercício de uma aula de canal do ProfPereireVirtual no youtube'
        path='https://github.com/Gonzagadavid/calculadora-simples'
      />
      <ProjectCard
        title='Exercicios do livro Eloquent JavaScript' tec='js'
        description='Exercícios proposto pelo livro eloquent javascript'
        path='https://github.com/Gonzagadavid/eloquent-exercicios'
      />
    </div>
  )
}

export default OutrosProjetos
