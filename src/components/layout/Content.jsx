import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Habilidades from '../../views/contents/Habilidades'
import Home from '../../views/contents/Home'
import OutrosProjetos from '../../views/contents/OutrosProjetos'
import ProjetosCursos from '../../views/contents/ProjetosCursos'
import ProjetosPessoais from '../../views/contents/ProjetosPessoais'
import './Content.css'
import Header from '../Header'
i// mport NotFound from '../../views/contents/NotFound'

const Content = props => {
  return (
    <main className='Content'>
      <Header text='David Gonzaga da Silva' />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/habilidades'>
          <Habilidades />
        </Route>
        <Route path='/projetos_pessoais'>
          <ProjetosPessoais />
        </Route>
        <Route path='/projetos_cursos'>
          <ProjetosCursos />
        </Route>
        <Route path='/outros_projetos'>
          <OutrosProjetos />
        </Route>
        <Route path='*'>
          <Home />
        </Route>
      </Switch>
    </main>
  )
}

export default Content
