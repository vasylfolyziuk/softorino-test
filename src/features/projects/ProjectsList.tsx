import React from 'react';
import ProjectItem from './ProjectItem';
import { Project } from '../../dataStructure';

interface Props {
  projects: Project[];
}

function ProjectsList(props: Props) {
  const {projects} = props;

  return (
    <>
      {projects.map((project: Project, index: number) => (
        <ProjectItem
          key={project.name + index.toString()}
          name={project.name}
          title={project.title}
        />
      ))}
    </>
  );
}

export default ProjectsList;