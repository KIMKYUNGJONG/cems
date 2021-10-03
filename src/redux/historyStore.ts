// historyStore.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// state 타입 지정
interface State {
  title: string
  month: string
  loading: boolean
}

const initialState: State = {
  title: '리덕스 툴킷!!',
  month: '6월',
  loading: false
};

const historySlice = createSlice({
  name: 'history', // 액션타입의 이름이 중복되는것을 막기위한 네임값
  initialState, // 리듀서에서 사용되는 initialState
  reducers: { // 리듀서
    setTitle(state, action: PayloadAction<string>) { 
      state.loading = true;
      state.title = action.payload; // immer가 내장 되어있어 알아서 불변성을 지켜준다.
    },
    setMonth(state, action: PayloadAction<string>) {
      state.month = action.payload;
    },
    setOpen(state) {
      state.loading = false;
    }
  },
});

export default historySlice.reducer;
export const { setTitle, setMonth, setOpen } = historySlice.actions;