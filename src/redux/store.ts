// store.ts

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import projectReducer from './projectSlice';
import sectionReducer from './sectionSlice';
// RootReducer를 만든다.
const reducer = {
  user: userReducer,
  project: projectReducer,
  section: sectionReducer,
};

// 스토어 객체를 만든다.
export const store = configureStore({ reducer });
// 스토어 객체를 만드는 방법은 여러가지가 있습니다.
// 리덕스 툴킷 공식 문서에서는 configureStore로 예제가 작성되어있어 사용하였습니다.

export type RootState = ReturnType<typeof store.getState> 
// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch