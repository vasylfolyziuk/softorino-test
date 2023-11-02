import React from 'react';

interface Props {
  name: string;
  title: string;
}

function ProjectItem(props: Props) {
  const {name, title} = props;

  return (
    <div className='flex mr-6'>
      <div>{name}</div>
      <div>{title}</div>
    </div>
  );
}

export default ProjectItem;