import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import './course.css'

const SantProjects = props => {
  return (
    <div className='course'>
      <h3>Projetos Sant'Ana</h3>
      <ProjectCard
        title='Instagram clone com MongoDB' tec='node mongo js'
        description='Neste projeto foi criado um diretório para executar como servidor e outro para funcionar como cliente (aplicação). Fazendo a comunicação com banco de dados e armazenando as imagens de uploads'
        path='https://github.com/Gonzagadavid/Instagram-clone-with-MongoDB'
      />
      <ProjectCard
        title='Bate-papo em tempo real' tec='node socket js'
        description='Projeto desenvolvido para comunicação bi-direcional utilizando websockets'
        path='https://github.com/Gonzagadavid/chat-real-time'
      />
      <ProjectCard
        title='Portal de notícias com MySQL' tec='node mysql js'
        description='Projeto que permite o usuário cadastrar notícias para serem exibidas na interface e armazenadas no banco de dados'
        path='https://github.com/Gonzagadavid/news-portal-with-MySql'
      />
      <ProjectCard
        title='MMORPG Game of Thrones com MongoDB' tec='node mongo js'
        description='Projeto desenvolvido para interatividade do usuário em uma aplicação através de um cadastramento, e evolução dos dados de acordo com a interação, sendo armazenados em um banco de dados'
        path='https://github.com/Gonzagadavid/mmorpg-Got-with-Mongodb'
      />
    </div>
  )
}

export default SantProjects
