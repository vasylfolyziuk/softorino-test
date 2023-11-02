import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import React from 'react';

interface Props {
  name: string;
  title: string;
  onChangeName: (name: string) => void;
  onChangeTitle: (title: string) => void;
  save: () => void;
}

function CreateProjectForm(props: Props) {
  const {name, title, onChangeName, onChangeTitle, save} = props;

  return (
    <form className="flex max-w-md flex-col gap-4" onSubmit={save}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Name" />
        </div>
        <TextInput
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => onChangeName(e.target.value)}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Title" />
        </div>
        <Textarea
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => onChangeTitle(e.target.value)}
          rows={4}
          required
        />
      </div>
      <Button color="light" onClick={save}>Create</Button>
    </form>
  );
}

export default CreateProjectForm;