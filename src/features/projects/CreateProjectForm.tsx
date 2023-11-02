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
    <div className='flex'>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => onChangeName(e.target.value)}
      />
      <input 
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => onChangeTitle(e.target.value)}
      />
      <button onClick={save}>Create</button>
    </div>
  );
}

export default CreateProjectForm;