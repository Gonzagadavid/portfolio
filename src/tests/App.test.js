import { fireEvent, screen, waitFor } from '@testing-library/dom';
import { cleanup } from '@testing-library/react';
import React from 'react';
import App from '../App';
import { hardSkills, softSkills } from '../data/lists/skillsList';
import otherProjects from '../data/projects/otherProjects';
import personalProjects from '../data/projects/personalProjects';
import {
  COURSES_PROJECTS, OTHER_PROJECTS, PERSONAL_PROJECTS, keyWords, PERFIL_PHOTO, softSkillsTitle,
  hardSkillsTitle, NOME_TITLE, courses,
} from './constants';
import renderWithRouter from './helpers/renderWithRouter';

afterEach(cleanup);

describe('teste rotas e rederizacao da aplicacao', () => {
  window.scrollTo = jest.fn().mockImplementation((x) => x);

  const checkList = (list) => list.forEach((itemList) => {
    const item = screen.getByText(itemList);
    expect(item).toBeInTheDocument();
    expect(item.tagName).toBe('LI');
    expect(item.parentElement.tagName).toBe('UL');
  });

  const checkProjects = (projectList) => projectList.forEach(({ title, description }) => {
    const projectTile = screen.getByText(title);
    const projectDescription = screen.getByText(description);

    expect(projectTile).toBeInTheDocument();
    expect(projectTile.tagName).toBe('H4');
    expect(projectDescription).toBeInTheDocument();
    expect(projectDescription.tagName).toBe('EM');
  });

  afterEach(cleanup);
  it('testa a rota e a rendeirzacao da pagina inicial', () => {
    const { history } = renderWithRouter(<App />);

    const skills = screen.getByRole('link', { name: 'Habilidades' });
    const personalProjectsLink = screen.getByRole('link', { name: PERSONAL_PROJECTS });
    const coursesProjects = screen.getByRole('link', { name: COURSES_PROJECTS });
    const otherProjectsLink = screen.getByRole('link', { name: OTHER_PROJECTS });
    const imagePerfil = screen.getByAltText(PERFIL_PHOTO);

    expect(history.location.pathname).toBe('/');

    expect(skills).toBeInTheDocument();
    expect(personalProjectsLink).toBeInTheDocument();
    expect(coursesProjects).toBeInTheDocument();
    expect(otherProjectsLink).toBeInTheDocument();
    expect(imagePerfil).toBeInTheDocument();

    const nameTitle = screen.getByRole('heading', { level: 1 });

    expect(nameTitle).toBeInTheDocument();
    expect(nameTitle).toHaveTextContent(NOME_TITLE);

    keyWords.forEach((word) => {
      const strongWord = screen.getByText(word);
      expect(strongWord).toBeInTheDocument();
      expect(strongWord.tagName).toBe('STRONG');
    });
  });

  it('verifica a rota e a renderizacao da pagina de habilidades', () => {
    const { history } = renderWithRouter(<App />);

    const skills = screen.getByRole('link', { name: 'Habilidades' });

    expect(history.location.pathname).toBe('/');
    expect(skills).toBeInTheDocument();

    fireEvent.click(skills);

    expect(history.location.pathname).toBe('/habilidades');

    const title = screen.getByRole('heading', { level: 2 });
    const subTitles = screen.getAllByRole('heading', { level: 3 });

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Habilidades');
    expect(subTitles).toHaveLength(2);
    expect(subTitles[0]).toHaveTextContent(softSkillsTitle);
    expect(subTitles[1]).toHaveTextContent(hardSkillsTitle);

    checkList(softSkills);
    checkList(hardSkills);
  });

  it('verifica a renderizacao da pagina de projetos pessoais', async () => {
    const { history } = renderWithRouter(<App />);
    const { titleCourse, projects } = personalProjects;

    expect(history.location.pathname).toBe('/');

    const personalProjectsLink = screen.getByRole('link', { name: PERSONAL_PROJECTS });
    expect(personalProjectsLink).toBeInTheDocument();

    fireEvent.click(personalProjectsLink);

    await waitFor(() => expect(history.location.pathname).toBe('/projetos_pessoais'));

    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(titleCourse);

    checkProjects(projects);
  });

  it('verifica a renderizacao da pagina de projetos feitos durante o curso', () => {
    const { history } = renderWithRouter(<App />);

    expect(history.location.pathname).toBe('/');

    const coursesProjects = screen.getByRole('link', { name: COURSES_PROJECTS });
    expect(coursesProjects).toBeInTheDocument();

    fireEvent.click(coursesProjects);

    expect(history.location.pathname).toBe('/projetos_cursos');

    courses.forEach(async ({ linkCourse, projectsCourse, path }) => {
      const link = screen.getByText(linkCourse);
      expect(link.tagName).toBe('A');
      expect(link).toBeInTheDocument();

      fireEvent.click(link);

      await waitFor(() => expect(history.location.pathname).toBe(path));

      checkProjects(projectsCourse);
    });
  });

  it('verifica a renderizacao da pagina de outros projetos', async () => {
    const { history } = renderWithRouter(<App />);
    const { titleCourse, projects } = otherProjects;

    expect(history.location.pathname).toBe('/');

    const otherProjectsLink = screen.getByRole('link', { name: OTHER_PROJECTS });
    expect(otherProjectsLink).toBeInTheDocument();

    fireEvent.click(otherProjectsLink);

    await waitFor(() => expect(history.location.pathname).toBe('/outros_projetos'));

    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(titleCourse);

    checkProjects(projects);
  });
});
