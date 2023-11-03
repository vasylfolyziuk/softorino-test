export interface Comment {
  id: string;
  projectId: string;
  name: string;
  done: boolean;
}

export interface Task {
  id: string;
  projectId: string;
  name: string;
  done: boolean;
}

export interface Project {
  id: string;
  name: string;
  title: string;
  tasks?: Task[];
  comments?: Comment[];
}