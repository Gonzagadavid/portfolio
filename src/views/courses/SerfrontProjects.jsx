import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import './course.css'

const SerfrontProjects = props => {
  return (
    <div className='course'>
      <h3>Projetos SerFrontend</h3>
      <ProjectCard
        title='Lista de tarefas com JavaScript Puro' tec='js html css'
        description='Projeto com padrão MVC e ES Modules, utilizando o json-server para desenvolver requisições de API´s'
        path='https://github.com/Gonzagadavid/todo-list'
      />
      <ProjectCard
        title='Lista de alunos (Model-View-Controller) com JavaScript Puro' tec='js html css'
        description='Projeto feito durante o curso de JavaScript da SerFrontend, seguindo o padrão MVC'
        path='https://github.com/Gonzagadavid/student-list-MVC'
      />
    </div>
  )
}

export default SerfrontProjects
