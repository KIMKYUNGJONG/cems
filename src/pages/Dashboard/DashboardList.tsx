import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../components/Card/Card';
import { AutoComplete, Divider } from 'antd';
import Table from '../../components/Table/Table';
import { dashboardList } from './Interface';

type optionType = {
  value: string;
  label: string;
}

const hexToRgb = (hexType: string) => {
  const hex = hexType.trim().replace('#', '');
  const rgb = (3 === hex.length) ?
    hex.match(/[a-f\d]/gi) : hex.match(/[a-f\d]{2}/gi);
  if (rgb) {
    rgb.forEach(function (str, x, arr: any[]) {
      if (str.length === 1) str = str + str;
      arr[x] = parseInt(str, 16);
    });
    return 'rgba(' + rgb.join(', ') + ', 0.9 )';
  }
};

const eventHandler = (event: any) => {
  if (event.kind === 'clickData') {
    console.log(event);
  }
};

const mockVal = (str: string | never, repeat: number = 1): optionType => ({
  value: str.repeat(repeat), // 실제 데이터 들어가야함.
  label: str
});

function DashboardList({ data, htValue, scene }: dashboardList) {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState<boolean>(true);
  const [options, setOptions] = useState([{ value: '' }]);
  const onSearch = (searchText: string | never) => {
    // 서치텍스트를 api로 호출해서 해당 결과에 대한 결과 배열을 가지고 와야함.
    setOptions(
      searchText ? [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)] : [],
    );
  };
  const onSelect = (result: string) => {
    console.log('onSelect', result);
    setLoading(false);
  };
  const onChange = (result: string) => {
    setValue(result);
    (result.length > 0) ? setLoading(false) : setLoading(true);
  };
  if (data) {
    return (<ClusterBlock>
      <Title>project list</Title>
      <AutoComplete
        value={value}
        options={options}
        style={{
          width: '100%',
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="Type project Name or console"
      />
      <Divider />
      <Table handleClick={eventHandler} />
      <Card data={data} loading={loading} />
    </ClusterBlock>);
  }
  return <ClusterBlock />;
}

const ClusterBlock = styled.div`
    position: absolute;
    top: 80px;
    bottom: 0;
    left: 0;
    width: 320px;
    height: auto;
    background-color: ${(props) => hexToRgb(props.theme.clusterBg)};
    color: ${(props) => props.theme.fontColor};
    z-index: 2;
    padding: 20px;
    font-size: 17px;
    border-radius: 20px;
    z-index: 3;
    margin: 10px;
    transition: all 0.3s ease-in-out;
    overflow-y: auto;
    box-sizing: border-box;

    &:hover {
      transform: perspective(1000px) rotateY(4deg);
    }
`;
const Title = styled.div`
  font-size: 1.5em;
  font-family: 'NanumSquare';
  text-transform: capitalize;
  color: ${(props) => props.theme.fontColor};
  padding-bottom: 1em;
`;

export default DashboardList;
