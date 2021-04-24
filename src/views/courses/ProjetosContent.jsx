import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ScrollToMiddle from '../../functions/ScrollToMiddle'
import DIOProjects from './DIOProjects'
import TrybeProjects from './TrybeProjects'
import CoderProjects from './CoderProjects'
import '../contents/contents.css'
import SerfrontProjects from './SerfrontProjects'
import Initial from './Initial'
import SantProjects from './SantProjects'

const ProjetosContent = props => {
  return (
    <div>
      <Switch>
        <Route path='/projetos_cursos/projetos-trybe'>
          <ScrollToMiddle />
          <TrybeProjects />
        </Route>
        <Route path='/projetos_cursos/projetos-dio'>
          <ScrollToMiddle />
          <DIOProjects />
        </Route>
        <Route path='/projetos_cursos/projetos-coder'>
          <ScrollToMiddle />
          <CoderProjects />
        </Route>
        <Route path='/projetos_cursos/projetos-serfrentend'>
          <ScrollToMiddle />
          <SerfrontProjects />
        </Route>
        <Route path='/projetos_cursos/projetos-santana'>
          <ScrollToMiddle />
          <SantProjects />
        </Route>
        <Route path='/'>
          <Initial />
        </Route>
      </Switch>
    </div>
  )
}

export default ProjetosContent
