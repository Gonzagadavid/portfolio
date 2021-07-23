import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Habilidades from '../../views/contents/Habilidades'
import Home from '../../views/contents/Home'
import ProjetosCursos from '../../views/contents/ProjetosCursos'
import './Content.css'
import Header from '../Header'
import ShowProjects from '../ShowProjects';
import otherProjects from '../../data/projects/otherProjects';
import personalProjects from '../../data/projects/personalProjects';


const Content = props => {
  return (
    <main className='Content'>
      <Header text='David Gonzaga da Silva' />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/habilidades' component={Habilidades} />
        <Route 
          path='/projetos_pessoais' 
          render={(props) =>  <ShowProjects {...props} showProjects={personalProjects}/>}
        />
        <Route path='/projetos_cursos' component={ProjetosCursos} />
        <Route 
          path='/outros_projetos'
          render={(props) => <ShowProjects {...props} showProjects={otherProjects} />}
        />
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </main>
  )
}

export default Content
