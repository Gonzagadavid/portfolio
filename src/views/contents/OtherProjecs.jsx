import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import otherProjects from '../../data/otherProjects';
import './contents.css'


const OtherProjecs = props => {
  return (
    <div className='contents'>
      <h2>Outros Projetos</h2>
      {
      otherProjects.map(({ title, tec, description, path }) => 
        <ProjectCard title={title} tec={tec} description={description} path={path}/>)
      }
    </div>
  )
}

export default OtherProjecs
