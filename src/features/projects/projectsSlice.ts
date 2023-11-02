import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ProjectsState {
  value: string[];
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
    add: (state) => {
      state.value.push('test');
    },
  }
});

export const { add } = projectsSlice.actions;

export const selectProjects = (state: RootState) => state.projects.value;

export default projectsSlice.reducer;
