/* eslint-disable camelcase */
import axios from 'axios';

// userStore.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiGetUsers, setupAxiosInterceptors, apiAddOrUpdateUser, apiDeleteUserById } from '../lib/apiUser';

// axios를 통한 통신
export const getUserList = createAsyncThunk('GET_USERLIST', async () => {
  setupAxiosInterceptors();
  const result = await apiGetUsers().then(response => {
    return response.data;
  });
  console.log('result ', result);
  return result;
});
export const handleUserList = createAsyncThunk(
  'UPDATE_USERLIST', 
  async (data:User) => {
    setupAxiosInterceptors();
    const result = await apiAddOrUpdateUser(data).then(response => {
      // return console.log('apiAddOrUpdateProject ============ ', response.data);
      return response.data;
    });
    console.log('updateResult', result);
    return result;
  });
export const deleteUserList = createAsyncThunk(
  'UPDATE_PROJECTLIST', 
  async (id:string) => {
    setupAxiosInterceptors();
    const result = await apiDeleteUserById(id).then(response => {
      //return console.log('apiDeleteProject ============ ', response.data);
      return response.data;
    });
    console.log('deleteResult', result);
    return result;
  });
// state 타입 지정
interface User {
  id: string
  username: string
  password: string
  company_name: string
  manager_name: string
  contact_number: string
  email: string
  note: string
  projectNameList: string[]
  projects: string | string[]
}

interface Form {
  type: string
  mode: string
  visible: boolean
}

interface State {
  user: User[]
  form: Form
}

const initialState: State = {
  user: [],
  form: {
    type: '',
    mode: 'add',
    visible: false
  }
};

const userSlice = createSlice({
  name: 'user', // 액션타입의 이름이 중복되는것을 막기위한 네임값
  initialState, // 리듀서에서 사용되는 initialState
  reducers: { // 리듀서
    addUser(state, action: PayloadAction<User>) { 
      state.user.push(action.payload);
      // immer가 내장 되어있어 알아서 불변성을 지켜준다.
    },
    updateUser(state, action: PayloadAction<User>) {
      const updateUser = state.user.map((item) => {
        if (item.id === action.payload.id) {
          const newValue =  { ...item, ...action.payload };
          return newValue;
        } else return item;
      });
      state.user = updateUser;
    },
    deleteUser(state, action: PayloadAction<User>) {
      const newUser = state.user.filter((list) => list.id !== action.payload.id);
      // "Mutate" the existing state to save the new array
      state.user = newUser;
    },
    openUser(state, action: PayloadAction<boolean>) {
      state.form.visible = action.payload;
    },
    setForm(state, action: PayloadAction<Form>) {
      state.form = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUserList.fulfilled, (state, action) => {
      const userList = [...action.payload];
      state.user = userList;
    });
  },
});

export default userSlice.reducer;
export const { addUser, updateUser, openUser, deleteUser, setForm } = userSlice.actions;
