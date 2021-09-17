import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../../components/Card/Card';
import { AutoComplete, Divider } from 'antd';
import Table from '../../components/Table/Table';
import { reportList } from './Interface';
import ReportForm from '../../components/Form/Report';
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
interface DummyEl {
  name: string,
  val: number
}
function ReportDash() {
  const [list, setList] = useState<DummyEl[]>([]);
  const dmArr: DummyEl[] = [];
  for (let i = 0; i < 26; i++) {
    const dummyEl = {
      name: '장비 번호 ' + i,
      val: i
    };
    dmArr.push(dummyEl);
  };

  useEffect(() => {
    setList(dmArr);
  }, []);

  return (
    <ClusterBlock>
      <AssetWrapper>
        {list.map((item, idx) => (
          <AssetBlock key={item.name + idx}>
            <label>{item.name}</label>
            <p>{item.val}</p>
          </AssetBlock>)
        )}
      </AssetWrapper>
      <ReportForm />
    </ClusterBlock>);
}

const ClusterBlock = styled.div`
    position: absolute;
    top: 60px;
    bottom: 0;
    left: 330px;
    width: calc(100% - 350px);
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
`;
const AssetWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  padding-bottom: 25px;
`;
const AssetBlock = styled.div`
  cursor: pointer;
  min-width: 130px;
  min-height: 100px;
  border: 1px solid;
  border-color: #eaeaea;
  color: ${(props) => props.theme.fontColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: .3em;
  font-size: 18px;
  & label {
    color: ${(props) => props.theme.fontColor};
    margin-bottom: 18px;
  }

  & p {
    text-align: center;
    font-size: 1.7em;
    font-weight: bold;
  }
`;

export default ReportDash;
