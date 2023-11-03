import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Project, Task } from '../../dataStructure';

export interface ProjectsState {
  value: Project[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ProjectsState = {
  value: [],
  status: 'idle',
};

const uuid = () => new Date().getTime().toString();

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      const {name, title} = action.payload;

      state.value.unshift({
        id: uuid(),
        name,
        title,
        tasks: [],
        comments: []
      });
    },
    editProject: (state, action: PayloadAction<Project>) => {
      const {id, name, title} = action.payload;

      const index = state.value.findIndex((project: Project) => project.id === id);

      if (index > -1) {
        state.value[index].name = name;
        state.value[index].title = title;
      }
    },
    removeProject: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const index = state.value.findIndex((project: Project) => project.id === id);

      if (index > -1) {
        state.value.splice(index, 1);
      }
    },
    addTask: (state, action: PayloadAction<Task>) => {
      const {projectId, name, done} = action.payload;
      const project = state.value.find((project: Project) => project.id === projectId);
      
      if (project) {
        project.tasks?.unshift({
          id: uuid(),
          projectId,
          name,
          done
        });
      }
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const {id, projectId, name, done} = action.payload;
      const project = state.value.find((project: Project) => project.id === projectId);

      if (project) {
        const task = project.tasks?.find(task => task.id === id);
        
        if (task) {
          task.name = name;
          task.done = done;
        }
      }
    },
    removeTask: (state, action: PayloadAction<Task>) => {
      const {id, projectId} = action.payload;
      const project = state.value.find((project: Project) => project.id === projectId);

      if (project) {
        const index = project.tasks?.findIndex((task: Task) => task.id === id);
        if (typeof index === 'number' && index > -1) {
          project.tasks?.splice(index, 1);
        }
      }
    },
  }
});

export const {
  addProject,
  editProject,
  removeProject,
  addTask,
  editTask,
  removeTask
} = projectsSlice.actions;

export const selectProjects = (state: RootState) => state.projects.value;

export default projectsSlice.reducer;
