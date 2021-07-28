import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CourseMenu from '../courses/CourseMenu';
import ProjetosContent from '../courses/ProjetosContent';
import './contents.css';

const ProjetosCursos = () => (
  <div className="contents">
    <h2>Projetos desenvolvidos durante cursos</h2>
    <Router>
      <CourseMenu />
      <ProjetosContent />
    </Router>
  </div>
);

export default ProjetosCursos;
