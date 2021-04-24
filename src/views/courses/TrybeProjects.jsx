import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import './course.css'

const TrybeProjects = props => {
  return (
    <div className='course'>
      <h3>Projetos Trybe</h3>
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
