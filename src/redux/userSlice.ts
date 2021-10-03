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
  project: string[]
}
interface State {
  visible: boolean
  user: User[]
}

const initialState: State = {
  visible: false,
  user: []
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
      state.user.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        } else return item;
      });
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getList.fulfilled, (state, action) => {
      state.visible = true;
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
export const { addUser, updateUser } = userSlice.actions;
