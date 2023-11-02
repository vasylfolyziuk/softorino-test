import { Button, Label, Modal, TextInput, Textarea } from 'flowbite-react';
import CreateProjectForm from './CreateProjectForm';
import { useState } from 'react';
import { Project } from '../../dataStructure';

interface Props {
  openModal: boolean;
  project?: Project;
  editMode?: boolean;
  setOpenModal: (open: boolean) => void;
  onConfirmSave: (project: Project) => void;
}

function SaveProjectModal(props: Props) {
  const {
    openModal,
    project,
    editMode,
    setOpenModal,
    onConfirmSave
  } = props;

  const [name, setName] = useState<string>(editMode ? project?.name || '' : '');
  const [title, setTitle] = useState<string>(editMode ? project?.title || '' : '');

  const onSave = () => {
    onConfirmSave(editMode && project ? {id: project.id, name, title} : {name, title} as Project );
    setName('');
    setTitle('');
  }

  return (
    <Modal
      show={openModal}
      onClose={() => setOpenModal(false)}
    >
      <Modal.Header>
        {editMode ? 'Edit Project' : 'Create New Project'}
      </Modal.Header>
      <Modal.Body>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Name" />
        </div>
        <TextInput
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className="mb-2 block">
          <Label htmlFor="title" value="Title" />
        </div>
        <Textarea
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          rows={4}
          required
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onSave}>
          {editMode ? 'Edit' : 'Create'}
        </Button>
        <Button color="gray" onClick={() => setOpenModal(false)}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SaveProjectModal;