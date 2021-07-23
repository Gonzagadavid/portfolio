import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ScrollToMiddle from '../../functions/ScrollToMiddle'
import Initial from './Initial'
import ShowProjects from '../../components/ShowProjects';
import cod3rProjects from '../../data/projects/cod3rProjects';
import dioProjects from '../../data/projects/dioProjects';
import santProjects from '../../data/projects/santProjects';
import serFrontendProjects from '../../data/projects/serFrontendProjects';
import trybeProjects from '../../data/projects/trybeProjects';
import '../contents/contents.css'

const ProjetosContent = props => {
  return (
    <div>
      <Switch>
        <Route path='/projetos_cursos/projetos-trybe'>
          <ScrollToMiddle />
          <ShowProjects showProjects={trybeProjects} />
        </Route>
        <Route path='/projetos_cursos/projetos-dio'>
          <ScrollToMiddle />
          <ShowProjects showProjects={dioProjects} />
        </Route>
        <Route path='/projetos_cursos/projetos-coder'>
          <ScrollToMiddle />
          <ShowProjects showProjects={cod3rProjects} />
        </Route>
        <Route path='/projetos_cursos/projetos-serfrentend'>
          <ScrollToMiddle />
          <ShowProjects showProjects={serFrontendProjects} />
        </Route>
        <Route path='/projetos_cursos/projetos-santana'>
          <ScrollToMiddle />
          <ShowProjects showProjects={santProjects} />
        </Route>
        <Route path='/'>
          <Initial />
        </Route>
      </Switch>
    </div>
  )
}

export default ProjetosContent
