import { Button, Checkbox, Label, Modal, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';
import { Task } from '../../dataStructure';

interface Props {
  openModal: boolean;
  task?: Task;
  editMode?: boolean;
  setOpenModal: (open: boolean) => void;
  onConfirmSave: (task: Task) => void;
}

function SaveTaskModal(props: Props) {
  const {
    openModal,
    task,
    editMode,
    setOpenModal,
    onConfirmSave
  } = props;

  const [name, setName] = useState<string>(editMode ? task?.name || '' : '');
  const [done, setDone] = useState<boolean>(editMode ? task?.done || false : false);

  const onSave = () => {
    onConfirmSave(editMode && task ? {
      id: task.id, projectId: task.projectId, name, done
    } : {name, done} as Task );

    setOpenModal(false);
  }

  return (
    <Modal
      show={openModal}
      onClose={() => setOpenModal(false)}
    >
      <Modal.Header>
        {editMode ? 'Edit Task' : 'Create New Task'}
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
        <div className="mt-4 block flex items-center gap-2">
          <Checkbox id="completed" checked={done} onChange={(e) => setDone(e.target.checked)}/>
          <Label htmlFor="completed">Completed</Label>
        </div>
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

export default SaveTaskModal;