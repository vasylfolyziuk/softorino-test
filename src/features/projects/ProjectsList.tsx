import React from 'react';
import ProjectItem from './ProjectItem';
import { Project } from '../../dataStructure';

interface Props {
  projects: Project[];
  remove: (name: string) => void;
}

function ProjectsList(props: Props) {
  const {projects, remove} = props;

  return (
    <>
      {projects.map((project: Project, index: number) => (
        <ProjectItem
          key={project.name + index.toString()}
          name={project.name}
          title={project.title}
          remove={remove}
        />
      ))}
    </>
  );
}

export default ProjectsList;