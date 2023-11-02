import React, { useState } from 'react';

import CreateProjectForm from './CreateProjectForm';
import {
  add,
  selectProjects
} from './projectsSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ProjectsList from './ProjectsList';

export function Projects() {  
  const dispatch = useAppDispatch();
  const projects = useAppSelector(selectProjects);

  const [name, setName] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  const handleCreate = () => {
    dispatch(add({name, title}));
    setName('');
    setTitle('');
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Projects
      </h1>
      <div>
        <CreateProjectForm 
          name={name}
          title={title}
          onChangeName={setName}
          onChangeTitle={setTitle}
          save={handleCreate}
        />
      </div>
      <div>
        <ProjectsList
          projects={projects}
        />
      </div>
    </div>
  );
}
