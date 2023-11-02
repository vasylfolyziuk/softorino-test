import React from 'react';
import ProjectItem from './ProjectItem';
import { Project } from '../../dataStructure';
import { Table } from 'flowbite-react';

interface Props {
  projects: Project[];
  edit: (project: Project) => void;
  remove: (id: number) => void;
}

function ProjectsList(props: Props) {
  const {projects, edit, remove} = props;

  return (
    <>
      <Table>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
      <Table.Body className="divide-y">
        {projects.length > 0 && (
          <>
            {projects.map((project: Project, index: number) => (
              <ProjectItem
                key={project.name + index.toString()}
                project={project}
                save={edit}
                remove={remove}
              />
            ))}
          </>
        )}
      </Table.Body>
    </Table>
    {projects.length === 0 && (
      <div className='text-center border-slate-500 text-gray-400 mt-2'>No projects</div>
    )}
    </>
  );
}

export default ProjectsList;