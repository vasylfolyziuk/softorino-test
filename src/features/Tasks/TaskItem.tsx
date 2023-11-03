import React, { useState } from 'react';
import { Button, Table } from 'flowbite-react';
import DeleteTaskModal from './DeleteTaskModal';
import SaveTaskModal from './SaveTaskModal';
import { Task } from '../../dataStructure';

interface Props {
  task: Task;
  save: (task: Task) => void;
  remove: (id: string) => void;
}

function TaskItem(props: Props) {
  const {task, save, remove} = props;
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const onConfirmDelete = () => {
    remove(task.id);
    setOpenDeleteModal(false);
  }

  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {task.name}
        </Table.Cell>
        <Table.Cell>
         {task.done ? 'done' : '-'}
        </Table.Cell>
        <Table.Cell>
          <Button size='sm' className='inline-flex mr-4' onClick={() => setOpenEditModal(true)}>Edit</Button>
          <Button size='sm'  color="failure" className='inline-flex' onClick={() => setOpenDeleteModal(true)}>
            Delete
          </Button>
        </Table.Cell>
      </Table.Row>

      {openEditModal && (
        <SaveTaskModal
          openModal={openEditModal}
          task={task}
          setOpenModal={setOpenEditModal}
          onConfirmSave={save}
          editMode
        />
      )}
      
      <DeleteTaskModal
        openModal={openDeleteModal}
        setOpenModal={setOpenDeleteModal}
        onConfirmDelete={onConfirmDelete}
      />
    </>
  );
}

export default TaskItem;