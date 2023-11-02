import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Project } from '../../dataStructure';

export interface ProjectsState {
  value: Project[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ProjectsState = {
  value: [],
  status: 'idle',
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Project>) => {
      const {name, title} = action.payload;

      state.value.unshift({
        id: new Date().getTime(),
        name,
        title
      });
    },
    edit: (state, action: PayloadAction<Project>) => {
      const {id, name, title} = action.payload;

      const index = state.value.findIndex((project: Project) => project.id === id);

      if (index > -1) {
        state.value[index].name = name;
        state.value[index].title = title;
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const index = state.value.findIndex((project: Project) => project.id === id);

      if (index > -1) {
        state.value.splice(index, 1);
      }
    },
  }
});

export const { add, edit, remove } = projectsSlice.actions;

export const selectProjects = (state: RootState) => state.projects.value;

export default projectsSlice.reducer;
