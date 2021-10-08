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
  projectName: string
  asset: Asset[]
}
interface SectionList {
  id: string | number
  section_name: string
  node_list: string[]
}
interface SensorList {
  id: string | number
  sensor_type: string
  max_value: string | number
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
  sectionList: SectionList[]
  sensorList: SensorList[]
  form: Form
}
const demoSectionList:SectionList = {
  id: '1',
  section_name: '공사구간A',
  node_list: ['node_A', 'node_B']
};
const demoSensorList:SensorList[] = [
  {
    id: '1',
    sensor_type: '지진계',
    max_value: '1000025'
  },
  {
    id: '2',
    sensor_type: '구조물경사계',
    max_value: '100'
  }
];
const demoSection:Section = {
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
  sectionList: [demoSectionList],
  sensorList: demoSensorList,
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
      // 섹션[]을 맵으로 나눈다.
      const updateSection = state.section.map((item:Section, idx)=> {
        // 해당 인덱스 섹션의 에셋 배열을 맵으로 나눈다.
        if (item.projectName === action.payload.projectName) {
          // 만약 해당 에셋의 노드 아이디와 페이로드의 노드아이디가 같다면,
          return { ...item, ...action.payload };
          // 현재 노드에 페이로드 데이터를 합산한다.
        } else return item;
      });
      state.section = updateSection;
    },
    addSectionList(state, action: PayloadAction<SectionList>) {
      state.sectionList.push(action.payload);
    },
    updateSectionList(state, action:PayloadAction<SectionList>) {
      const updateSectionList = state.sectionList.map((item:SectionList)=>{
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        } else return item;
      });
      state.sectionList = updateSectionList;
    },
    updateSectionName(state, action: PayloadAction<any>) {
      const updateSectionName = state.sectionList.map((item)=> {
        if (item.id === action.payload.id) {
          const newItem = Object.assign({}, item);
          newItem.section_name = action.payload.section_name;
          return newItem;
        }
        else {
          return item;
        }
      });
      state.sectionList = updateSectionName;
    },
    updateNodeList(state, action: PayloadAction<any>) {
      const updateNodeList = state.sectionList.map((item)=> {
        if (item.id === action.payload.id) {
          const newItem = Object.assign({}, item);
          newItem.node_list = action.payload.node_list;
          return newItem;
        }
        else {
          return item;
        }
      });
      state.sectionList = updateNodeList;
    },
    updateSensorValue(state, action: PayloadAction<SensorList>) {
      const updateSensorValue = state.sensorList.map((item)=> {
        if (item.id === action.payload.id) {
          const newItem = Object.assign({}, item);
          newItem.max_value = action.payload.max_value;
          return newItem;
        }
        else {
          return item;
        }
      });
      state.sensorList = updateSensorValue;
    },
    deleteSectionList(state, action: PayloadAction<SectionList>) {
      const newSectionList = state.sectionList.filter((item)=> item.id !== action.payload.id);
      state.sectionList = newSectionList;
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
export const { addSectionList, updateSectionList, updateNodeList, updateSectionName, deleteSectionList, updateSensorValue } = sectionSlice.actions;
