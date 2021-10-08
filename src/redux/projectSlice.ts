/* eslint-disable camelcase */
import axios from 'axios';

// userStore.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiGetProjects, apiAddOrUpdateProject, apiDeleteProjectById } from '../lib/apiProject';
import { setupAxiosInterceptors } from '../lib/apiUser';

// axios를 통한 통신
export const getProjectList = createAsyncThunk(
  'GET_PROJECTLIST', 
  async () => {
    setupAxiosInterceptors();
    const result = await apiGetProjects().then(response => {
      return response.data;
    });

    return result;
  });  
export const handleProjectList = createAsyncThunk(
  'UPDATE_PROJECTLIST', 
  async (data:Project) => {
    setupAxiosInterceptors();
    const result = await apiAddOrUpdateProject(data).then(response => {
      return response.data;
    });
    console.log('updateResult', result);
    return result;
  });
export const deleteProjectList = createAsyncThunk(
  'UPDATE_PROJECTLIST', 
  async (id:string) => {
    setupAxiosInterceptors();
    const result = await apiDeleteProjectById(id).then(response => {
      //return console.log('apiDeleteProject ============ ', response.data);
      return response.data;
    });
    console.log('deleteResult', result);
    return result;
  });


// state 타입 지정
interface Project {
  id: string
  name: string
  scene_name: string
  application_id: string
  sms_number1: string
  sms_number2: string
  note: string
  url: string
  user_id: any
}

interface Form {
  type: string
  mode: string
  visible: boolean
}

interface State {
  project: Project[]
  form: Form
}

const initialState: State = {
  project: [],
  form: {
    type: '',
    mode: 'add',
    visible: false
  }
};

const projectSlice = createSlice({
  name: 'project', // 액션타입의 이름이 중복되는것을 막기위한 네임값
  initialState, // 리듀서에서 사용되는 initialState
  reducers: { // 리듀서
    addProject(state, action: PayloadAction<Project>) { 
      state.project.push(action.payload);
      // immer가 내장 되어있어 알아서 불변성을 지켜준다.
      handleProjectList(action.payload);
    },
    updateProject(state, action: PayloadAction<Project>) {
      const updateProject = state.project.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        } else return item;
      });
      state.project = updateProject;
    },
    deleteProject(state, action: PayloadAction<Project>) {
      const newProject = state.project.filter((list) => list.id !== action.payload.id);
      state.project = newProject;
    },
    openProject(state, action: PayloadAction<boolean>) {
      state.form.visible = action.payload;
    },
    setForm(state, action: PayloadAction<Form>) {
      state.form = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjectList.fulfilled, (state, action) => {
        const projectList = [...action.payload];
        state.project = projectList;
      });
  },
});

export default projectSlice.reducer;
export const { addProject, updateProject, deleteProject, openProject, setForm } = projectSlice.actions;
