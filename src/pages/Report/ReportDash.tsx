import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReportForm from '../../components/Form/Report';
import LineChart from '../../components/Chart/LineChart';
import { FormData } from './Interface';
import ReportTable from './ReportTable';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const dataSource = [
  {
    date: '2021-09-23',
    battery: '3533.000',
    rssi: '-88.000',
    snr: '4.000',
    temp: '25.000'
  },
  {
    date: '2021-09-22',
    battery: '3533.000',
    rssi: '-88.000',
    snr: '1.000',
    temp: '25.000'
  },
  {
    date: '2021-09-21',
    battery: '3533.000',
    rssi: '-88.000',
    snr: '2.000',
    temp: '25.000'
  },
  {
    date: '2021-09-23',
    battery: '3533.000',
    rssi: '-88.000',
    snr: '4.000',
    temp: '25.000'
  },
  {
    date: '2021-09-22',
    battery: '3533.000',
    rssi: '-88.000',
    snr: '1.000',
    temp: '25.000'
  },
  {
    date: '2021-09-21',
    battery: '3533.000',
    rssi: '-88.000',
    snr: '2.000',
    temp: '25.000'
  },
  {
    date: '2021-09-23',
    battery: '3533.000',
    rssi: '-88.000',
    snr: '4.000',
    temp: '25.000'
  },
  {
    date: '2021-09-22',
    battery: '3533.000',
    rssi: '-88.000',
    snr: '1.000',
    temp: '25.000'
  },
  {
    date: '2021-09-21',
    battery: '3533.000',
    rssi: '-88.000',
    snr: '2.000',
    temp: '25.000'
  },
];
const columns = [
  {
    title: '계측일',
    key: 'date',
    dataIndex: 'date',
    sorter: (a: any, b: any) => Number(a.date.slice(-2)) - Number(b.date.slice(-2)),
  },
  {
    title: 'Battery(mV)',
    key: 'battery',
    dataIndex: 'battery',
  },
  {
    title: 'RSSI(dB)',
    key: 'rssi',
    dataIndex: 'rssi',
  },
  {
    title: 'SNR(dB)',
    key: 'snr',
    dataIndex: 'snr',
  },
  {
    title: '온도(℃)',
    key: 'temp',
    dataIndex: 'temp',
  }
];

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

interface DummyEl {
  name: string,
  val: number
}

function ReportDash(props: any) {
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

  const handleFormValue = (value: FormData) => {
    console.log('리포트 폼 값 :', value);
  };
  return (
    <ClusterBlock>
      <AssetWrapper>
        {list.map((item, idx) => (
          <AssetBlock key={item.name}>
            <label>{item.name}</label>
            <p>{item.val}</p>
          </AssetBlock>)
        )}
      </AssetWrapper>
      <ReportForm handleFormValue={handleFormValue} />
      <ChartWrapper>
        <LineChart data={props.lineData} />
      </ChartWrapper>
      <TableWrapper>
        <ReportTable dataSource={dataSource} columns={columns} />
        <Button className="download" type="primary" shape="round" onClick={() => console.log('click')} icon={<DownloadOutlined />} size={'middle'}>
          Export
        </Button>
      </TableWrapper>
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
const ChartWrapper = styled.section`
  border: 1px solid #eaeaea;
  padding: 10px 15px;
  border-radius: 10px;  
`;
const TableWrapper = styled.section`
  border: 1px solid #eaeaea;
  padding: 10px 15px;
  border-radius: 10px;  
  margin-top: 5px;
  position: relative;

  & button.download {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: .5rem;
  }
`;
export default ReportDash;
