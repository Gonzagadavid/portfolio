import React from 'react';
import { shape, string, arrayOf } from 'prop-types';
import ProjectCard from './ProjectCard';
import '../views/contents/contents.css';

const ShowProjects = ({ showProjects: { projects, titleCourse } }) => (
  <div className="contents">
    <h2>{titleCourse}</h2>
    {
        projects.map(({
          title, tec, description, path,
        }) => <ProjectCard title={title} tec={tec} description={description} path={path} key={path} />)
      }
  </div>
);

export default ShowProjects;

ShowProjects.propTypes = {
  showProjects: shape({
    titleCourse: string,
    projects: arrayOf(shape({
      title: string,
      tec: string,
      description: string,
      path: string,
    })),
  }).isRequired,
};
