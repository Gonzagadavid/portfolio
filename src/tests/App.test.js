import { screen } from '@testing-library/dom';
import React from 'react';
import App from '../App';
import {
  COURSES_PROJECTS, OTHER_PROJECTS, PERSONAL_PROJECTS, keyWords, PERFIL_PHOTO,
} from './constants';
import renderWithRouter from './helpers/renderWithRouter';

describe('teste rotas e rederizacao da aplicacao', () => {
  window.scrollTo = jest.fn().mockImplementation((x) => x);
  const { history } = renderWithRouter(<App />);

  const skills = screen.getByRole('link', { name: 'Habilidades' });
  const personalProjects = screen.getByRole('link', { name: PERSONAL_PROJECTS });
  const coursesProjects = screen.getByRole('link', { name: COURSES_PROJECTS });
  const otherProjects = screen.getByRole('link', { name: OTHER_PROJECTS });
  const imagePerfil = screen.getByAltText(PERFIL_PHOTO);

  it('testa a rota e a rendeirzacao da pagina inicial', () => {
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
});
