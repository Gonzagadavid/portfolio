import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import './course.css'

const TrybeProjects = props => {
  return (
    <div className='course'>
      <h3>Projetos Trybe</h3>
      <ProjectCard
        title='Color Guess' tec='js html css'
        description='Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática o aprendizado de criação de elementos HTML pelo JavaScript , onde também enxerguei a oportunidade de colocar alguns conhecimentos em prática e tornar o jogo mais interessante Sendo assim, o recorde fica salvo no localStorage, sem mais que uma tentativa na mesma sequência de cor e pode diminuir e aumentar a dificuldade com a quantidade de cor e com isso influenciar na pontuação.'
        path='https://github.com/Gonzagadavid/color-guess'
      />
      <ProjectCard
        title='To Do List' tec='js html css'
        description='Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática o aprendizado de criação de elementos HTML pelo JavaScript , também utilizar o LocalStoreage para armazenar dados, para que assim os mesmo possam ser renderizado na tela novamente depois que o browser for fechado.'
        path='https://github.com/Gonzagadavid/lista-de-tarefas'
      />
      <ProjectCard
        title='Meme Generator' tec='js html css'
        description='Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática o aprendizado de criação de elementos HTML pelo JavaScript , e utilizar métodos do FileReader para renderizar uma imagem do computador do usuário na tela.'
        path='https://github.com/Gonzagadavid/meme-generator'
      />
      <ProjectCard
        title='Art Pixels' tec='js html css'
        description='Projeto de avaliação proposto durante o curso da trybe, após ser abordado conteúdos JavaScript sobre manipulação e criação de elementos do DOM.'
        path='https://github.com/Gonzagadavid/art-pixels'
      />
      <ProjectCard
        title='Letter Mistery' tec='js html css'
        description='Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática o aprendizado de criação de elementos HTML pelo JavaScript.'
        path='https://github.com/Gonzagadavid/letter-mistery'
      />
      <ProjectCard
        title='Lessons Learned' tec='html css'
        description='Primeiro projeto de avaliação da trybe após os fundamentos de html e css.'
        path='https://github.com/Gonzagadavid/Lessons-Learned'
      />
      <ProjectCard
        title='Portfólio' tec='html css'
        description='Página de portfólio com html e css, obedecendo os requisitos proposto.'
        path='https://github.com/Gonzagadavid/Gonzagadavid.github.io'
      />
    </div>
  )
}

export default TrybeProjects
