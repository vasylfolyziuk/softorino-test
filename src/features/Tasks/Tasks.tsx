import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'flowbite-react';

import {
  addTask,
  editTask,
  removeTask,
  selectProjects
} from '../projects/projectsSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import NavBar from '../Navbar/NavBar';
import { Project, Task } from '../../dataStructure';
import TasksList from './TasksList';
import SaveTaskModal from './SaveTaskModal';

function Tasks() {  
  let { projectId } = useParams();
  const dispatch = useAppDispatch();
  const projects = useAppSelector(selectProjects);
  const [openAddNewTaskModal, setOpenAddNewTaskModal] = useState<boolean>(false);

  const project = projects.find((project: Project) => project.id === projectId);

  const handleCreate = (task: Task) => {
    dispatch(addTask({...task, projectId} as Task));
    setOpenAddNewTaskModal(false);
  }

  const handleEdit = (task: Task) => {
    dispatch(editTask(task));
  }

  const handleRemove = (id: string) => {
    dispatch(removeTask({id, projectId} as Task));
  }

  return (
    <div className="container mx-auto px-4">
      <NavBar />
      <div>
        {project?.id}
      </div>

      <div className='flex justify-items-end mt-4 mb-4'>
        <Button onClick={() => setOpenAddNewTaskModal(true)}>Add New Task</Button>
      </div>

      <TasksList
        tasks={project?.tasks as Task[]}
        edit={handleEdit}
        remove={handleRemove}
      />

      {openAddNewTaskModal && (
        <SaveTaskModal
          openModal={openAddNewTaskModal}
          setOpenModal={setOpenAddNewTaskModal}
          onConfirmSave={handleCreate}
        />
      )}
    </div>
  );
}

export default Tasks;
