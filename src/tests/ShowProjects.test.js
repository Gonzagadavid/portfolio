import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import ShowProjects from '../components/ShowProjects';
import personalProjects from '../data/projects/personalProjects';

describe('Verifica a renderizacao e o funcionamento do componente ShowProject', () => {
  const { projects, titleCourse } = personalProjects;

  beforeEach(() => {
    render(<ShowProjects showProjects={personalProjects} />);
  });

  afterEach(cleanup);

  it('verifica se o titulo do curso e renderizado corretamente', () => {
    const titleTest = screen.getByRole('heading', { level: 2 });
    expect(titleTest).toBeInTheDocument();
    expect(titleTest).toHaveTextContent(titleCourse);
  });

  it('verifica se os projetos passados sao renderizado corretamente', () => {
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(projects.length);
    projects.forEach((project) => {
      const title = screen.getByRole('heading', { name: project.title });
      expect(title).toBeInTheDocument();
      const description = screen.getByText(project.description);
      expect(description).toBeInTheDocument();
    });
  });
});
