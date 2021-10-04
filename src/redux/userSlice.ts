import axios from 'axios';

// userStore.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

// axios를 통한 통신
export const getList = createAsyncThunk('GET_USERLIST', async () => {
  const response = await axios.get('http://localhost:8000/list');
  return response.data;
});

// state 타입 지정
interface User {
  key?: string
  id: string
  company: string
  manager: string
  contact: string
  email: string
  memo: string
  project?: string[]
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
const demoUser = {
  id: 'User1',
  company: 'COM1',
  manager: 'Admin1',
  contact: '010-0000-0000',
  email: 'google@google.com',
  memo: '',
  project: ['PJ_01', 'PJ_02'],
};
const initialState: State = {
  user: [demoUser],
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
    builder.addCase(getList.fulfilled, (state, action) => {
      state.form.visible = true;
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
export const { addUser, updateUser, openUser, deleteUser, setForm } = userSlice.actions;
