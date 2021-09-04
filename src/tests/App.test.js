import { fireEvent, screen } from '@testing-library/dom';
import { cleanup } from '@testing-library/react';
import React from 'react';
import App from '../App';
import { hardSkills, softSkills } from '../data/lists/skillsList';
import {
  COURSES_PROJECTS, OTHER_PROJECTS, PERSONAL_PROJECTS, keyWords, PERFIL_PHOTO, softSkillsTitle, hardSkillsTitle,
} from './constants';
import renderWithRouter from './helpers/renderWithRouter';

describe('teste rotas e rederizacao da pagina inicial e a de habilidades', () => {
  window.scrollTo = jest.fn().mockImplementation((x) => x);

  const checkList = (list) => list.forEach((itemList) => {
    const item = screen.getByText(itemList);
    expect(item).toBeInTheDocument();
    expect(item.tagName).toBe('LI');
    expect(item.parentElement.tagName).toBe('UL');
  });

  afterEach(cleanup);
  it('testa a rota e a rendeirzacao da pagina inicial', () => {
    const { history } = renderWithRouter(<App />);

    const skills = screen.getByRole('link', { name: 'Habilidades' });
    const personalProjects = screen.getByRole('link', { name: PERSONAL_PROJECTS });
    const coursesProjects = screen.getByRole('link', { name: COURSES_PROJECTS });
    const otherProjects = screen.getByRole('link', { name: OTHER_PROJECTS });
    const imagePerfil = screen.getByAltText(PERFIL_PHOTO);

    expect(history.location.pathname).toBe('/');

    expect(skills).toBeInTheDocument();
    expect(personalProjects).toBeInTheDocument();
    expect(coursesProjects).toBeInTheDocument();
    expect(otherProjects).toBeInTheDocument();
    expect(imagePerfil).toBeInTheDocument();

    const nameTitle = screen.getByRole('heading', { level: 1 });

    expect(nameTitle).toBeInTheDocument();
    expect(nameTitle).toHaveTextContent('David Gonzaga da Silva');

    keyWords.forEach((word) => {
      const strongWord = screen.getByText(word);
      expect(strongWord).toBeInTheDocument();
      expect(strongWord.tagName).toBe('STRONG');
    });
  });

  it('verifica a rota e a renderizacao da pagina de habilidades', () => {
    const { history } = renderWithRouter(<App />);

    const skills = screen.getByRole('link', { name: 'Habilidades' });
    const personalProjects = screen.getByRole('link', { name: PERSONAL_PROJECTS });
    const coursesProjects = screen.getByRole('link', { name: COURSES_PROJECTS });
    const otherProjects = screen.getByRole('link', { name: OTHER_PROJECTS });
    const imagePerfil = screen.getByAltText(PERFIL_PHOTO);

    expect(history.location.pathname).toBe('/');

    expect(skills).toBeInTheDocument();
    expect(personalProjects).toBeInTheDocument();
    expect(coursesProjects).toBeInTheDocument();
    expect(otherProjects).toBeInTheDocument();
    expect(imagePerfil).toBeInTheDocument();

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
});
