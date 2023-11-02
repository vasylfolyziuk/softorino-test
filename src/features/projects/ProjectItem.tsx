import React, { useState } from 'react';
import DeleteProjectModal from './DeleteProjectModal';
import { Button, Table } from 'flowbite-react';
import SaveProjectModal from './SaveProjectModal';
import { Project } from '../../dataStructure';

interface Props {
  project: Project;
  save: (project: Project) => void;
  remove: (id: number) => void;
}

function ProjectItem(props: Props) {
  const {project, save, remove} = props;
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const onConfirmDelete = () => {
    remove(project.id);
    setOpenDeleteModal(false);
  }

  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {project.name}
        </Table.Cell>
        <Table.Cell>
          {project.title}
        </Table.Cell>
        <Table.Cell>
          <Button size='sm' className='inline-flex mr-4' onClick={() => setOpenEditModal(true)}>Edit</Button>
          <Button size='sm'  color="failure" className='inline-flex' onClick={() => setOpenDeleteModal(true)}>
            Delete
          </Button>
        </Table.Cell>
      </Table.Row>

      <SaveProjectModal
        openModal={openEditModal}
        project={project}
        setOpenModal={setOpenEditModal}
        onConfirmSave={save}
        editMode
      />
      
      <DeleteProjectModal
        openModal={openDeleteModal}
        setOpenModal={setOpenDeleteModal}
        onConfirmDelete={onConfirmDelete}
      />
    </>
  );
}

export default ProjectItem;