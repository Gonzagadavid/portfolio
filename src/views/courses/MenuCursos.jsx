import React from 'react';
import { Link } from 'react-router-dom';
import '../contents/contents.css';
import './MenuCursos.css';
import Trybe from '../../images/trybe.jpeg';
import DIO from '../../images/Dio.png';
import Coder from '../../images/coder.png';
import Sant from '../../images/node.png';
import SerFront from '../../images/serFrontend.jpeg';

const MenuCursos = () => (
  <div className="MenuCursos">
    <nav>
      <ul>
        <li>
          <Link to="/projetos_cursos/projetos-trybe">
            <img src={Trybe} alt="logo da trybe" />
            Trybe
          </Link>
        </li>
        <li>
          <Link to="/projetos_cursos/projetos-coder">
            <img src={Coder} alt="logo da coder" />
            Cod3r
          </Link>
        </li>
        <li>
          <Link to="/projetos_cursos/projetos-serfrentend">
            <img src={SerFront} alt="logo da serfrontend" />
            SerFrontend
          </Link>
        </li>
        <li>
          <Link to="/projetos_cursos/projetos-santana">
            <img src={Sant} alt="logo do nodeJS" />
            Sant'Ana
          </Link>
        </li>
        <li>
          <Link to="/projetos_cursos/projetos-dio">
            <img src={DIO} alt="logo da digital innovation one" />
            DIO
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default MenuCursos;
