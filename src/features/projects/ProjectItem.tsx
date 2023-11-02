import React, { useState } from 'react';
import DeleteProjectModal from './DeleteProjectModal';
import { Button } from 'flowbite-react';

interface Props {
  name: string;
  title: string;
  remove: (name: string) => void;
}

function ProjectItem(props: Props) {
  const {name, title, remove} = props;
  const [openModal, setOpenModal] = useState(false);

  const onConfirmDelete = () => {
    remove(name);
    setOpenModal(false);
  }

  return (
    <div className='flex mr-6'>
      <div>{name}</div>
      <div>{title}</div>

      <Button color="failure" onClick={() => setOpenModal(true)}>
        Delete
      </Button>

      <DeleteProjectModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        onConfirmDelete={onConfirmDelete}
      />
      
    </div>
  );
}

export default ProjectItem;