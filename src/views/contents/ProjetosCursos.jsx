import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MenuCursos from '../courses/MenuCursos'
import ProjetosContent from '../courses/ProjetosContent'
import './contents.css'

const ProjetosCursos = props => {
  return (
    <div className='contents'>
      <h2>Projetos desenvolvidos durante cursos</h2>
      <Router>
        <MenuCursos />
        <ProjetosContent />
      </Router>
    </div>
  )
}

export default ProjetosCursos
