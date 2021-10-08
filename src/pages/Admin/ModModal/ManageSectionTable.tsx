import React, { useState, useRef } from 'react';
import 'antd/dist/antd.css';
import { Table, Input, Button, Space, Select, Popconfirm, message } from 'antd';
import styled from 'styled-components';

import { useAppDispatch } from '../../../redux/hooks';
import { openSection, addSectionList, updateSectionList, updateNodeList, updateSectionName, deleteSectionList } from '../../../redux/sectionSlice';

// 샘플 테이블 데이터
/* eslint-disable camelcase */
const { Option } = Select;
const dummySelect: any[] = [];
for (let i = 0; i < 10; i++) {
  dummySelect.push(<Option key={i.toString(10) + i} value={`PJ_${i}`} >{`Node_${i}`}</Option>);
}

const ManageSectionTable = ({ handleAddRow, handleSave, data }: any) => {
  const [sectionValue, setValue] = useState({});
  const [disabled, setDisabled] = useState(false);
  const inputRef = useRef<Input>(null);
  const dispatch = useAppDispatch();

  function confirm(e: any, record: any) {
    console.log(record);
    dispatch(deleteSectionList(record));
    message.success('데이터 삭제 완료');
  }

  function cancel(e: any) {
    console.log(e);
    message.error('데이터 삭제 취소');
  }

  const handleInputChange = (value: any, record: any, index: any) => {
    console.log(value, index); // 값, index
    const sendValue = { id: index + 1, section_name: value };
    setValue(sendValue);
    console.log(sendValue);
  };
  const handleSelectChange = (value: any, record: any, index: number) => {
    console.log(value, index); // [value], indexNumber
    /**
     * input 값과 다르게 바로 설정됨
     * [value] dispatch 할 수 있게 작성
     */
    const sendNode = { id: index + 1, node_list: value };
    dispatch(updateNodeList(sendNode));
  };
  const postValue = (value: any, target: any) => {
    console.log(target);
    inputRef.current!.blur();
    target.disabled = true;
    dispatch(updateSectionName(value));
  };
  const activate = (target: any) => {
    target.disabled = false;
    target.focus();
  };
  const SectionColumn = [
    {
      title: '공사구간명',
      dataIndex: 'section_name',
      key: 'section_name',
      align: 'center' as 'center',
      width: 100,
      render: (section_name: string, record: any, index: number) => {
        return (
          <Input key={section_name} id={`input_${index}`} defaultValue={section_name}
            disabled={disabled}
            ref={inputRef}
            onChange={(e) => handleInputChange(e.target.value, record, index)}
            onClick={(e) => activate(e.target)}
            onKeyPress={(e) => e.key === 'Enter' ? postValue(sectionValue, e.target) : null}
            onBlur={e => { e.currentTarget.disabled = true; postValue(sectionValue, e.target); }}
          />
        );
      }
    },
    {
      title: '노드 리스트',
      dataIndex: 'node_list',
      key: 'node_list',
      align: 'center' as 'center',
      width: 240,
      render: (node_list: string[], record: any, index: number) => (
        <Select
          mode="multiple"
          size={'middle'}
          placeholder="Please select"
          defaultValue={node_list}
          onChange={(value) => handleSelectChange(value, record, index)}
          style={{ width: '100%' }}
        >
          {dummySelect}
        </Select>
      )
    },
    {
      title: '삭제',
      key: 'action',
      width: 80,
      render: (text: string, record: any, index: number) => (
        <Space size="middle">
          <Popconfirm
            title="데이터를 삭제하시겠습니까?"
            onConfirm={(e) => confirm(e, record)}
            onCancel={cancel}
            okText="확인"
            cancelText="취소"
          >
            <Button type="primary" danger>삭제</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <StWrapper>
      <ButtonAdd>
        <Button style={{ borderRadius: '15px', marginBottom: '10px' }} type="primary" onClick={handleAddRow}>열 추가</Button>
      </ButtonAdd>
      <Table
        size="small"
        rowKey={(record: any) => record.node_id}
        onRow={(record, rowIndex) => {
          return {
            onClick: event => { console.log(record, rowIndex); }, // click row
          };
        }}
        columns={SectionColumn} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ y: 180 }} />
      <ButtonGroup>
        <Button type="primary" onClick={() => handleSave(data)}>저장</Button>
        <Button onClick={() => dispatch(openSection(false))}>취소</Button>
      </ButtonGroup>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  min-height: 280px;
  overflow: auto;

  & .ant-table-wrapper {
    max-height: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: inline-flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  & button {
    margin: 0 10px;
    width: 150px;
  }
`;
const ButtonAdd = styled.div`
  display: inline-flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10px;
  & button {
    width: 100px;
  }
`;
export default ManageSectionTable;