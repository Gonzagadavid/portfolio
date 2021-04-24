import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Image'
import './Menu.css'
import Foto from '../../images/perfil.jpg'
import Contact from '../Contact'

const Menu = props => {
  return (
    <div className='Menu'>
      <nav>
        <Link to='/'><Image src={Foto} alt='foto de David' /></Link>
        <Contact path='https://github.com/Gonzagadavid' text='GitHub' icon='github' />
        <Contact path='https://www.linkedin.com/in/david-gonzaga/' text='LinkedIn' icon='linkedin' />
        <h4>gonzagadaviddev@gmail.com</h4>
        <ul>
          <li><Link to='/habilidades'>Habilidades</Link></li>
          <li><Link to='/projetos_pessoais'>Projetos de iniciativa pessoal</Link></li>
          <li><Link to='/projetos_cursos'>Projetos desenvolvidos durante cursos</Link></li>
          <li><Link to='/outros_projetos'>Outros projetos</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
