import axios from 'axios';

// userStore.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

// axios를 통한 통신
export const getList = createAsyncThunk('GET_PROJECTLIST', async () => {
  const response = await axios.get('http://localhost:8000/list');
  return response.data;
});

// state 타입 지정
interface Project {
  projectName: string;
  scene: string;
  aplicationId: number | string;
  sms?: string[];
  note?: string;
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
const demoData = {
  key: '1',
  projectName: 'PJ_01',
  scene: 'PJ_01',
  aplicationId: '10',
  sms: ['010-0000-0000', '010-1111-1111'],
  regDate: '2021-09-09 16:48',
  url: '/ht-static/scenes/PJ_01/PJ_01.json',
  userId: 'User_01',
  projectId: '35',
  note: 'blabla'
};
const initialState: State = {
  project: [demoData],
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
    },
    updateProject(state, action: PayloadAction<Project>) {
      const updateProject = state.project.map((item) => {
        if (item.aplicationId === action.payload.aplicationId) {
          return { ...item, ...action.payload };
        } else return item;
      });
      state.project = updateProject;
    },
    deleteProject(state, action: PayloadAction<Project>) {
      const newProject = state.project.filter((list) => list.aplicationId !== action.payload.aplicationId);
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
    builder.addCase(getList.fulfilled, (state, action) => {
      state.form.visible = true;
      state.project = action.payload;
    });
  },
});

export default projectSlice.reducer;
export const { addProject, updateProject, deleteProject, openProject, setForm } = projectSlice.actions;
