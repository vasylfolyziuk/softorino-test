export interface User {
  id: string;
  email: string;
  password?: string;
  token?: string;
}

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