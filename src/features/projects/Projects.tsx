import React, { useState } from 'react';

import {
  addProject,
  editProject,
  removeProject,
  selectProjects
} from './projectsSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ProjectsList from './ProjectsList';
import { Button } from 'flowbite-react';
import SaveProjectModal from './SaveProjectModal';
import { Project } from '../../dataStructure';

function Projects() {  
  const dispatch = useAppDispatch();
  const projects = useAppSelector(selectProjects);

  const [openAddNewProjectModal, setAddNewProjectModal] = useState<boolean>(false);

  const handleCreate = (project: Project) => {
    dispatch(addProject(project));
    setAddNewProjectModal(false);
  }

  const handleEdit = (project: Project) => {
    dispatch(editProject(project));
  }

  const handleRemove = (id: string) => {
    dispatch(removeProject(id));
  }

  return (
    <div className='mt-10'>
      <div className='flex justify-items-end mt-4 mb-4'>
        <Button onClick={() => setAddNewProjectModal(true)}>Add New Project</Button>
      </div>
      
      <ProjectsList
        projects={projects}
        edit={handleEdit}
        remove={handleRemove}
      />

      {openAddNewProjectModal && (
        <SaveProjectModal
          openModal={openAddNewProjectModal}
          setOpenModal={setAddNewProjectModal}
          onConfirmSave={handleCreate}
        />
      )}
    </div>
  );
}

export default Projects;
