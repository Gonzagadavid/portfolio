import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import './course.css'

const DIOProjects = props => {
  return (
    <div className='course'>
      <h3>Projetos Digital Innovation One</h3>
      <ProjectCard
        title='Projeto previsão do tempo com angular' tec='ts angular css'
        description='Projeto de previsão do tempo de acordo com a localidade escolhida pelo usiario utilizando API'
        path='https://github.com/Gonzagadavid/previsao-do-tempo'
      />
      <ProjectCard
        title='Projeto Gerenciador de cursos com angular' tec='ts angular css'
        description='Projeto de controle ce curso e preços através de tabela'
        path='https://github.com/Gonzagadavid/course-manager-Angular'
      />
      <ProjectCard
        title='Genius Game' tec='js html css'
        description='Projeto de jogo com cadastro do usuario armazenando a maior pontuação no local storage'
        path='https://github.com/Gonzagadavid/genius_game'
      />
      <ProjectCard
        title='Snake Game' tec='js html css'
        description='Projeto de jogo onde foi possivel adquirir maior conhecimento acerca de canvas'
        path='https://github.com/Gonzagadavid/snake-game'
      />
      <ProjectCard
        title='API Coins' tec='js html css'
        description='Projeto para compras de coins através de api'
        path='https://github.com/Gonzagadavid/-API-Coin-Market-Cap'
      />
      <ProjectCard
        title='Recriando a interface do NetFlix' tec='js html css'
        description='Projeto de clone da interface do netflix'
        path='https://github.com/Gonzagadavid/Interface-Netflix'
      />
      <ProjectCard
        title='Recriando a página inicial do instagram' tec='js html css'
        description='Projeto de clone da página inicial do instagram'
        path='https://github.com/Gonzagadavid/paginainstagram'
      />
    </div>
  )
}

export default DIOProjects
