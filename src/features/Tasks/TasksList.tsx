import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../../dataStructure';
import { Table } from 'flowbite-react';

interface Props {
  tasks: Task[];
  edit: (task: Task) => void;
  remove: (id: string) => void;
}

function TasksList(props: Props) {
  const {tasks = [], edit, remove} = props;

  return (
    <>
      <Table>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Completed</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
      <Table.Body className="divide-y">
        {tasks?.length > 0 && (
          <>
            {tasks.map((task: Task) => (
              <TaskItem
                key={task.id}
                task={task}
                save={edit}
                remove={remove}
              />
            ))}
          </>
        )}
      </Table.Body>
    </Table>
    {tasks?.length === 0 && (
      <div className='text-center border-slate-500 text-gray-400 mt-2'>No tasks</div>
    )}
    </>
  );
}

export default TasksList;