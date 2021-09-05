import cod3rProjects from '../../data/projects/cod3rProjects';
import trybeProjects from '../../data/projects/trybeProjects';
import serFrontendProjects from '../../data/projects/serFrontendProjects';
import santProjects from '../../data/projects/santProjects';
import dioProjects from '../../data/projects/dioProjects';

const keyWords = [
  'São José dos Campos - São Paulo - Brasil', 'era da informação', 'desenvolvimento web',
  'metologias ágeis das empresas', 'tecnologia',
];

const softSkillsTitle = 'Habilidades que mais me orgulho';
const hardSkillsTitle = 'Outras habilidades';

const PERSONAL_PROJECTS = 'Projetos de iniciativa pessoal';

const COURSES_PROJECTS = 'Projetos desenvolvidos durante cursos';

const OTHER_PROJECTS = 'Outros projetos';

const PERFIL_PHOTO = 'foto de David';

const NOME_TITLE = 'David Gonzaga da Silva';

const NotFoundMsg = 'Página não encontrada';

const courses = [
  { linkCourse: 'Trybe', projectsCourse: trybeProjects, path: '/projetos_cursos/projetos-trybe' },
  { linkCourse: 'Cod3r', projectsCourse: cod3rProjects, path: '/projetos_cursos/projetos-coder' },
  { linkCourse: 'SerFrontend', projectsCourse: serFrontendProjects, path: '/projetos_cursos/projetos-serfrentend' },
  { linkCourse: "Sant'Ana", projectsCourse: santProjects, path: '/projetos_cursos/projetos-santana' },
  { linkCourse: 'DIO', projectsCourse: dioProjects, path: '/projetos_cursos/projetos-dio' },
];

export {
  keyWords, PERSONAL_PROJECTS, COURSES_PROJECTS, OTHER_PROJECTS, PERFIL_PHOTO,
  softSkillsTitle, hardSkillsTitle, NOME_TITLE, courses, NotFoundMsg,
};
