/* eslint-disable camelcase */
import axios from 'axios';

// userStore.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

// axios를 통한 통신
export const getList = createAsyncThunk('GET_SECTIONLIST', async () => {
  const response = await axios.get('http://localhost:8000/list');
  return response.data;
});

// state 타입 지정
interface Section {
  key?: string
  projectName: string
  asset?: Asset[]
}
interface Form {
  type: string
  mode: string
  visible: boolean
}
interface Asset {
  node_id: string
  adc1_type: string
  adc1_name: string
  adc2_type: string
  adc2_name: string
  adc3_type: string
  adc3_name: string  
  adc4_type: string
  adc4_name: string  
  adcDiff12_type: string
  adcDiff12_name: string  
  adcDiff34_type: string
  adcDiff34_name: string
}
interface State {
  section: Section[]
  form: Form
}
const demoSection = {
  projectName: '새만금 프로젝트',
  asset: [
    {
      node_id: 'ST_1451',
      adc1_type: '지진계',
      adc1_name: 'W-1',
      adc2_type: '구조물경사계',
      adc2_name: 'W-2',
      adc3_type: 'N/A',
      adc3_name: '',
      adc4_type: 'N/A',
      adc4_name: '',
      adcDiff12_type: 'N/A',
      adcDiff12_name: '',
      adcDiff34_type: 'N/A',
      adcDiff34_name: '',
    }
  ]
};
const initialState: State = {
  section: [demoSection],
  form: {
    type: '',
    mode: 'add',
    visible: false
  }
};

const sectionSlice = createSlice({
  name: 'section', // 액션타입의 이름이 중복되는것을 막기위한 네임값
  initialState, // 리듀서에서 사용되는 initialState
  reducers: { // 리듀서
    addSection(state, action: PayloadAction<Section>) { 
      state.section.push(action.payload);
      // immer가 내장 되어있어 알아서 불변성을 지켜준다.
    },
    updateSection(state, action: PayloadAction<Section>) {
      state.section.map((item) => {
        if (item.projectName === action.payload.projectName) {
          return { ...item.asset, ...action.payload };
        } else return item;
      });
    },
    openSection(state, action: PayloadAction<boolean>) {
      state.form.visible = action.payload;
    },
    setForm(state, action: PayloadAction<Form>) {
      state.form = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getList.fulfilled, (state, action) => {
      state.form.visible = true;
      state.section = action.payload;
    });
  },
});

export default sectionSlice.reducer;
export const { addSection, updateSection, openSection, setForm } = sectionSlice.actions;
