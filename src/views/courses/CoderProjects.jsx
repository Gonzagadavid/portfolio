import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import './course.css'

const CoderProjects = props => {
  return (
    <div className='course'>
      <h3>Projetos Cod3r</h3>
      <ProjectCard
        title='Calculadora mac OS com ReacJS' tec='react js css'
        description='Este é um projeto desenvolvido com ReactJS, onde foi criado um componente para cada item, Tendo como referencia a calculadora o sistema operacional do mac os'
        path='https://github.com/Gonzagadavid/calculator-mac-OS-with-ReactJS'
      />
      <ProjectCard
        title='Palavras mais faladas com JavaScript Vanilla' tec='js'
        description='Neste projeto foi fornecido as legendas de uma série de televisão e foram organizada as palavras com a quantidade de vezes em que foram pronunciadas e postado em um arquivo json'
        path='https://github.com/Gonzagadavid/most-spoken-words'
      />
    </div>
  )
}

export default CoderProjects
