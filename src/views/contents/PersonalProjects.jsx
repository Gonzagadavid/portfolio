import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import './contents.css'
import personalProjects from '../../data/personalProjects'
   

const PesonalProjects = props => {
  return (
    <div className='contents'>
      <h2>Projetos de Iniciativa Pessoal</h2>
      {
        personalProjects.map(({ title, tec, description, path }) => 
          <ProjectCard title={title} tec={tec} description={description} path={path}/>)
      }
    </div>
  )
}

export default PesonalProjects
